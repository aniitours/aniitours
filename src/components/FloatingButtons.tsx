import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const FloatingButtons = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // On the tour packages page, we don't show these buttons.
  if (location.pathname === '/tour-packages') {
    return null;
  }

  const phoneNumber = '9932081208';
  const whatsappNumber = '9434265519';

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
      className="fixed bottom-8 right-8 flex flex-col gap-4 z-50"
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
