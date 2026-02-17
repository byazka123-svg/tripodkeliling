
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMediaFlat {
    url: string;
}
interface StrapiMemberPost {
    id: number;
    photographerName: string;
    postImage: StrapiMediaFlat;
    photographerAvatar: StrapiMediaFlat;
    slug: string;
}
// --- End Strapi Data Types ---

interface MemberPostCardProps {
  post: StrapiMemberPost;
  onNavigate: (view: View) => void;
}

const MemberPostCard: React.FC<MemberPostCardProps> = ({ post, onNavigate }) => {
  const { slug, postImage, photographerAvatar, photographerName } = post;
  return (
    <div className="bg-brand-gray rounded-lg overflow-hidden group shadow-lg cursor-pointer" onClick={() => onNavigate({ page: 'MemberDetail', id: slug })}>
      <div className="block overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={`${STRAPI_URL}${postImage.url}`}
          alt={`Karya foto oleh ${photographerName}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex items-center space-x-3">
          <img src={`${STRAPI_URL}${photographerAvatar.url}`} alt={photographerName} className="w-10 h-10 rounded-full border-2 border-gray-600" />
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
};

interface MemberSpotlightProps {
    onNavigate: (view: View) => void;
}

const MemberSpotlight: React.FC<MemberSpotlightProps> = ({ onNavigate }) => {
  const [memberPosts, setMemberPosts] = useState<StrapiMemberPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await fetch(`${STRAPI_URL}/api/member-posts?populate=*`);
            const data = await response.json();
            setMemberPosts(data.data || []);
        } catch (error) {
            console.error("Failed to fetch member posts:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchPosts();
  }, []);

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
        {loading ? (
             <div className="text-center text-gray-400">Memuat karya anggota...</div>
        ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {memberPosts.slice(0, 4).map((post) => (
                <MemberPostCard key={post.id} post={post} onNavigate={onNavigate}/>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default MemberSpotlight;
