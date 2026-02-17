
import React, { useState, useEffect } from 'react';
import { LocationMarkerIcon } from './Icons';
import { View } from '../App';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiEvent {
    id: number;
    title: string;
    location: string;
    date: string; // ISO String from Strapi
    slug: string;
}
// --- End Strapi Data Types ---

interface EventItemProps {
  event: StrapiEvent;
  onNavigate: (view: View) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onNavigate }) => {
    const { date, title, location, slug } = event;
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('id-ID', { month: 'short' }).toUpperCase();

    return (
        <button onClick={() => onNavigate({ page: 'EventDetail', id: slug })} className="w-full flex items-center bg-brand-gray p-4 rounded-lg gap-4 hover:bg-gray-800 transition-colors duration-300 border border-gray-700 text-left">
            <div className="flex-shrink-0 text-center bg-gray-900 rounded-lg p-2 w-16 h-16 flex flex-col justify-center items-center border border-green-500">
                <span className="text-2xl font-bold text-white">{day}</span>
                <span className="text-xs font-semibold text-green-500 uppercase">{month}</span>
            </div>
            <div className="flex-grow overflow-hidden">
                <h3 className="text-md sm:text-lg font-bold text-white mb-1 truncate">{title}</h3>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                    <LocationMarkerIcon />
                    <span className="ml-2 truncate">{location}</span>
                </div>
            </div>
            <div className="flex-shrink-0 ml-auto hidden sm:block">
                <span className="text-center bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition-all duration-300">
                    Detail
                </span>
            </div>
        </button>
    );
};

const filters = ['Semua Event', 'Hari Ini', 'Minggu Ini', 'Bulan Ini'];

interface EventSectionProps {
    isPreview?: boolean;
    onNavigate: (view: View) => void;
}

const EventSection: React.FC<EventSectionProps> = ({ isPreview, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('Semua Event');
  const [allEvents, setAllEvents] = useState<StrapiEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await fetch(`${STRAPI_URL}/api/events?sort=date:asc`);
            const data = await response.json();
            const formattedData = data.data.map((item: any) => ({
              id: item.id,
              ...item.attributes,
            }));
            setAllEvents(formattedData || []);
        } catch (error) {
            console.error("Failed to fetch events:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchEvents();
  }, []);

  const filteredEvents = allEvents.filter(event => {
    if (!event?.date) {
      return false;
    }
    const eventDate = new Date(event.date);
    const now = new Date();
    
    eventDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if (activeFilter === 'Semua Event') return true;
    if (activeFilter === 'Hari Ini') return eventDate.getTime() === now.getTime();
    
    if (activeFilter === 'Minggu Ini') {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1));
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return eventDate >= startOfWeek && eventDate <= endOfWeek;
    }

    if (activeFilter === 'Bulan Ini') {
        const nowForMonth = new Date();
        return eventDate.getMonth() === nowForMonth.getMonth() && eventDate.getFullYear() === nowForMonth.getFullYear();
    }
    
    return true;
  });

  const finalEvents = isPreview ? filteredEvents.slice(0, 3) : filteredEvents;

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Agenda Kegiatan<span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk belajar dan berkarya bersama kami.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-green-600 text-white'
                  : 'bg-brand-gray text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
            {loading ? (
                <div className="text-center text-gray-400">Memuat event...</div>
            ) : finalEvents.length > 0 ? (
                finalEvents.map((event) => (
                    <EventItem key={event.id} event={event} onNavigate={onNavigate} />
                ))
            ) : (
                <div className="text-center py-10 px-6 bg-brand-gray rounded-lg">
                    <p className="text-gray-400">Tidak ada agenda untuk kategori "{activeFilter}".</p>
                </div>
            )}
        </div>

        {isPreview && !loading && (
            <div className="text-center mt-12">
                <button 
                    onClick={() => onNavigate({ page: 'Event' })} 
                    className="border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Lihat Semua Event
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
