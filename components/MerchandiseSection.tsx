
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { RightArrowIcon } from './Icons';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMedia {
    data: { attributes: { url: string; } }
}
interface StoreItemAttributes {
    name: string;
    price: string;
    category: string;
    image: StrapiMedia;
    slug: string;
}
interface StrapiStoreItem {
    id: number;
    attributes: StoreItemAttributes;
}
// --- End Strapi Data Types ---


interface MerchCardProps {
  item: StrapiStoreItem;
  onNavigate: (view: View) => void;
}

const MerchCard: React.FC<MerchCardProps> = ({ item, onNavigate }) => {
  const { name, price, category, image, slug } = item.attributes;
  return (
    <button onClick={() => onNavigate({ page: 'ProductDetail', id: slug })} className="bg-brand-gray rounded-lg overflow-hidden group shadow-lg flex flex-col text-left h-full">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={`${STRAPI_URL}${image.data.attributes.url}`}
          alt={`Produk: ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] font-semibold px-2 py-1 rounded-full">{category}</div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-white text-base md:text-lg flex-grow min-h-[56px] flex items-center">{name}</h3>
        <div className="mt-2 sm:mt-4 flex justify-between items-center">
          <p className="text-green-500 font-semibold text-base md:text-lg">{price}</p>
          <div className="w-8 h-8 rounded-full border-2 border-gray-600 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-all duration-300">
              <RightArrowIcon />
          </div>
        </div>
      </div>
    </button>
  );
};

const categories = ['Semua', 'Merchandise Official', 'Gear & Accessories', 'Secondhand Gear'];

interface MerchandiseSectionProps {
    isPreview?: boolean;
    onNavigate: (view: View) => void;
}

const MerchandiseSection: React.FC<MerchandiseSectionProps> = ({ isPreview, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [allStoreItems, setAllStoreItems] = useState<StrapiStoreItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch(`${STRAPI_URL}/api/store-items?populate=*`);
            const data = await response.json();
            setAllStoreItems(data.data || []);
        } catch (error) {
            console.error("Failed to fetch store items:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchItems();
  }, []);

  const filteredItems = activeCategory === 'Semua'
    ? allStoreItems
    : allStoreItems.filter(item => item.attributes.category === activeCategory);

  const finalItems = isPreview ? allStoreItems.slice(0, 3) : filteredItems;

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Toko Tripod Keliling<span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Dukung komunitas dan lengkapi kebutuhan fotografimu di sini.
          </p>
        </div>
        
        {!isPreview && (
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
        )}
        
        {loading ? (
            <div className="text-center text-gray-400">Memuat produk...</div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {finalItems.map((item) => (
                <MerchCard key={item.id} item={item} onNavigate={onNavigate} />
            ))}
            </div>
        )}

        {isPreview && !loading && (
            <div className="text-center mt-12">
                <button
                    onClick={() => onNavigate({ page: 'Store' })}
                    className="border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Lihat Semua Koleksi
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default MerchandiseSection;
