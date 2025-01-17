// import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import CoreOfferings from '@/components/CoreOfferings';

import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonial';

// import Testimonials from '@/components/Testimonials';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoreOfferings />
      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
