
import React from 'react';
import { StrapiProfile } from '../pages/TripodNetworkPage';
import { STRAPI_URL } from '../config';

interface NetworkProfileCardProps {
    profile: StrapiProfile;
}

const NetworkProfileCard: React.FC<NetworkProfileCardProps> = ({ profile }) => {
    const { name, category, tagline, portfolioLink, avatar } = profile;
    const avatarUrl = avatar?.url 
        ? `${STRAPI_URL}${avatar.url}` 
        : 'https://via.placeholder.com/200'; // Fallback image

    return (
        <div className="bg-brand-gray border border-gray-700 rounded-lg p-4 sm:p-6 text-center group hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
            <img 
                src={avatarUrl} 
                alt={`Avatar of ${name}`} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-4 border-gray-600 group-hover:border-green-500 transition-colors object-cover"
            />
            <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-white">{name}</h3>
                <p className="text-sm font-semibold text-green-500 mb-3">{category}</p>
                <p className="text-gray-400 text-sm">{tagline}</p>
            </div>
            <a 
                href={portfolioLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full bg-gray-700 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-md text-sm transition-all duration-300"
            >
                Lihat Portfolio
            </a>
        </div>
    );
};

export default NetworkProfileCard;
