import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TechnologySection } from '../components/TechnologySection';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { Target, Shield, Zap, ShieldCheck } from 'lucide-react';
import CoolProgressBar from '../components/CoolProgressBar'; // Import the CoolProgressBar component

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black"> {/* Set the background to black for a dark theme */}
      {/* Progress Bar */}
      <CoolProgressBar /> {/* Corrected to use CoolProgressBar */}

      {/* Hero Section */}
      <section id="hero-section" className="section">
        <HeroSection />
      </section>

      {/* Technology Section */}
      <section id="technology" className="section">
        <TechnologySection />
      </section>

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
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318176662453620757/M416GelBlaster-ZWQ-S200S-Viper-Blaster-Red-Black-upgraded.png?ex=6763596e&is=676207ee&hm=b272612a85ea1f54022a894b8fa36b1e0d138e667cb7c50a8e52f247a3462bdc&=&format=webp&quality=lossless&width=473&height=473"
              delay={0}
            />
            <ProductCard
              title="LP Fortnite Pistol"
              description="High-capacity magazine with rapid-fire action."
              company="LP Fortnite Blasters"
              model="LP FP2's"
              price="$42.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318177825379057664/360.png?ex=67635a84&is=67620904&hm=cf03a9062ef27feca202ba297fd76726583f25259fc84c0fb1b11babee48105c&=&format=webp&quality=lossless"
              delay={200}
            />
            <ProductCard
              title="3D-NF Zawuki"
              description="Long-range accuracy with precision targeting."
              company="Zawuki Corp."
              model="P250 4th Edition"
              price="$49.99"
              imageUrl="https://media.discordapp.net/attachments/1289950260009111574/1318178680232480770/26edb8d078e1429a9f86e32c1d3b5aa2.png?ex=67635b4f&is=676209cf&hm=bdeba4072382e1143f40182c7145c4fa91aa09306c3db64e74988608a98dd08a&=&format=webp&quality=lossless&width=840&height=473"
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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
      <section id="cta-section" className="section">
        <CTASection />
      </section>
    </div>
  );
};

export default Home;
