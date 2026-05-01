import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Process.css';

const STEPS = [
  {
    num: 'I',
    name: 'Consultation',
    text: 'Share your concept, placement, and size. We listen deeply to understand what this piece means to you.',
  },
  {
    num: 'II',
    name: 'Design',
    text: 'Our artist crafts a custom sketch - revised until every detail is exactly right before any needle touches skin.',
  },
  {
    num: 'III',
    name: 'The Session',
    text: 'A clean, welcoming studio environment. We walk with you every step of the sitting.',
  },
  {
    num: 'IV',
    name: 'Aftercare',
    text: 'Full aftercare guidance and a lifetime touch-up guarantee on all work done at Afroso Studio.',
  },
];

export default function Process() {
  const headerRef = useReveal();

  return (
    <section id="process" className="process section-padding">
      <div className="container">
        <div className="process-header reveal" ref={headerRef}>
          <span className="section-label">The Journey</span>
          <h2>From Concept<br/>To Canvas</h2>
        </div>

        <div className="process-flow">
          <div className="connector-line" />
          
          <div className="steps-container">
            {STEPS.map((step, index) => {
              const stepRef = useReveal();
              return (
                <div 
                  key={step.num} 
                  className="step-item reveal" 
                  ref={stepRef}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="step-circle" tabIndex={0}>
                    <span>{step.num}</span>
                  </div>
                  <div className="step-copy">
                    <h4 className="step-name">{step.name}</h4>
                    <p className="step-description">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
