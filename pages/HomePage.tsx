
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CollaborationSection from '../components/CollaborationSection';
import EventSection from '../components/EventSection';
import BlogSection from '../components/BlogSection';
import MemberSpotlight from '../components/MemberSpotlight';
import TripodNetworkSection from '../components/TripodNetworkSection';
import MerchandiseSection from '../components/MerchandiseSection';
import DonationSection from '../components/DonationSection';
import { View } from '../App';

interface HomePageProps {
    onNavigate: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection />
      <EventSection isPreview onNavigate={onNavigate} />
      <MemberSpotlight onNavigate={onNavigate}/>
      <BlogSection isPreview onNavigate={onNavigate} />
      <TripodNetworkSection onNavigate={onNavigate} />
      <CollaborationSection isPreview onNavigate={onNavigate} />
      <MerchandiseSection isPreview onNavigate={onNavigate} />
      <DonationSection />
    </>
  );
};

export default HomePage;
