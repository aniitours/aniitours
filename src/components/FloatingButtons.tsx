import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFilterContainerVisible, setIsFilterContainerVisible] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      setIsVisible(false);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (location.pathname !== '/tour-packages' || !isMobile) {
      setIsFilterContainerVisible(false);
      return;
    }

    const packagesSection = document.getElementById('packages-section');
    if (!packagesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFilterContainerVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(packagesSection);

    return () => {
      observer.unobserve(packagesSection);
    };
  }, [location.pathname, isMobile]);

  const phoneNumber = '9745642272';
  const whatsappNumber = '9745642272';

  const phoneHref = isMobile ? `tel:${phoneNumber}` : '#contact-form';
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  const shouldBeVisible = isVisible && !isFilterContainerVisible;

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 flex flex-col gap-4 z-50 transition-opacity duration-500 ${
        shouldBeVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={phoneHref}
        onClick={handlePhoneClick}
        className="bg-orange-500 text-white p-4 rounded-2xl shadow-lg hover:bg-orange-600 transition-transform hover:scale-110"
        aria-label="Contact us by phone or form"
      >
        <Phone size={24} />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-2xl shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
