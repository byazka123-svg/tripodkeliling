
import React from 'react';
import MerchandiseSection from '../components/MerchandiseSection';
import { View } from '../App';

interface StorePageProps {
    onNavigate: (view: View) => void;
}

const StorePage: React.FC<StorePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 md:pt-24 min-h-screen">
      <MerchandiseSection onNavigate={onNavigate} />
    </div>
  );
};

export default StorePage;