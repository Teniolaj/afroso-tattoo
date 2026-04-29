import React from 'react';
import './Testimonials.css';

const REVIEWS = [
  { text: "Nii didn't just give me a tattoo; he gave me a piece of art that tells my family's story. The attention to detail is unmatched in Accra.", name: "Kwame Mensah", detail: "Custom Tribal Sleeve" },
  { text: "The studio feels like a sanctuary. I felt completely at ease during my 6-hour session. The realism work is breathtaking.", name: "Aisha T.", detail: "Portrait Piece" },
  { text: "My cover-up exceeded all expectations. You can't even tell what was underneath. True mastery of the craft.", name: "David O.", detail: "Full Back Cover-Up" },
  { text: "The fine line work is so delicate and precise. It healed beautifully. I'm already planning my next session.", name: "Sarah Addo", detail: "Minimalist Floral" },
  { text: "A profoundly professional experience from consultation to aftercare. The environment is moody, clean, and inspiring.", name: "Emmanuel K.", detail: "Chest Piece" },
  { text: "He understood exactly what I wanted even when I struggled to explain it. The final design was perfect.", name: "Grace N.", detail: "Custom Script" }
];

export default function Testimonials() {
  // Duplicate for infinite marquee
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section className="testimonials section-padding">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((review, i) => (
            <div key={i} className="review-card">
              <div className="quote-mark">"</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <span className="author-name">{review.name}</span>
                <span className="author-detail">{review.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
