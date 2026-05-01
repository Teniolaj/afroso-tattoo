import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  {
    id: '01',
    name: 'Realistic Tattoos',
    desc: 'Detailed, lifelike tattoo work with careful shading, contrast, and depth.',
    icon: <path d="M50 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '02',
    name: 'Bold & Fine Lines',
    desc: 'Clean linework ranging from delicate fine details to strong graphic marks.',
    icon: <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '03',
    name: 'Old Skull',
    desc: 'Classic tattoo attitude with bold shapes, strong outlines, and timeless character.',
    icon: <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '04',
    name: 'Picture & 3D Works',
    desc: 'Photo-inspired and dimensional pieces built to feel vivid on the skin.',
    icon: <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '05',
    name: 'Color Realism',
    desc: 'Rich color tattoos with realistic texture, tone, and lasting visual impact.',
    icon: <path d="M20 50 Q50 20 80 50 T20 50" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '06',
    name: 'Custom Tattoo Work',
    desc: 'Original concepts refined with the client from first idea to finished piece.',
    icon: <path d="M50 20 v60 M20 50 h60" stroke="currentColor" strokeWidth="2" />
  }
];

export default function Services() {
  const headerRef = useReveal();

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header reveal" ref={headerRef}>
          <span className="section-label">Offerings</span>
          <h2>The Craft</h2>
        </div>
        
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const cardRef = useReveal();
            return (
              <div key={service.id} className="service-card reveal" ref={cardRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                <span className="service-number">{service.id}</span>
                <svg viewBox="0 0 100 100" className="service-icon">
                  {service.icon}
                </svg>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
