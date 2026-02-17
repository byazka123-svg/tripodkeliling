
import React from 'react';
import { View } from '../App';
import { HeartIcon, ShoppingBagIcon } from './Icons';

interface SupportSectionProps {
    onNavigate: (view: View) => void;
}

const SupportSection: React.FC<SupportSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Dukung & Jadi Bagian dari Kami<span className="text-green-500">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Kontribusi Anda membantu kami terus bergerak, berkarya, dan menciptakan dampak.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Merchandise Card */}
                    <div className="bg-brand-dark rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center">
                        <div className="text-green-500 mb-4">
                            <ShoppingBagIcon isBottomNav />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Beli Merchandise</h3>
                        <p className="text-gray-400 mb-6 flex-grow">
                            Tunjukkan dukunganmu dengan memiliki merchandise official kami. Setiap pembelian adalah energi baru untuk komunitas.
                        </p>
                        <button
                            onClick={() => onNavigate({ page: 'Store' })}
                            className="w-full bg-gray-700 text-white hover:bg-green-600 font-bold py-3 px-6 rounded-md transition-all duration-300"
                        >
                            Kunjungi Toko
                        </button>
                    </div>

                    {/* Donation Card */}
                    <div className="bg-brand-dark rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center">
                        <div className="text-green-500 mb-4">
                            <HeartIcon />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Beri Donasi</h3>
                        <p className="text-gray-400 mb-6 flex-grow">
                            Donasi Anda sangat berarti untuk mendukung keberlangsungan workshop, hunting, dan pameran gratis.
                        </p>
                        <a
                            href="#" // Placeholder for donation link
                            className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-md transition-all duration-300 inline-block"
                        >
                            Donasi Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
