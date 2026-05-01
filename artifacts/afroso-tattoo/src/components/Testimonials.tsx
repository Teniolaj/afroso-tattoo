import React from 'react';
import './Testimonials.css';

const REVIEWS = [
  {
    text: "He's the best tattoo artist I've ever come across.",
    name: "Elizabeth Mensah",
    rating: 4,
    sourceUrl: "https://maps.app.goo.gl/3W72X9KHxfcH3uhd8"
  },
  {
    text: "He tattoo a beautiful flowers on my back. I loved it.",
    name: "Philipa Amoah",
    rating: 4
  },
  {
    text: "He's one of a kind tattoo artist.",
    name: "solomon nunoo",
    rating: 5
  },
  {
    text: "He's very nice and good at his work.",
    name: "Lairah Salley",
    rating: 5
  },
  {
    text: "He's good in his work. He's great.",
    name: "Janet Grant",
    rating: 3
  },
  {
    text: "Very nice work... and doesn't take long.",
    name: "Sydney A",
    rating: 5
  },
  {
    text: "Positive: Quality, Professionalism, Value.",
    name: "SAKANDE YASSIR",
    rating: 4
  }
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
                <span className="author-detail" aria-label={`${review.rating} star Google review`}>
                  {'⭐'.repeat(review.rating)}
                </span>
              </div>
              {'sourceUrl' in review && review.sourceUrl && (
                <a
                  href={review.sourceUrl}
                  className="review-source"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
