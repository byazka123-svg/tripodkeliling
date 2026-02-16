
import React from 'react';
import { allEvents } from '../data/events';
import { View } from '../App';
import { LocationMarkerIcon, CalendarIcon } from '../components/Icons';

interface EventDetailPageProps {
  id: string;
  onNavigate: (view: View) => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ id, onNavigate }) => {
  const event = allEvents.find(e => e.id === id);

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

  const formattedDate = event.date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="pt-16 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="bg-brand-gray rounded-lg p-6 md:p-8 border border-gray-700">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{event.title}</h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-300 mb-6 pb-6 border-b border-gray-600">
                <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                    <LocationMarkerIcon />
                    <span>{event.location}</span>
                </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-3">Deskripsi Acara</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-justify">{event.description}</p>
            
            <div className="mb-8">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-gray-500 border border-gray-700">
                    <p>Map Placeholder</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="w-full text-center bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-md transition-all">
                    Daftar Sekarang
                </a>
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
  );
};

export default EventDetailPage;
