
import React, { useState } from 'react';
import { allArticles, Article } from '../data/articles';
import { View } from '../App';

interface ArticleCardProps extends Article {
    onNavigate: (view: View) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, thumbnail, category, title, onNavigate }) => (
    <button onClick={() => onNavigate({ page: 'ArticleDetail', id })} className="bg-brand-gray rounded-lg overflow-hidden group flex flex-col h-full text-left">
        <div className="relative">
            <img src={thumbnail} alt={title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <p className="text-green-500 text-xs font-bold uppercase">{category}</p>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-3 flex-grow min-h-[48px]">{title}</h3>
          <span className="font-semibold text-sm text-green-500 group-hover:text-green-400 transition-colors self-start mt-auto">
            Baca Selengkapnya &rarr;
          </span>
        </div>
    </button>
);

const categories = ['Semua', 'Liputan', 'Edukasi', 'Dokumentasi'];

interface BlogSectionProps {
    isPreview?: boolean;
    onNavigate: (view: View) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isPreview, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredArticles = activeCategory === 'Semua' 
    ? allArticles
    : allArticles.filter(article => article.category === activeCategory);

  const finalArticles = isPreview ? filteredArticles.slice(0, 3) : filteredArticles;

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {finalArticles.map((article) => (
            <ArticleCard key={article.id} {...article} onNavigate={onNavigate} />
          ))}
        </div>

        {isPreview && (
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