import React from 'react';
import Header from './Header';
import Hero from './Hero';
import MenuGrid from './MenuGrid';
import Footer from './Footer';
import './Tiffin.css';
export default function Tiffinbox() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <MenuGrid />
      </main>
      <Footer />
    </div>
  );
}
