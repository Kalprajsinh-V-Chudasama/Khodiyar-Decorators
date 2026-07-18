import { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a href="#hero" className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">SKD<span className="logo-accent">Events</span></span>
          </a>
          <p>Making every moment unforgettable. Premium event management services across Gujarat.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">yt</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <span>📞</span>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <span>✉️</span>
              <a href="mailto:info@skdevents.com">info@skdevents.com</a>
            </li>
            <li>
              <span>📍</span>
              <span>123 Event Street, Ahmedabad, Gujarat 380001</span>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get event tips and inspiration delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SKD Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
