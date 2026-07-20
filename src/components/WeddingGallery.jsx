import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingGallery } from '../assets/images';
import './WeddingGallery.css';

function WeddingGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const openLightbox = useCallback((index) => {
    previousFocusRef.current = document.activeElement;
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setTimeout(() => {
      previousFocusRef.current?.focus();
    }, 0);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % weddingGallery.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + weddingGallery.length) % weddingGallery.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const isFeatured = (index) => index === 0;

  return (
    <section className="wedding-gallery" aria-label="Wedding project gallery">
      <div className="gallery-header">
        <span className="gallery-label">Our Portfolio</span>
        <h2>Wedding Projects</h2>
        <p>A glimpse into the weddings we've had the honor of bringing to life.</p>
      </div>

      <div className="gallery-grid">
        {weddingGallery.map((img, index) => (
          <button
            key={index}
            className={`gallery-item ${isFeatured(index) ? 'gallery-item--featured' : ''} ${loadedImages[index] ? 'gallery-item--loaded' : ''}`}
            onClick={() => openLightbox(index)}
            aria-label={`View image ${index + 1} of ${weddingGallery.length}: ${img.alt}`}
          >
            {!loadedImages[index] && <div className="gallery-skeleton" />}
            <img
              src={img.src}
              alt={img.alt}
              loading={index < 3 ? 'eager' : 'lazy'}
              onLoad={() => handleImageLoad(index)}
            />
            <div className="gallery-item-overlay">
              <svg className="gallery-eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${lightboxIndex + 1} of ${weddingGallery.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              ✕
            </button>

            <button className="lightbox-nav lightbox-nav--prev" onClick={goPrev} aria-label="Previous image">
              ‹
            </button>

            <div className="lightbox-image-wrapper">
              <img
                key={lightboxIndex}
                src={weddingGallery[lightboxIndex].src}
                alt={weddingGallery[lightboxIndex].alt}
                className="lightbox-image"
              />
            </div>

            <button className="lightbox-nav lightbox-nav--next" onClick={goNext} aria-label="Next image">
              ›
            </button>

            <div className="lightbox-counter">
              {lightboxIndex + 1} / {weddingGallery.length}
            </div>

            <div className="lightbox-dots">
              {weddingGallery.map((_, i) => (
                <button
                  key={i}
                  className={`lightbox-dot ${i === lightboxIndex ? 'lightbox-dot--active' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WeddingGallery;
