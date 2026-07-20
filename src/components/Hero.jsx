import { sectionImages } from '../assets/images';
import './Hero.css';

function Hero() {
  const heroImg = sectionImages.hero;

  return (
    <section id="hero" className="hero">
      <img
        src={heroImg.src}
        alt={heroImg.alt}
        role={heroImg.role}
        className="hero-bg-image"
        fetchPriority="high"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Making Every Moment<br /><span className="gold-text">Unforgettable</span></h1>
        <p>We craft extraordinary experiences for weddings, corporate events, and celebrations — from concept to flawless execution.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary btn-lg">Get a Free Consultation</a>
          <a href="#about" className="btn btn-secondary btn-lg">About Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
