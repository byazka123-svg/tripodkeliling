
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { STRAPI_URL } from '../config';

// --- Strapi Data Types ---
interface StrapiMedia {
    data: { attributes: { url: string; } }
}
interface ArticleAttributes {
    title: string;
    category: string;
    content: string;
    thumbnail: StrapiMedia;
    slug: string;
}
interface StrapiArticle {
    id: number;
    attributes: ArticleAttributes;
}
// --- End Strapi Data Types ---

interface ArticleDetailPageProps {
  id: string; // This is the slug
  onNavigate: (view: View) => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ id, onNavigate }) => {
  const [article, setArticle] = useState<StrapiArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const response = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${id}&populate=*`);
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setArticle(data.data[0]);
            } else {
                setArticle(null);
            }
        } catch (error) {
            console.error("Failed to fetch article:", error);
            setArticle(null);
        } finally {
            setLoading(false);
        }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="pt-24 text-center text-gray-400">Memuat artikel...</div>;
  }

  if (!article) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-white">Artikel tidak ditemukan.</h1>
        <button 
          onClick={() => onNavigate({ page: 'Blog' })}
          className="mt-4 text-green-500 hover:underline"
        >
          Kembali ke Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-brand-dark min-h-screen">
      <div className="relative h-64 md:h-96 w-full">
        <img src={`${STRAPI_URL}${article.attributes.thumbnail.data.attributes.url}`} alt={article.attributes.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="py-8 md:py-12">
            <div className="mb-6">
                <p className="text-green-500 text-sm font-bold uppercase">{article.attributes.category}</p>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">{article.attributes.title}</h1>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed text-justify">
                {article.attributes.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-12 border-t border-gray-700 pt-8">
                 <button 
                    onClick={() => onNavigate({ page: 'Blog' })}
                    className="text-green-500 hover:text-green-400 font-semibold transition-colors"
                >
                    &larr; Kembali ke Semua Artikel
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
