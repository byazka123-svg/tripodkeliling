
import React from 'react';
import { InstagramIcon, FacebookIcon, XTwitterIcon } from './Icons';

const Logo = () => (
    <a href="#">
        <img className="h-10 w-auto" src="https://ik.imagekit.io/hrctvvb3m/a6ca3c95-1577-4719-8200-6b452ca914b2.png" alt="Tripod Keliling Logo" />
    </a>
  );

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <XTwitterIcon />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear() + 2} Tripod Keliling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
