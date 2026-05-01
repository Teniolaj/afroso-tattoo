import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [bgPulseKey, setBgPulseKey] = useState(0);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const wasAtTopRef = useRef(true);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
        }

        const isAtTop = y <= 4;
        if (isAtTop && !wasAtTopRef.current) {
          setBgPulseKey((key) => key + 1);
        }
        wasAtTopRef.current = isAtTop;
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero">
      <div ref={bgRef} className="hero-bg">
        <div
          key={bgPulseKey}
          className="hero-bg-image"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>
      <div className="hero-vignette" />
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
