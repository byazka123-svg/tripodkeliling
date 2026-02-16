
import React from 'react';
import { allArticles } from '../data/articles';
import { View } from '../App';

interface ArticleDetailPageProps {
  id: string;
  onNavigate: (view: View) => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ id, onNavigate }) => {
  const article = allArticles.find(a => a.id === id);

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
        <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="py-8 md:py-12">
            <div className="mb-6">
                <p className="text-green-500 text-sm font-bold uppercase">{article.category}</p>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">{article.title}</h1>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed text-justify">
                {article.content.split('\n').map((paragraph, index) => (
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
