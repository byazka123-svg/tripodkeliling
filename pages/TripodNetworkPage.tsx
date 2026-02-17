
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import NetworkProfileCard from '../components/NetworkProfileCard';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMediaFlat {
    url: string;
}
export interface StrapiProfile {
    id: number;
    name: string;
    category: 'Fotografer' | 'Videografer' | 'Drone Pilot' | 'MUA' | 'Model' | 'Mentor' | 'Brand';
    avatar: StrapiMediaFlat | null;
    tagline: string;
    portfolioLink: string;
    slug: string;
}
// --- End Strapi Data Types ---

type CategoryFilter = 'Semua' | StrapiProfile['category'];

const categories: CategoryFilter[] = ['Semua', 'Fotografer', 'Videografer', 'Drone Pilot', 'MUA', 'Model', 'Mentor', 'Brand'];

interface TripodNetworkPageProps {
    onNavigate: (view: View) => void;
}

const TripodNetworkPage: React.FC<TripodNetworkPageProps> = ({ onNavigate }) => {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Semua');
    const [allProfiles, setAllProfiles] = useState<StrapiProfile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetch(`${STRAPI_URL}/api/profiles?populate=*`);
                const data = await response.json();
                setAllProfiles(data.data || []);
            } catch (error) {
                console.error("Failed to fetch profiles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfiles();
    }, []);

    const filteredProfiles = activeCategory === 'Semua'
        ? allProfiles
        : allProfiles.filter(profile => profile.category === activeCategory);

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
                    {loading ? (
                        <div className="text-center text-gray-400">Memuat profil...</div>
                    ) : filteredProfiles.length > 0 ? (
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
