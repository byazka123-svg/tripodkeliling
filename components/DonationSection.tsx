
import React from 'react';
import { HeartIcon } from './Icons';

const DonationSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
            <div className="text-green-500">
                <HeartIcon />
            </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Dukung Kegiatan Kami<span className="text-green-500">.</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Donasi Anda sangat berarti untuk mendukung keberlangsungan kegiatan komunitas, seperti workshop, hunting, dan pameran.
        </p>
        <div className="mt-10">
          <a
            href="#" // Placeholder for donation link
            className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-10 rounded-md text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Donasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;