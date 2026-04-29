import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-mosaic">
        {/* Background Grids with SVGs */}
        <div className="mosaic-panel panel-1">
          <svg viewBox="0 0 100 100" className="faint-svg">
            <circle cx="20" cy="20" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="mosaic-panel panel-2 center-span">
          <svg viewBox="0 0 200 200" className="faint-svg center-svg">
            <path d="M100 20 L100 180 M20 100 L180 100 M60 60 L140 140 M60 140 L140 60" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M80 80 Q100 50 120 80 T160 100 T120 120 T80 120 T40 100 T80 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="mosaic-panel panel-3">
          <svg viewBox="0 0 100 100" className="faint-svg">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,30 75,80 25,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="mosaic-panel panel-4">
          <svg viewBox="0 0 100 100" className="faint-svg">
            <path d="M0 50 Q25 20 50 50 T100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0 60 Q25 30 50 60 T100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="mosaic-panel panel-5">
           <svg viewBox="0 0 100 100" className="faint-svg">
            <path d="M10 90 Q50 10 90 90" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className={`hero-stagger ${loaded ? 'visible' : ''}`}>
          <p className="eyebrow">Accra, Ghana · Est. 2015</p>
          <h1>Nii Afroso</h1>
          <h2 className="subline">Tattoo Studio</h2>
          <div className="rule" />
          <p className="tagline">
            <em>Where every scar becomes a story and every story becomes art.</em>
          </p>
          <div className="hero-ctas">
            <Link href="/gallery" className="pill-button primary">
              View Gallery
            </Link>
            <a href="/#booking" className="pill-button ghost">
              Book a Session
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line">
          <div className="scroll-drip" />
        </div>
      </div>
    </section>
  );
}
