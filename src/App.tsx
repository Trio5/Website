import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechnologySection } from './components/TechnologySection';
import { ProductCard } from './components/ProductCard';
import { CTASection } from './components/CTASection';
import { Shield, Target, Zap, ShieldCheck } from 'lucide-react';
import './custom.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Product Showcase Section */}
      <section
        id="products"
        className="py-24 px-4 bg-[#191919]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2
            className="text-3xl font-bold text-white text-center mb-12"
            style={{
              textShadow: '2px 2px 10px rgba(255, 255, 255, 0.5)',
              transform: 'translateY(-20px)',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Featured Products
          </h2>

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="S200s Viper Blaster"
              description="Silent but deadly. Perfect for tactical players."
              company="ZWQ Gel Blasters"
              model="S200s Viper"
              price="$39.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318176662453620757/M416GelBlaster-ZWQ-S200S-Viper-Blaster-Red-Black-upgraded.png?ex=67615f2e&is=67600dae&hm=2fa317127ffec58ff786902022ace43300524d0995ed9e9df547d6e738184ba4&=&format=webp&quality=lossless&width=473&height=473"
              delay={0}
            />
            <ProductCard
              title="LP Fortnite Pistol"
              description="High-capacity magazine with rapid-fire action."
              company="LP Fortnite Blasters"
              model="LP FP2's"
              price="$42.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318177825379057664/360.png?ex=67616044&is=67600ec4&hm=a0001dfd29b7bf6e69ee1bd2474f3c686a155ce17400b006a090acef2e3026d3&=&format=webp&quality=lossless"
              delay={200}
            />
            <ProductCard
              title="3D-NF Zawuki"
              description="Long-range accuracy with precision targeting."
              company="Zawuki Corp."
              model="P250 4th Edition"
              price="$49.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318178680232480770/26edb8d078e1429a9f86e32c1d3b5aa2.png?ex=6761610f&is=67600f8f&hm=9a7ae0e5196c3ee7b3623643757b9b9290d50e640475e486ba6e15f62f5c14de&=&format=webp&quality=lossless&width=840&height=473"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 bg-[#191919]"
        style={{ fontSize: '105%' }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-white text-center mb-12"
          style={{
            textShadow: '2px 2px 10px rgba(255, 255, 255, 0.5)',
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Why Choose Nerftech
        </h2>

        {/* Feature Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Precision Engineering */}
          <div
            className="bg-[#0d0c0c] p-6 rounded-lg flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Precision Engineering</h3>
            <p className="text-gray-300">Advanced targeting systems for maximum accuracy.</p>
          </div>

          {/* Safety First */}
          <div
            className="bg-[#0d0c0c] p-6 rounded-lg flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Safety First</h3>
            <p className="text-gray-300">Thoroughly tested for safe play at all ages.</p>
          </div>

          {/* Innovation */}
          <div
            className="bg-[#0d0c0c] p-6 rounded-lg flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology in every blaster.</p>
          </div>

          {/* Durability */}
          <div
            className="bg-[#0d0c0c] p-6 rounded-lg flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Durability</h3>
            <p className="text-gray-300">
              Built to withstand intense battles and rough play, ensuring long-lasting fun.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default App;
