import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ClientsSection from './components/ClientsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection />
      <ProductsSection />
      <ClientsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;