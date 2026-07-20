/**
 * Section Images - Central Registry
 * 
 * All placeholder images for the SKD Events website.
 * Naming convention: placeholder-[section]-[description].ext
 * 
 * PLACEHOLDER — TO REPLACE before production launch.
 * See Section_Images_PRD.md for replacement specs.
 */

// ─── Service Card Images (Portfolio Section) ─────────────────────────
import weddingsImg from './services/placeholder-weddings.svg';
import corporateImg from './services/placeholder-corporate.svg';
import birthdaysImg from './services/placeholder-birthdays.svg';
import socialImg from './services/placeholder-social.svg';

// ─── Wedding Gallery Images (1.png – 7.png) ─────────────────────────
import wedding1 from './services/1.png';
import wedding2 from './services/2.png';
import wedding3 from './services/3.png';
import wedding4 from './services/4.png';
import wedding5 from './services/5.png';
import wedding6 from './services/6.png';
import wedding7 from './services/7.png';

// ─── Section Background Images ───────────────────────────────────────
import heroBallroom from './sections/placeholder-hero-ballroom.svg';
import footerEvent from './sections/placeholder-footer-event.svg';
import goldPattern from './sections/placeholder-pattern-gold.svg';
import quoteMark from './sections/placeholder-quote-mark.svg';

// ─── About Section Images ────────────────────────────────────────────
import aboutMain from './about/placeholder-about-main.svg';
import about1 from './about/placeholder-about-1.svg';
import about2 from './about/placeholder-about-2.svg';

/**
 * Service card images — used in Portfolio.jsx
 * Aspect ratio: 4:3 or 3:2
 * Min resolution: 1200px longest edge
 */
export const serviceImages = {
  weddings: {
    src: weddingsImg,
    alt: 'Elegant outdoor wedding reception setup with string lighting and floral centerpieces',
    placeholder: true,
  },
  corporate: {
    src: corporateImg,
    alt: 'Professional corporate conference hall with formal seating and stage setup',
    placeholder: true,
  },
  birthdays: {
    src: birthdaysImg,
    alt: 'Tastefully decorated birthday celebration with balloons and elegant table setup',
    placeholder: true,
  },
  social: {
    src: socialImg,
    alt: 'Large-scale outdoor social gathering with guests mingling and elegant catering',
    placeholder: true,
  },
};

/**
 * Section background images — used in various section components
 */
export const sectionImages = {
  hero: {
    src: heroBallroom,
    alt: '',
    role: 'presentation',
    placeholder: true,
  },
  footer: {
    src: footerEvent,
    alt: '',
    role: 'presentation',
    placeholder: true,
  },
  darkServicesPattern: {
    src: goldPattern,
    alt: '',
    role: 'presentation',
    placeholder: true,
    repeat: true,
  },
  testimonialQuote: {
    src: quoteMark,
    alt: '',
    role: 'presentation',
    placeholder: true,
  },
};

/**
 * About section collage images
 */
export const aboutImages = {
  main: {
    src: aboutMain,
    alt: 'SKD Events team setting up an elegant event venue',
    placeholder: true,
  },
  secondary: {
    src: about1,
    alt: 'Beautiful floral arrangement centerpiece at a premium event',
    placeholder: true,
  },
  tertiary: {
    src: about2,
    alt: 'SKD Events team collaborating on event design',
    placeholder: true,
  },
};

/**
 * Wedding project gallery images — used in WeddingGallery.jsx
 * 7 images showcasing completed wedding projects
 */
export const weddingGallery = [
  { src: wedding5, alt: 'Wedding mandap decoration with traditional floral arrangements' },
  { src: wedding2, alt: 'Beautiful outdoor wedding ceremony setup with decorated arch' },
  { src: wedding3, alt: 'Grand wedding stage decoration with cascading florals' },
  { src: wedding4, alt: 'Intimate wedding dinner arrangement with candlelit tables' },
  { src: wedding1, alt: 'Elegant wedding reception hall with floral centerpieces and ambient lighting' },
  { src: wedding6, alt: 'Wedding entry gate decorated with flowers and lights' },
  { src: wedding7, alt: 'Wedding venue ambiance with elegant draping and lighting design' },
];

/**
 * Complete image manifest for tracking replacements.
 * Each entry: { id, src, section, purpose, aspectRatio, minResolution, status }
 */
export const imageManifest = [
  { id: 'weddings', section: 'Portfolio', purpose: 'Service card image', aspectRatio: '4:3', minResolution: '1200px', status: 'PLACEHOLDER' },
  { id: 'corporate', section: 'Portfolio', purpose: 'Service card image', aspectRatio: '4:3', minResolution: '1200px', status: 'PLACEHOLDER' },
  { id: 'birthdays', section: 'Portfolio', purpose: 'Service card image', aspectRatio: '4:3', minResolution: '1200px', status: 'PLACEHOLDER' },
  { id: 'social', section: 'Portfolio', purpose: 'Service card image', aspectRatio: '4:3', minResolution: '1200px', status: 'PLACEHOLDER' },
  { id: 'hero-ballroom', section: 'Hero', purpose: 'Full-width background', aspectRatio: '16:9', minResolution: '1920px', status: 'PLACEHOLDER' },
  { id: 'footer-event', section: 'Footer', purpose: 'Dim background image', aspectRatio: '16:5', minResolution: '1920px', status: 'PLACEHOLDER' },
  { id: 'pattern-gold', section: 'DarkServices', purpose: 'Repeating geometric pattern', aspectRatio: '1:1', minResolution: '200px', status: 'PLACEHOLDER' },
  { id: 'about-main', section: 'About', purpose: 'Collage main image', aspectRatio: '4:3', minResolution: '1200px', status: 'PLACEHOLDER' },
  { id: 'about-1', section: 'About', purpose: 'Collage secondary image', aspectRatio: '4:3', minResolution: '800px', status: 'PLACEHOLDER' },
  { id: 'about-2', section: 'About', purpose: 'Collage tertiary image', aspectRatio: '4:3', minResolution: '800px', status: 'PLACEHOLDER' },
  { id: 'quote-mark', section: 'Testimonials', purpose: 'Decorative quote graphic', aspectRatio: '1:1', minResolution: '200px', status: 'PLACEHOLDER' },
];
