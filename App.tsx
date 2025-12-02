import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import TicketsShopSection from './components/TicketsShopSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NewsSection />
        <AboutSection />
        <TeamSection />
        <TicketsShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;