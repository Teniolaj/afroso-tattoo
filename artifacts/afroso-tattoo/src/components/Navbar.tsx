import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="logo">
          <span className="logo-first">Nii</span>
          <span className="logo-last">Afroso</span>
        </Link>
        
        <div className="nav-links">
          <a href="/#about">Studio</a>
          <a href="/#services">Services</a>
          <Link href="/gallery">Gallery</Link>
          <a href="/#process">Process</a>
        </div>
        
        <a href="/#booking" className="pill-button ghost nav-cta">
          Book a Session
        </a>
      </div>
    </nav>
  );
}
