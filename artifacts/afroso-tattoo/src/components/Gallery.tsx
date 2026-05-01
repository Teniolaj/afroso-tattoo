import React from 'react';
import { Link } from 'wouter';
import { useReveal } from '../hooks/useReveal';
import galleryLandscape from '../assets/gallery/gallery-image-landscape.jpg';
import galleryPortrait from '../assets/gallery/gallery-image-potrait.jpg';
import galleryPortrait2 from '../assets/gallery/gallery-image-potrait2.jpg';
import gallerySquare from '../assets/gallery/gallery-image-square1.jpg';
import galleryPortrait3 from '../assets/gallery/gallery-imiage-potrait3.jpg';
import galleryPortrait4 from '../assets/gallery/gallery-image-potrait4.png';
import './Gallery.css';

const TILES = [
  { id: 'g1', className: 'tile-g1 portrait', label: 'Portrait Work', src: galleryPortrait, delay: 0.1 },
  { id: 'g2', className: 'tile-g2 landscape', label: 'Back Piece', src: galleryLandscape, delay: 0.2 },
  { id: 'g3', className: 'tile-g3 portrait', label: 'Fine Line', src: galleryPortrait2, delay: 0.3 },
  { id: 'g4', className: 'tile-g4 portrait', label: '3D Detail', src: galleryPortrait3, delay: 0.35 },
  { id: 'g5', className: 'tile-g5 square', label: 'Realism', src: gallerySquare, delay: 0.18 },
  { id: 'g6', className: 'tile-g6 portrait', label: 'Line Study', src: galleryPortrait4, delay: 0.42 },
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
                <img src={tile.src} alt={`${tile.label} tattoo artwork`} className="tile-image" loading="lazy" />
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
