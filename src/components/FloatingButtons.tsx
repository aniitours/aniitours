import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef<number | null>(null);

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

  const phoneNumber = '9745642272';
  const whatsappNumber = '9745642272';

  const phoneHref = isMobile ? `tel:${phoneNumber}` : '#contact-form';
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 flex flex-col gap-4 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
