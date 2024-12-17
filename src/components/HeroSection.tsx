import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-scroll'; // If using react-scroll for smooth scrolling, else use react-router-dom for routing

export function HeroSection() {
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
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl" // Added stronger text-shadow
            data-aos="fade-up" // AOS fade-up animation for heading
          >
            Unleash Your Inner Hero
          </h1>
          <p
            className="text-xl mb-8 text-shadow-lg" // Added stronger text-shadow
            data-aos="fade-up" // AOS fade-up animation for paragraph
            data-aos-delay="200" // Delay the paragraph's animation
          >
            Experience the next generation of foam dart blasters. <br />
            Engineered for performance, designed for victory.
          </p>
          <Link
            to="products" // Changed to the id of your featured products section
            smooth={true} // Enable smooth scrolling
            duration={500} // Duration of the scroll
            className="bg-orange-500 text-white px-8 py-4 rounded-[25px] text-lg font-semibold hover:bg-orange-600 transition-colors" // Updated button with more round corners
            data-aos="fade-up" // AOS fade-up animation for button
            data-aos-delay="400" // Delay the button's animation
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Chevron Down */}
      <div className="absolute bottom-8 inset-x-0 z-10 text-center">
        <ChevronDown className="w-8 h-8 mx-auto text-gray-300 animate-bounce" />
      </div>
    </section>
  );
}
