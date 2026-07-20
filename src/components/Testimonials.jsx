import { useState } from 'react';
import { sectionImages } from '../assets/images';
import './Testimonials.css';

const testimonials = [
  {
    quote: "SKD Events turned our wedding into a fairytale. Every detail was perfect — we didn't have to worry about a thing!",
    name: 'Priya & Amit Sharma',
    event: 'Wedding',
  },
  {
    quote: 'Our company annual gala was the best yet. The team understood our brand and delivered a world-class experience.',
    name: 'Vikram Mehta',
    event: 'Corporate Event',
  },
  {
    quote: "My daughter's birthday party was magical! The theme decoration and activities kept all the kids (and parents) delighted.",
    name: 'Neha Patel',
    event: 'Birthday Party',
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const quoteImg = sectionImages.testimonialQuote;

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section className="section testimonial-section">
      <img
        src={quoteImg.src}
        alt=""
        role="presentation"
        className="testimonial-quote-bg"
        loading="lazy"
      />
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-card">
          <div className="quote-icon">&ldquo;</div>
          <blockquote>{t.quote}</blockquote>
          <div className="testimonial-author">
            <strong>{t.name}</strong>
            <span>{t.event}</span>
          </div>
          <div className="testimonial-nav">
            <button onClick={prev} aria-label="Previous">←</button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <span key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
              ))}
            </div>
            <button onClick={next} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
