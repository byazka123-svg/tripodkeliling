
import React from 'react';
import BlogSection from '../components/BlogSection';
import { View } from '../App';

interface BlogPageProps {
    onNavigate: (view: View) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 md:pt-24 min-h-screen">
      <BlogSection onNavigate={onNavigate} />
    </div>
  );
};

export default BlogPage;