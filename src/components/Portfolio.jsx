import { serviceImages } from '../assets/images';
import './Portfolio.css';
import { portfolioCategories } from '../data/events';

const imageMap = {
  'Weddings': serviceImages.weddings,
  'Corporate Events': serviceImages.corporate,
  'Birthdays & Private Parties': serviceImages.birthdays,
  'Social & Community Events': serviceImages.social,
};

function Portfolio({ onSelectEvent }) {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Events</h2>
          <p>Explore the events we've crafted — each one a unique story.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioCategories.map((cat) => {
            const img = imageMap[cat.title];
            return (
              <div className="portfolio-card" key={cat.title} onClick={() => onSelectEvent(cat.title)}>
                <div className="portfolio-img">
                  {img && (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="portfolio-img-file"
                      loading="lazy"
                    />
                  )}
                  <div className="portfolio-img-overlay">
                    <span className="view-more-btn">→</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <button className="btn-gold-outline view-btn" onClick={(e) => { e.stopPropagation(); onSelectEvent(cat.title); }}>View More →</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
