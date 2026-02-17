
import React from 'react';
import { View } from '../App';

interface HeroSectionProps {
    onNavigate: (view: View) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://ik.imagekit.io/hrctvvb3m/wsdwdw.png')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
          Jelajahi Visual, Abadikan Momen <span className="text-green-500">Bersama</span>.
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Wadah belajar, hunting, dan berkarya bagi para pegiat fotografi se-Jabodetabek. Berbasis di Bekasi.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => onNavigate({ page: 'Event' })} className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
            Lihat Agenda Terdekat
          </button>
          <button onClick={() => onNavigate({ page: 'Daftar' })} className="border-2 border-white text-white hover:bg-white hover:text-brand-dark font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105">
            Jadi Anggota
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
