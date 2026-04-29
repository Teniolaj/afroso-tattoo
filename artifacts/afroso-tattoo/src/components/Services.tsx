import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  {
    id: '01',
    name: 'Custom Designs',
    desc: 'Bespoke artwork tailored to your story and vision.',
    icon: <path d="M50 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '02',
    name: 'Fine Line & Minimalist',
    desc: 'Delicate, precise linework for elegant and subtle pieces.',
    icon: <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '03',
    name: 'Blackwork & Tribal',
    desc: 'Bold, heavy black ink inspired by traditional patterns.',
    icon: <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '04',
    name: 'Realism & Portraits',
    desc: 'Lifelike imagery capturing every minute detail.',
    icon: <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '05',
    name: 'Cover-Ups',
    desc: 'Transforming old ink into breathtaking new art.',
    icon: <path d="M20 50 Q50 20 80 50 T20 50" fill="none" stroke="currentColor" strokeWidth="2" />
  },
  {
    id: '06',
    name: 'Aftercare & Touch-Ups',
    desc: 'Ensuring your piece heals perfectly and stands the test of time.',
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
