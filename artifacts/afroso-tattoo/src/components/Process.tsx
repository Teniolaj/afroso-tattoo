import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Process.css';

const STEPS = [
  { num: 'I', name: 'Consultation' },
  { num: 'II', name: 'Design' },
  { num: 'III', name: 'The Session' },
  { num: 'IV', name: 'Aftercare' },
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
                  <div className="step-circle">
                    <span>{step.num}</span>
                  </div>
                  <h4 className="step-name">{step.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
