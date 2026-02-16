
import React from 'react';
import { memberPosts } from '../data/members';
import { View } from '../App';
import { InstagramIcon } from '../components/Icons';

interface MemberPostDetailPageProps {
  id: string;
  onNavigate: (view: View) => void;
}

const MemberPostDetailPage: React.FC<MemberPostDetailPageProps> = ({ id, onNavigate }) => {
  const post = memberPosts.find(p => p.id === id);

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

  return (
    <div className="pt-16 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="bg-brand-gray rounded-lg overflow-hidden border border-gray-700">
            <div className="w-full aspect-square bg-black">
                <img src={post.postImage} alt={`Karya ${post.photographerName}`} className="w-full h-full object-contain" />
            </div>

            <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img src={post.photographerAvatar} alt={post.photographerName} className="w-14 h-14 rounded-full border-2 border-gray-600" />
                        <div>
                            <h2 className="text-xl font-bold text-white">{post.photographerName}</h2>
                            <p className="text-gray-400">Anggota Tripod Keliling</p>
                        </div>
                    </div>
                    <a 
                        href={post.postLink} 
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
                    <p className="text-gray-300 leading-relaxed text-justify">{post.description}</p>
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
