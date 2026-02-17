
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';
import { View } from '../App';

const Logo = () => (
    <a href="#">
        <img className="h-8 w-auto" src="https://ik.imagekit.io/hrctvvb3m/a6ca3c95-1577-4719-8200-6b452ca914b2.png" alt="Tripod Keliling Logo" />
    </a>
);

interface NavbarProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Beranda', 'Event', 'Blog', 'Network', 'Kolaborasi'];

  const handleLinkClick = (link: string) => {
    onNavigate({ page: link });
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    onNavigate({ page: 'Login' });
    setIsOpen(false);
  }

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <button onClick={() => handleLinkClick('Beranda')} aria-label="Go to Homepage">
                <Logo />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView.page === link ? 'text-green-500' : 'text-gray-300 hover:text-green-500'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button onClick={handleLoginClick} className="border border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-md text-sm transition-all duration-300">
              Login/Register
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                    currentView.page === link ? 'bg-gray-700 text-green-500' : 'text-gray-300 hover:bg-gray-700 hover:text-green-500'
                }`}
              >
                {link}
              </button>
            ))}
             <div className="pt-2 px-2">
                <button onClick={handleLoginClick} className="w-full border border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-md text-sm transition-all duration-300">
                    Login/Register
                </button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
