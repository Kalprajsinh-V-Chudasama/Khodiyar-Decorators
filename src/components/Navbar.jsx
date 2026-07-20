import { useState } from 'react';
import './Navbar.css';

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
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
