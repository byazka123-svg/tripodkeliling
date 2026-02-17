
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { LocationMarkerIcon, CalendarIcon } from '../components/Icons';
import { STRAPI_URL } from '../config';
import EventRegistrationModal from '../components/EventRegistrationModal';

// --- Strapi Data Types ---
interface StrapiMediaFlat {
    url: string;
}
interface StrapiEvent {
    id: number;
    title: string;
    location: string;
    description: string;
    date: string; // ISO String from Strapi
    slug: string;
    poster?: StrapiMediaFlat;
}
// --- End Strapi Data Types ---

interface EventDetailPageProps {
  id: string; // This is the slug
  onNavigate: (view: View) => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ id, onNavigate }) => {
  const [event, setEvent] = useState<StrapiEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
        if (!id) return;
        setLoading(true);
        try {
            // Updated to populate all related fields, including the new 'poster'
            const response = await fetch(`${STRAPI_URL}/api/events?filters[slug][$eq]=${id}&populate=*`);
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                const rawEvent = data.data[0];
                const formattedEvent = {
                    id: rawEvent.id,
                    ...rawEvent.attributes,
                    poster: rawEvent.attributes.poster?.data?.attributes,
                };
                setEvent(formattedEvent);
            } else {
                setEvent(null);
            }
        } catch (error) {
            console.error("Failed to fetch event:", error);
            setEvent(null);
        } finally {
            setLoading(false);
        }
    };
    fetchEvent();
  }, [id]);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="pt-24 text-center text-gray-400">Memuat detail event...</div>;
  }

  if (!event) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-white">Event tidak ditemukan.</h1>
        <button 
          onClick={() => onNavigate({ page: 'Event' })}
          className="mt-4 text-green-500 hover:underline"
        >
          Kembali ke Agenda
        </button>
      </div>
    );
  }

  const { title, location, description, date, poster } = event;

  const formattedDate = date ? new Date(date).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) : 'Tanggal tidak tersedia';

  return (
    <>
      <div className="pt-16 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
          <div className="bg-brand-gray rounded-lg p-6 md:p-8 border border-gray-700">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h1>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-300 mb-6 pb-6 border-b border-gray-600">
                  <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <LocationMarkerIcon />
                      <span>{location}</span>
                  </div>
              </div>

              {/* Event Poster Section */}
              {poster?.url && (
                <div className="mb-8">
                    <img 
                        src={`${STRAPI_URL}${poster.url}`} 
                        alt={`Poster event ${title}`}
                        className="w-full h-auto object-contain bg-black rounded-lg border border-gray-700"
                    />
                </div>
              )}
              
              <h2 className="text-xl font-bold text-white mb-3">Deskripsi Acara</h2>
              <div className="text-gray-300 leading-relaxed mb-8 text-justify whitespace-pre-wrap">{description}</div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleRegisterClick}
                    className="w-full text-center bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-md transition-all">
                      Daftar Sekarang
                  </button>
                  <button 
                      onClick={() => onNavigate({ page: 'Event' })}
                      className="w-full text-center border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-bold py-3 px-6 rounded-md transition-all"
                  >
                      Kembali
                  </button>
              </div>
          </div>
        </div>
      </div>
      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={event}
      />
    </>
  );
};

export default EventDetailPage;
