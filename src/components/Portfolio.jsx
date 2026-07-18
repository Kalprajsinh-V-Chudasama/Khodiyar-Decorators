import './Portfolio.css';

const categories = [
  {
    title: 'Weddings',
    desc: 'From intimate ceremonies to grand celebrations, we craft every detail of your dream wedding — venue styling, floral arrangements, catering, and entertainment.',
    color: 'linear-gradient(135deg, #d4a574 0%, #c4845a 100%)',
  },
  {
    title: 'Corporate Events',
    desc: 'Product launches, conferences, team offsites, and annual galas — our corporate event management ensures seamless execution that reflects your brand identity.',
    color: 'linear-gradient(135deg, #2a3f56 0%, #1b2838 100%)',
  },
  {
    title: 'Birthdays & Private Parties',
    desc: 'Milestone birthdays, anniversary celebrations, and themed parties — personalized experiences that surprise and delight your guests.',
    color: 'linear-gradient(135deg, #e8c75a 0%, #d4a574 100%)',
  },
  {
    title: 'Social & Community Events',
    desc: 'Cultural festivals, charity galas, and community gatherings — we bring people together with thoughtfully designed events that inspire connection.',
    color: 'linear-gradient(135deg, #0f3460 0%, #2a3f56 100%)',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Events</h2>
          <p>Explore the events we've crafted — each one a unique story.</p>
        </div>
        <div className="portfolio-grid">
          {categories.map((cat) => (
            <div className="portfolio-card" key={cat.title}>
              <div className="portfolio-img" style={{ background: cat.color }}>
                <div className="portfolio-img-overlay">
                  <span className="view-more-btn">→</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <button className="btn-gold-outline view-btn">View More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
