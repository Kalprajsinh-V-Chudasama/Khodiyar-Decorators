import './Portfolio.css';
import { portfolioCategories } from '../data/events';

function Portfolio({ onSelectEvent }) {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Events</h2>
          <p>Explore the events we've crafted — each one a unique story.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioCategories.map((cat) => (
            <div className="portfolio-card" key={cat.title} onClick={() => onSelectEvent(cat.title)}>
              <div className="portfolio-img" style={{ background: cat.color }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
