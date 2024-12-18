import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TechnologySection } from '../components/TechnologySection';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { Target, Shield, Zap, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Product Showcase Section */}
      <section id="product-card" className="py-24 px-4 bg-[#191919]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <ProductCard
              title="S200s Viper Blaster"
              description="Silent but deadly. Perfect for tactical players."
              company="ZWQ Gel Blasters"
              model="S200s Viper"
              price="$39.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318176662453620757/M416GelBlaster-ZWQ-S200S-Viper-Blaster-Red-Black-upgraded.png?ex=6762b0ae&is=67615f2e&hm=9bca2eaf1687feade6fbdbbfd92eb3cd950cd8c5ebae8c73920bbf08c7c73821&=&format=webp&quality=lossless&width=473&height=473"
              delay={0}
            />
            <ProductCard
              title="LP Fortnite Pistol"
              description="High-capacity magazine with rapid-fire action."
              company="LP Fortnite Blasters"
              model="LP FP2's"
              price="$42.99"
              imageUrl="https://cdn.discordapp.com/attachments/1289950260009111574/1318177825379057664/360.png?ex=6762b1c4&is=67616044&hm=be75bf7d5e2afb1dc042ae0d0174e01cc3994e4b8aad627cacde32082b09217f&"
              delay={200}
            />
            <ProductCard
              title="3D-NF Zawuki"
              description="Long-range accuracy with precision targeting."
              company="Zawuki Corp."
              model="P250 4th Edition"
              price="$49.99"
              imageUrl="https://cdn.discordapp.com/attachments/1289950260009111574/1318178680232480770/26edb8d078e1429a9f86e32c1d3b5aa2.png?ex=6762b28f&is=6761610f&hm=42c8b07c47fb4b43c2b14cee8c9a5f64dcd65a8fc381d310a90846c2181e0034&"
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
};

export default Home;
