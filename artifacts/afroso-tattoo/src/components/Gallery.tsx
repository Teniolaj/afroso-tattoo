import React from 'react';
import { Link } from 'wouter';
import { useReveal } from '../hooks/useReveal';
import './Gallery.css';

const TILES = [
  { id: 'g1', className: 'tile-g1', label: 'Fine Line', delay: 0.1 },
  { id: 'g2', className: 'tile-g2', label: 'Realism', delay: 0.3 },
  { id: 'g3', className: 'tile-g3', label: 'Blackwork', delay: 0.2 },
  { id: 'g4', className: 'tile-g4', label: 'Tribal', delay: 0.4 },
  { id: 'g5', className: 'tile-g5', label: 'Cover-Up', delay: 0.2 },
  { id: 'g6', className: 'tile-g6', label: 'Custom', delay: 0.5 },
  { id: 'g7', className: 'tile-g7', label: 'Minimalist', delay: 0.3 },
  { id: 'g8', className: 'tile-g8', label: 'Portrait', delay: 0.4 },
];

export default function Gallery() {
  const sectionRef = useReveal();

  return (
    <section className="gallery-teaser section-padding">
      <div className="container">
        <div className="gallery-header reveal" ref={sectionRef}>
          <span className="section-label">Portfolio</span>
          <h2>Marked For Life</h2>
        </div>

        <div className="gallery-grid">
          {TILES.map((tile) => {
            const tileRef = useReveal();
            return (
              <div 
                key={tile.id} 
                className={`gallery-tile ${tile.className} reveal`} 
                ref={tileRef}
                style={{ transitionDelay: `${tile.delay}s` }}
              >
                <div className="tile-overlay" />
                <svg viewBox="0 0 100 100" className="tile-art">
                  <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span className="tile-label">{tile.label}</span>
              </div>
            );
          })}
        </div>

        <div className="gallery-cta">
          <Link href="/gallery" className="pill-button primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
