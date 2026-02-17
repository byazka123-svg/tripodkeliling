
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { STRAPI_URL } from '../config';
import { NewspaperIcon, CameraIcon, LightbulbIcon, ClipboardCheckIcon } from './Icons';

// --- Strapi Data Types ---
interface StrapiMediaFlat {
    url: string;
}
interface StrapiArticle {
    id: number;
    title: string;
    category: string;
    thumbnail: StrapiMediaFlat;
    slug: string;
}
// --- End Strapi Data Types ---

interface ArticleCardProps {
    article: StrapiArticle;
    onNavigate: (view: View) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onNavigate }) => {
    const { title, category, thumbnail, slug } = article;

    const renderCategory = () => {
        let icon: React.ReactNode;
        switch(category) {
            case 'Edukasi':
                icon = <LightbulbIcon className="h-3 w-3 mr-1.5" />;
                break;
            case 'Liputan':
                icon = <CameraIcon className="h-3 w-3 mr-1.5" />;
                break;
            case 'Dokumentasi':
                icon = <ClipboardCheckIcon className="h-3 w-3 mr-1.5" />;
                break;
            default:
                icon = null;
        }
        return (
            <div className="flex items-center text-green-500 text-xs font-bold uppercase">
                {icon}
                <span>{category}</span>
            </div>
        )
    }

    return (
        <button onClick={() => onNavigate({ page: 'ArticleDetail', id: slug })} className="bg-brand-gray rounded-lg overflow-hidden group flex flex-col h-full text-left">
            <div className="relative">
                <img src={`${STRAPI_URL}${thumbnail.url}`} alt={title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="mb-2">
                {renderCategory()}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-3 flex-grow min-h-[48px]">{title}</h3>
              <span className="font-semibold text-sm text-green-500 group-hover:text-green-400 transition-colors self-start mt-auto">
                Baca Selengkapnya &rarr;
              </span>
            </div>
        </button>
    );
};

const categories = ['Semua', 'Liputan', 'Edukasi', 'Dokumentasi'];

interface BlogSectionProps {
    isPreview?: boolean;
    onNavigate: (view: View) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isPreview, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [allArticles, setAllArticles] = useState<StrapiArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
            const data = await response.json();
            setAllArticles(data.data || []);
        } catch (error) {
            console.error("Failed to fetch articles:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchArticles();
  }, []);

  const filteredArticles = activeCategory === 'Semua' 
    ? allArticles
    : allArticles.filter(article => article.category === activeCategory);

  const finalArticles = isPreview ? filteredArticles.slice(0, 3) : filteredArticles;

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6 text-green-500">
            <NewspaperIcon className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Artikel Terbaru Kami<span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Temukan inspirasi, tips, dan cerita dari berbagai kegiatan kami.
          </p>
        </div>
        
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
        
        {loading ? (
            <div className="text-center text-gray-400">Memuat artikel...</div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {finalArticles.map((article) => (
                <ArticleCard key={article.id} article={article} onNavigate={onNavigate} />
            ))}
            </div>
        )}

        {isPreview && !loading && (
            <div className="text-center mt-12">
                <button 
                    onClick={() => onNavigate({ page: 'Blog' })} 
                    className="border-2 border-green-500 text-green-500 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Lihat Semua Artikel
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
