import React from 'react';
import { Link } from 'wouter';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">Nii Afroso</h3>
            <p className="footer-tagline">Where every scar becomes a story and every story becomes art.</p>
          </div>
          
          <div className="footer-col links-col">
            <h4>Navigate</h4>
            <div className="footer-links">
              <a href="/#about">Studio</a>
              <a href="/#services">Services</a>
              <Link href="/gallery">Gallery</Link>
              <a href="/#process">Process</a>
            </div>
          </div>
          
          <div className="footer-col address-col">
            <h4>Find Us</h4>
            <address>
              Osu, Accra<br />
              Ghana<br /><br />
              +233 55 123 4567<br />
              bookings@afroso.tattoo
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">© 2025 Afroso Tattoo Studio · Accra</div>
          <div className="credits">Crafted with intention ✦</div>
        </div>
      </div>
    </footer>
  );
}
