
import React from 'react';
import { View } from '../App';
import { CameraIcon, VideoCameraIcon, PaperAirplaneIcon, UserCircleIcon, AcademicCapIcon, CubeIcon } from './Icons';

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    onNavigate: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, onNavigate }) => (
    <button onClick={onNavigate} className="bg-brand-gray border border-gray-700 rounded-lg p-4 text-center group hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex justify-center text-green-500 mb-3 group-hover:text-green-400 transition-colors">
            {icon}
        </div>
        <h3 className="font-bold text-sm text-white">{title}</h3>
    </button>
);

const categories = [
    { icon: <CameraIcon className="h-8 w-8" />, title: "Fotografer" },
    { icon: <VideoCameraIcon />, title: "Videografer" },
    { icon: <PaperAirplaneIcon />, title: "Drone Pilot" },
    { icon: <UserCircleIcon />, title: "MUA & Model" },
    { icon: <AcademicCapIcon />, title: "Mentor" },
    { icon: <CubeIcon />, title: "Brand & Partner" }
];

interface TripodNetworkSectionProps {
    onNavigate: (view: View) => void;
}

const TripodNetworkSection: React.FC<TripodNetworkSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Temukan Jaringan Kreatif Kami<span className="text-green-500">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Temukan dan terhubung dengan para profesional kreatif di ekosistem kami.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {categories.map(category => (
                        <CategoryCard 
                            key={category.title} 
                            icon={category.icon} 
                            title={category.title}
                            onNavigate={() => onNavigate({ page: 'Network' })}
                        />
                    ))}
                </div>

                 <div className="text-center mt-12">
                    <button
                        onClick={() => onNavigate({ page: 'Network' })}
                        className="border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Jelajahi Semua Jaringan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TripodNetworkSection;
