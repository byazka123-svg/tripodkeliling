
import React from 'react';
import { memberPosts, MemberPost } from '../data/members';
import { View } from '../App';

interface MemberPostCardProps extends MemberPost {
  onNavigate: (view: View) => void;
}

const MemberPostCard: React.FC<MemberPostCardProps> = ({ id, postImage, photographerAvatar, photographerName, onNavigate }) => (
  <div className="bg-brand-gray rounded-lg overflow-hidden group shadow-lg cursor-pointer" onClick={() => onNavigate({ page: 'MemberDetail', id })}>
    <div className="block overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
      <img
        src={postImage}
        alt={`Karya foto oleh ${photographerName}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4 flex items-center space-x-3">
        <img src={photographerAvatar} alt={photographerName} className="w-10 h-10 rounded-full border-2 border-gray-600" />
        <div>
            <h4 className="font-bold text-white leading-tight">{photographerName}</h4>
            <span
            className="text-sm text-green-500 group-hover:underline"
            >
            Lihat Detail
            </span>
        </div>
    </div>
  </div>
);

interface MemberSpotlightProps {
    onNavigate: (view: View) => void;
}

const MemberSpotlight: React.FC<MemberSpotlightProps> = ({ onNavigate }) => {

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Karya Anggota Bulan Ini<span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Sorotan untuk para anggota dengan karya-karya terbaik dan inspiratif dari Instagram.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {memberPosts.slice(0, 4).map((post) => (
            <MemberPostCard key={post.id} {...post} onNavigate={onNavigate}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;