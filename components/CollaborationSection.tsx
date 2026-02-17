
import React, { useState } from 'react';
import { CameraIcon, UsersIcon, SparklesIcon } from './Icons';
import { View } from '../App';

interface CollaborationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onNavigate: (view: View) => void;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ icon, title, description, onNavigate }) => (
  <div className="bg-brand-gray border border-gray-700 rounded-lg p-4 md:p-8 group hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
    <div className="text-green-500 mb-4">
      {icon}
    </div>
    <h3 className="text-base md:text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-400 flex-grow mb-4">{description}</p>
    <button onClick={() => onNavigate({ page: 'Kolaborasi' })} className="mt-auto self-start text-xs md:text-sm font-bold text-green-500 border border-green-500 rounded-full px-3 md:px-4 py-2 hover:bg-green-600 hover:text-white transition-all duration-300">
        Pelajari
    </button>
  </div>
);

const collaborations = [
    {
      icon: <CameraIcon />,
      title: "Talent/Model",
      description: "Kembangkan portofolio Anda melalui proyek TFP (Time for Print) yang kreatif dan terkonsep bersama fotografer kami."
    },
    {
      icon: <UsersIcon />,
      title: "Dokumentasi & Liputan",
      description: "Butuh liputan media? Jadikan kami media partner untuk mendokumentasikan dan mempublikasikan event Anda ke audiens yang lebih luas."
    },
    {
      icon: <SparklesIcon />,
      title: "Brand/Organization",
      description: "Kerjasama sponsorship, peluncuran produk, review gear, hingga penyelenggaraan workshop untuk mencapai tujuan bersama."
    }
  ];

interface CollaborationSectionProps {
    isPreview?: boolean;
    onNavigate: (view: View) => void;
}

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ isPreview, onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Swipe gesture handlers for mobile
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const minSwipeDistance = 50;

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0); 
        setTouchStart(e.targetTouches[0].clientX);
    };
    
    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        // One card scroll logic for 2-up view
        const maxIndex = collaborations.length - 2;

        if (isLeftSwipe) {
            setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        }
        
        if (isRightSwipe) {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
        
        setTouchStart(0);
        setTouchEnd(0);
    };

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Yuk Kolaborasi<span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Kami terbuka untuk berbagai bentuk kolaborasi yang kreatif dan inovatif.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
            <div 
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                    {collaborations.map((collab, index) => (
                         <div key={index} className="w-1/2 flex-shrink-0 px-2">
                             <CollaborationCard {...collab} onNavigate={onNavigate} />
                         </div>
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 pt-6">
                {Array.from({ length: collaborations.length - 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'w-6 bg-green-500' : 'bg-gray-600'
                        }`}
                    />
                ))}
            </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
                <CollaborationCard key={index} {...collab} onNavigate={onNavigate} />
            ))}
        </div>

        {isPreview && (
            <div className="text-center mt-12">
                <button 
                    onClick={() => onNavigate({ page: 'Kolaborasi' })} 
                    className="border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Pelajari Lebih Lanjut
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default CollaborationSection;
