
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import CheckoutModal from '../components/CheckoutModal';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMediaFlat {
    url: string;
}
interface StrapiStoreItem {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
    image: StrapiMediaFlat;
    slug: string;
}
// --- End Strapi Data Types ---

interface ProductDetailPageProps {
  id: string; // This is the slug
  onNavigate: (view: View) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ id, onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<StrapiStoreItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const response = await fetch(`${STRAPI_URL}/api/store-items?filters[slug][$eq]=${id}&populate=*`);
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setProduct(data.data[0]);
            } else {
                setProduct(null);
            }
        } catch (error) {
            console.error("Failed to fetch product:", error);
            setProduct(null);
        } finally {
            setLoading(false);
        }
    };
    fetchProduct();
  }, [id]);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="pt-24 text-center text-gray-400">Memuat produk...</div>;
  }

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-white">Produk tidak ditemukan.</h1>
        <button 
          onClick={() => onNavigate({ page: 'Store' })}
          className="mt-4 text-green-500 hover:underline"
        >
          Kembali ke Toko
        </button>
      </div>
    );
  }
  
  const { name, category, price, description, image } = product;
  const imageUrl = `${STRAPI_URL}${image.url}`;

  return (
    <>
    <div className="pt-16 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Image */}
            <div className="w-full aspect-square bg-brand-gray rounded-lg overflow-hidden border border-gray-700">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover"/>
            </div>

            {/* Right Column: Details */}
            <div>
                <span className="text-green-500 text-sm font-bold uppercase tracking-wider">{category}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">{name}</h1>
                <p className="text-3xl font-semibold text-green-500 mb-6">{price}</p>
                
                <div className="prose prose-invert max-w-none text-gray-300 mb-8 text-justify">
                    <p>{description}</p>
                </div>

                <div className="space-y-3">
                    <button onClick={handleBuyClick} className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-md transition-all text-lg">
                        Beli Sekarang
                    </button>
                    <button 
                        onClick={() => onNavigate({ page: 'Store' })}
                        className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 font-bold py-3 px-6 rounded-md transition-all"
                    >
                        Kembali ke Toko
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
    
    <CheckoutModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={{ name, price, image: imageUrl }}
    />
    </>
  );
};

export default ProductDetailPage;
