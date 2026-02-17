
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNavbar from './components/BottomNavbar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import CollaborationPage from './pages/CollaborationPage';
import StorePage from './pages/StorePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import EventDetailPage from './pages/EventDetailPage';
import MemberPostDetailPage from './pages/MemberPostDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import TripodNetworkPage from './pages/TripodNetworkPage';
import DonationPage from './pages/DonationPage';

export interface View {
  page: string;
  id?: string | null;
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>({ page: 'Beranda' });

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentView.page) {
      case 'Event':
        return <EventsPage onNavigate={handleNavigate} />;
      case 'Blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'Kolaborasi':
        return <CollaborationPage onNavigate={handleNavigate} />;
      case 'Donasi':
        return <DonationPage />;
      case 'Store':
        return <StorePage onNavigate={handleNavigate} />;
      case 'Network':
        return <TripodNetworkPage onNavigate={handleNavigate} />;
      case 'ArticleDetail':
        return <ArticleDetailPage id={currentView.id ?? ''} onNavigate={handleNavigate} />;
      case 'EventDetail':
        return <EventDetailPage id={currentView.id ?? ''} onNavigate={handleNavigate} />;
      case 'MemberDetail':
        return <MemberPostDetailPage id={currentView.id ?? ''} onNavigate={handleNavigate} />;
      case 'ProductDetail':
        return <ProductDetailPage id={currentView.id ?? ''} onNavigate={handleNavigate} />;
      case 'Login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'Beranda':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };
  
  const showNavAndFooter = currentView.page !== 'Login';

  return (
    <div className={`bg-brand-dark text-white font-sans ${showNavAndFooter ? "pb-16 md:pb-0" : ""}`}>
      {showNavAndFooter && <Navbar currentView={currentView} onNavigate={handleNavigate} />}
      <main>
        {renderPage()}
      </main>
      {showNavAndFooter && <Footer />}
      {showNavAndFooter && <BottomNavbar currentView={currentView} onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;
