import { sectionImages } from '../assets/images';
import './Footer.css';

function Footer() {
  const footerImg = sectionImages.footer;

  return (
    <footer className="footer">
      <img
        src={footerImg.src}
        alt=""
        role="presentation"
        className="footer-bg-image"
        loading="lazy"
      />
      <div className="footer-overlay"></div>
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a href="#hero" className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">SKD<span className="logo-accent">Events</span></span>
          </a>
          <p>Making every moment unforgettable. Premium event management services across Gujarat.</p>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <span>Contact number</span>
              <a href="tel:+91 9974160324">+91 9974160324</a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:khodiyardecorators@gmail.com">khodiyardecorators@gmail.com</a>
            </li>
            <li>
              <span>Location</span>
              <a href= "https://maps.app.goo.gl/crqAV8KcaTXr32P27">Ahmedabad,Gujarat,India</a>
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
          </ul>
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
