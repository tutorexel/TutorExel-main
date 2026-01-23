// src/components/ui/WhatsAppFloat.jsx

"use client";
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the WhatsApp button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916284598837', '_blank');
  };

  return (
    <div 
      className={`whatsapp-float ${isVisible ? 'visible' : ''}`}
      onClick={handleWhatsAppClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleWhatsAppClick();
        }
      }}
      aria-label="Contact us on WhatsApp"
    >
      <div className="whatsapp-icon">
        <FaWhatsapp size={28} />
      </div>
      <div className="whatsapp-tooltip">
        Chat with us!
      </div>
    </div>
  );
};

export default WhatsAppFloat;