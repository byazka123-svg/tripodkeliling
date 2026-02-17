
import React from 'react';
import { HomeIcon, CalendarIcon, NewspaperIcon, UsersIcon, ShoppingBagIcon } from './Icons';
import { View } from '../App';

const navItems = [
  { name: 'Beranda', icon: <HomeIcon /> },
  { name: 'Event', icon: <CalendarIcon isBottomNav={true} /> },
  { name: 'Blog', icon: <NewspaperIcon /> },
  { name: 'Network', icon: <UsersIcon isBottomNav={true} /> },
  { name: 'Store', icon: <ShoppingBagIcon isBottomNav={true} /> },
];

interface BottomNavbarProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-sm border-t border-gray-700 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate({ page: item.name })}
            aria-label={item.name}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentView.page === item.name
                ? 'text-green-500'
                : 'text-gray-400 hover:text-green-500'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
