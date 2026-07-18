import { useState, useEffect } from 'react';
import './Navbar.css';

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <span><a href="tel:+91 9974160324">+91 9974160324</a></span>
        <span><a href="mailto:khodiyardecorators@gmail.com">khodiyardecorators@gmail.com</a></span>
      </div>
      <nav className="nav-inner container">
        <a href="#hero" className="logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">SKD<span className="logo-accent">Events</span></span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary nav-cta">Get a Quote</a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
