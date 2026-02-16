
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CollaborationSection from '../components/CollaborationSection';
import EventSection from '../components/EventSection';
import BlogSection from '../components/BlogSection';
import MemberSpotlight from '../components/MemberSpotlight';
import MerchandiseSection from '../components/MerchandiseSection';
import DonationSection from '../components/DonationSection';
import { View } from '../App';

interface HomePageProps {
    onNavigate: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollaborationSection />
      <EventSection isPreview onNavigate={onNavigate} />
      <BlogSection isPreview onNavigate={onNavigate} />
      <MemberSpotlight onNavigate={onNavigate}/>
      <MerchandiseSection isPreview onNavigate={onNavigate} />
      <DonationSection />
    </>
  );
};

export default HomePage;