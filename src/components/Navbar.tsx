import React, { useState, useEffect } from 'react';
import { Target, Menu, X } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnAboutPage, setIsOnAboutPage] = useState(false);
  const navigate = useNavigate();

  // Track scroll and adjust navbar visibility
  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleNavbarVisibility);
    return () => window.removeEventListener('scroll', handleNavbarVisibility);
  }, [lastScrollY]);

  // Detect if on About page
  useEffect(() => {
    if (window.location.pathname === '/about') {
      setIsOnAboutPage(true);
    } else {
      setIsOnAboutPage(false);
    }
  }, [window.location.pathname]);

  const navLinks = ['technology', 'products', 'features', 'about', 'contact us'];

  // Handle link clicks (redirect to Home and scroll to respective section)
  const handleLinkClick = (link: string) => {
    if (isOnAboutPage && link !== 'about') {
      // Redirect to Home and scroll to the section
      navigate('/');
      setTimeout(() => {
        const scrollToId =
          link === 'technology'
            ? 'technology'
            : link === 'products'
            ? 'product-card'
            : link === 'features'
            ? 'features'
            : link === 'contact us'
            ? 'cta-section' // For "contact us" or change accordingly
            : '';
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
      }, 500); // Increase timeout to allow page change before scroll
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-gradient-to-r from-[#191919b3] via-[#191919b3] to-[#191919b3] backdrop-blur-md shadow-lg rounded-3xl w-[80vw] mx-auto`}
      style={{ top: '1%' }}
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
          {navLinks.map((link, index) => {
            const isContactUs = link === 'contact us';
            const linkClasses = `px-3 py-2 cursor-pointer text-white hover:scale-105 transition-transform duration-500 ease-in-out ${
              activeLink === link
                ? 'font-semibold text-orange-500'
                : isContactUs
                ? 'bg-white text-black dark:text-black rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out'
                : 'hover:text-black-300'
            }`;

            if (link === 'about') {
              return (
                <RouterLink
                  key={index}
                  to="/about"
                  className={linkClasses}
                  onClick={() => setActiveLink(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </RouterLink>
              );
            } else {
              return (
                <ScrollLink
                  key={index}
                  to={link === 'technology' ? 'technology' : link === 'products' ? 'product-card' : link === 'features' ? 'features' : 'cta-section'}
                  smooth={true}
                  duration={500}
                  className={linkClasses}
                  onSetActive={() => setActiveLink(link)}
                  onClick={() => handleLinkClick(link)} // Handle clicks
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </ScrollLink>
              );
            }
          })}
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
          {navLinks.map((link, index) => {
            const isContactUs = link === 'contact us';
            const linkClasses = `block px-3 py-2 cursor-pointer text-white ${activeLink === link ? 'font-semibold text-orange-500' : isContactUs ? 'bg-white text-black rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 hover:text-black' : 'hover:text-gray-300'}`;

            if (link === 'about') {
              return (
                <RouterLink
                  key={index}
                  to="/about"
                  className={linkClasses}
                  onClick={() => setActiveLink(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </RouterLink>
              );
            } else {
              return (
                <ScrollLink
                  key={index}
                  to={link === 'technology' ? 'technology' : link === 'products' ? 'product-card' : link === 'features' ? 'features' : 'cta-section'}
                  smooth={true}
                  duration={500}
                  className={linkClasses}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLinkClick(link); // Handle click
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </ScrollLink>
              );
            }
          })}
        </div>
      )}
    </nav>
  );
}
