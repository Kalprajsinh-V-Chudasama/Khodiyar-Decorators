import './EventDetail.css';

function CorporateDetail({ onBack }) {
  return (
    <section className="event-detail">
      <div className="container">
        <button className="btn btn-outline back-btn" onClick={onBack}>← Back to Events</button>
        <div className="event-detail-header" style={{ background: 'linear-gradient(135deg, #2a3f56 0%, #1b2838 100%)' }}>
          <span className="event-detail-icon">🏢</span>
          <h1>Corporate Events</h1>
        </div>
        <div className="event-detail-body">
          <h2>Professional Events That Impress</h2>
          <p>Product launches, conferences, team offsites, and annual galas — our corporate event management ensures seamless execution that reflects your brand identity. We combine professionalism with creativity to deliver events that leave a lasting impression on your stakeholders.</p>
          <h3>What We Offer</h3>
          <ul>
            <li>Conference and seminar management</li>
            <li>Product launch events</li>
            <li>Team building activities and offsites</li>
            <li>Annual galas and award ceremonies</li>
            <li>Trade show and exhibition coordination</li>
            <li>VIP guest management</li>
            <li>Audiovisual and technical production</li>
          </ul>
          <h3>Our Approach</h3>
          <p>We understand the corporate world demands precision and professionalism. Our team works with your stakeholders to align every detail with your brand guidelines and business objectives. From venue selection to event branding, we ensure a cohesive and impactful experience.</p>
          <div className="event-cta">
            <button className="btn btn-primary" onClick={() => onBack(true)}>Plan Your Corporate Event</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateDetail;
