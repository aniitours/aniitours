import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Only add scroll event listener for mobile
    if (isMobile) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Show/hide based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('resize', checkIsMobile);
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [isMobile, lastScrollY]);

  const phoneNumber = '9932081208';
  const whatsappNumber = '9434265519';

  const phoneHref = isMobile ? `tel:${phoneNumber}` : '#contact-form';
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
      const currentPath = window.location.pathname;
      if (currentPath !== '/tour-packages') {
        navigate('/tour-packages', { state: { scrollToContact: true } });
      } else {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Hide on mobile for tour-packages page
  const currentPath = window.location.pathname;
  if (isMobile && currentPath === '/tour-packages') {
    return null;
  }

  return (
    <div
      className={`fixed bottom-8 right-8 flex flex-col gap-4 z-50 transition-opacity duration-300 ${
        isMobile && !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
