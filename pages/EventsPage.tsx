
import React from 'react';
import EventSection from '../components/EventSection';
import { View } from '../App';

interface EventsPageProps {
    onNavigate: (view: View) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 md:pt-24 min-h-screen">
      <EventSection onNavigate={onNavigate} />
    </div>
  );
};

export default EventsPage;