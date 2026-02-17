
import React, { useState } from 'react';
import { View } from '../App';
import { mockProfiles, Profile } from '../data/network';
import NetworkProfileCard from '../components/NetworkProfileCard';

type CategoryFilter = 'Semua' | Profile['category'];

const categories: CategoryFilter[] = ['Semua', 'Fotografer', 'Videografer', 'Drone Pilot', 'MUA', 'Model', 'Mentor', 'Brand'];

interface TripodNetworkPageProps {
    onNavigate: (view: View) => void;
}

const TripodNetworkPage: React.FC<TripodNetworkPageProps> = ({ onNavigate }) => {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Semua');

    const filteredProfiles = activeCategory === 'Semua'
        ? mockProfiles
        : mockProfiles.filter(profile => {
            // Group MUA and Model together for filtering if needed, but here we separate
            return profile.category === activeCategory;
        });

    return (
        <div className="bg-brand-dark pt-16 md:pt-20 min-h-screen">
            {/* Header Section */}
            <section className="py-12 bg-brand-gray text-center border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
                        Tripod Network<span className="text-green-500">.</span>
                    </h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                        Database profesional kreatif dari komunitas kami. Siap untuk diajak berkolaborasi.
                    </p>
                </div>
            </section>
            
            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeCategory === category
                                    ? 'bg-green-600 text-white'
                                    : 'bg-brand-gray text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Profiles Grid */}
                    {filteredProfiles.length > 0 ? (
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredProfiles.map(profile => (
                                <NetworkProfileCard key={profile.id} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 px-6 bg-brand-gray rounded-lg">
                            <p className="text-gray-400">Tidak ada profil untuk kategori "{activeCategory}".</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TripodNetworkPage;
