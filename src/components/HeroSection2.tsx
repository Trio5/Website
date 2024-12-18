import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-scroll'; // React-scroll for smooth scrolling

export function HeroSection2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function for smooth transition
      once: true, // Animation occurs only once when the element comes into view
    });
  }, []);

  return (
    <section id="hero-section" className="relative h-screen px-4 bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          src="https://images-ext-1.discordapp.net/external/CPa7So8PVs7obb9neU-NgxLz8jjhKAL3KSTknqEaczE/https/media.tenor.com/dGnUZWiVldUAAAPo/nerf-slowmotion.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[90%] h-[90%] object-cover rounded-[25px]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white max-w-7xl mx-auto">
        <div className="max-w-2xl">
        <h2
            className="text-4xl md:text-2xl font-bold mb-6 bg-white text-black dark:text-black rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out px-2 py-2"
            data-aos="fade-up"
        >
            About Us
        </h2>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Unleash Your Inner Hero
          </h1>
          <p
            className="text-xl mb-8 text-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience the next generation of foam dart blasters. <br />
            Engineered for performance, designed for victory.
          </p>

          {/* Smooth Scroll Button */}
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="bg-orange-500 text-white px-8 py-4 rounded-[25px] text-lg font-semibold hover:bg-orange-600 transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Chevron Down (Scroll indicator) */}
      <div className="absolute bottom-8 inset-x-0 z-10 text-center">
        <ChevronDown className="w-8 h-8 mx-auto text-gray-300 animate-bounce" />
      </div>
    </section>
  );
}
