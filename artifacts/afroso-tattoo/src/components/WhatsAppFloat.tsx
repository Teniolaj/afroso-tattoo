import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/233551234567" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
