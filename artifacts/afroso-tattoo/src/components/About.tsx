import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const textRef = useReveal();
  const imgRef = useReveal();

  return (
    <section id="about" className="about section-padding">
      <div className="container about-grid">
        <div className="about-image-wrapper reveal-l" ref={imgRef}>
          <div className="image-frame">
            <div className="diagonal-pattern" />
            <svg viewBox="0 0 200 200" className="artist-silhouette">
              <path d="M100 20 C60 20 60 70 60 70 C60 100 80 120 100 120 C120 120 140 100 140 70 C140 70 140 20 100 20 Z" fill="var(--dark)" />
              <path d="M40 200 C40 150 70 130 100 130 C130 130 160 150 160 200" fill="var(--dark)" />
            </svg>
          </div>
        </div>
        
        <div className="about-text reveal-r" ref={textRef}>
          <span className="section-label">The Studio</span>
          <h2>Art Carved<br />Into Skin</h2>
          
          <div className="about-content">
            <p>
              Located in the heart of Accra, Afroso Tattoo is an atelier dedicated to the craft of permanent storytelling. We believe that a tattoo is more than ink—it is a <em>sacred mark</em>, a milestone, a memory immortalized.
            </p>
            <p>
              Our space is designed to feel unhurried and intimate. We work closely with each client to craft heirloom-quality custom pieces that bridge serif elegance with street tattoo culture, ensuring every design is as <em>unique as the individual</em> wearing it.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat">
              <span className="stat-number">800+</span>
              <span className="stat-label">Pieces</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Artists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
