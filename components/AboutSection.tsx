
import React, { useState, useEffect } from 'react';

// StatCard with count-up animation - Refined for a sleeker look
const StatCard: React.FC<{ endValue: number; suffix: string; label: string }> = ({ endValue, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(1, (timestamp - startTime) / duration);
      
      const easedProgress = 1 - Math.pow(1 - progress, 5); // Quintic ease-out
      const currentCount = Math.floor(easedProgress * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    const animationFrameId = requestAnimationFrame(animateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue]);
  
  return (
    <div className="py-3 md:py-4 text-right">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
        {count}<span className="text-green-500 font-bold">{suffix}</span>
      </p>
      <p className="mt-1 text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{label}</p>
    </div>
  );
};


const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-6 md:gap-12 items-center">
                    {/* Left Column: About Text */}
                    <div className="text-left">
                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                            Lebih dari Sekadar Komunitas<span className="text-green-500">.</span>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-gray-300 text-justify">
                            Tripod Keliling lahir dari keyakinan bahwa fotografi adalah perjalanan kolektif. Kami bukan hanya sekumpulan orang dengan kamera, tapi sebuah keluarga kreatif yang saling mendukung di Bekasi dan sekitarnya.
                        </p>
                         <p className="mt-4 text-sm sm:text-base text-gray-300 text-justify">
                           Setiap hunting, workshop, dan proyek kolaborasi adalah bab baru dalam cerita kita. Di sini, setiap lensa punya suara, dan setiap suara kami dengarkan. Mari tumbuh bersama kami.
                        </p>
                    </div>

                    {/* Right Column: Sleek Stats Counter */}
                    <div className="flex flex-col justify-center divide-y divide-gray-700">
                        <StatCard endValue={1000} suffix="+" label="Partisipan Event" />
                        <StatCard endValue={300} suffix="+" label="Anggota & Kolaborator" />
                        <StatCard endValue={50} suffix="+" label="Kegiatan Sejak 2020" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
