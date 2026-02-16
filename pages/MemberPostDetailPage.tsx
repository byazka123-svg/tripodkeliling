
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { InstagramIcon } from '../components/Icons';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMedia {
    data: { attributes: { url: string; } }
}
interface MemberPostAttributes {
    photographerName: string;
    description: string;
    postLink: string;
    postImage: StrapiMedia;
    photographerAvatar: StrapiMedia;
    slug: string;
}
interface StrapiMemberPost {
    id: number;
    attributes: MemberPostAttributes;
}
// --- End Strapi Data Types ---

interface MemberPostDetailPageProps {
  id: string; // This is the slug
  onNavigate: (view: View) => void;
}

const MemberPostDetailPage: React.FC<MemberPostDetailPageProps> = ({ id, onNavigate }) => {
  const [post, setPost] = useState<StrapiMemberPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const response = await fetch(`${STRAPI_URL}/api/member-posts?filters[slug][$eq]=${id}&populate=*`);
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setPost(data.data[0]);
            } else {
                setPost(null);
            }
        } catch (error) {
            console.error("Failed to fetch member post:", error);
            setPost(null);
        } finally {
            setLoading(false);
        }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="pt-24 text-center text-gray-400">Memuat karya...</div>;
  }

  if (!post) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-white">Karya tidak ditemukan.</h1>
        <button 
          onClick={() => onNavigate({ page: 'Beranda' })}
          className="mt-4 text-green-500 hover:underline"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const { photographerName, photographerAvatar, postImage, postLink, description } = post.attributes;

  return (
    <div className="pt-16 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="bg-brand-gray rounded-lg overflow-hidden border border-gray-700">
            <div className="w-full aspect-square bg-black">
                <img src={`${STRAPI_URL}${postImage.data.attributes.url}`} alt={`Karya ${photographerName}`} className="w-full h-full object-contain" />
            </div>

            <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img src={`${STRAPI_URL}${photographerAvatar.data.attributes.url}`} alt={photographerName} className="w-14 h-14 rounded-full border-2 border-gray-600" />
                        <div>
                            <h2 className="text-xl font-bold text-white">{photographerName}</h2>
                            <p className="text-gray-400">Anggota Tripod Keliling</p>
                        </div>
                    </div>
                    <a 
                        href={postLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-shrink-0 flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                    >
                        <InstagramIcon />
                        <span className="hidden sm:inline">Lihat di Instagram</span>
                    </a>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold text-green-500 mb-3">Deskripsi Karya</h3>
                    <p className="text-gray-300 leading-relaxed text-justify">{description}</p>
                </div>
                
                 <div className="mt-8 border-t border-gray-700 pt-6">
                    <button 
                        onClick={() => onNavigate({ page: 'Beranda' })} // Or a dedicated member page later
                        className="text-green-500 hover:text-green-400 font-semibold transition-colors"
                    >
                        &larr; Kembali
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPostDetailPage;
