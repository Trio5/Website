import React from 'react';
import { HeroSection2 } from '../components/HeroSection2';
import CardGrid from '../components/CardGrid';
import Overview from '../components/Overview'; 
import { CTASection } from '../components/CTASection'; // Import CTASection

const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#191919', color: 'white', minHeight: '100vh' }}>
      {/* Hero Section */}
      <HeroSection2 />

      {/* Cards Section */}
      <div style={{ padding: '20px' }}>
        <CardGrid />
      </div>

      {/* Overview Section */}
      <div style={{ padding: '20px' }}>
        <Overview />
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default About;
