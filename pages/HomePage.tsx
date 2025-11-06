import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatIsAptrowin from '../components/WhatIsAptrowin';
import HowItWorks from '../components/HowItWorks';
import WhoIsItFor from '../components/WhoIsItFor';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CareerFinder from '../components/CareerFinder';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIsAptrowin />
        <HowItWorks />
        <WhoIsItFor />
        <Features />
        <Testimonials />
        <Pricing />
        <CareerFinder />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;