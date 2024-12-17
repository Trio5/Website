import React, { useState, useEffect } from 'react';
import { Target, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll for smooth scrolling

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string>(''); // Track active section
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle

  // Hide or show navbar on scroll
  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleNavbarVisibility);
    return () => window.removeEventListener('scroll', handleNavbarVisibility);
  }, [lastScrollY]);

  // Links for the navbar
  const navLinks = ['technology', 'products', 'features', 'about', 'contact us'];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-gradient-to-r from-[#191919b3] via-[#191919b3] to-[#191919b3] backdrop-blur-md shadow-lg rounded-3xl w-[90vw] sm:w-[85vw] mx-auto`}
      style={{ top: '1%' }} // Smaller gap from the top
    >
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <ScrollLink
          to="hero-section"
          smooth={true}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setActiveLink('hero-section')}
        >
          <Target className="h-8 w-8 text-white" aria-label="NerfTech Logo" />
          <span className="text-xl font-bold text-white">NerfTech</span>
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link === 'contact us' ? 'cta-section' : link} // Link to "cta-section" on "Contact Us"
              smooth={true}
              duration={500}
              className={`px-3 py-2 ${
                link === 'contact us'
                  ? 'bg-white text-black rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 hover:text-black transition-transform duration-500 ease-in-out'
                  : `text-white ${
                      activeLink === link
                        ? 'font-semibold text-orange-500'
                        : 'hover:scale-105 hover:text-gray-300 transition-transform duration-500 ease-in-out'
                    }`
              }`}
              onSetActive={() => setActiveLink(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 p-4 rounded-lg">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link === 'contact us' ? 'cta-section' : link} // Link to "cta-section" on "Contact Us"
              smooth={true}
              duration={500}
              className={`block px-3 py-2 ${
                link === 'contact us'
                  ? 'bg-white text-black rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 hover:text-black transition-transform duration-500 ease-in-out'
                  : `text-white ${
                      activeLink === link
                        ? 'font-semibold text-orange-500'
                        : 'hover:scale-105 hover:text-gray-300 transition-transform duration-500 ease-in-out'
                    }`
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveLink(link);
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
