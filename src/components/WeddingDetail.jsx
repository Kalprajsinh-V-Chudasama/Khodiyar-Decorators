import './EventDetail.css';

function WeddingDetail({ onBack }) {
  return (
    <section className="event-detail">
      <div className="container">
        <button className="btn btn-outline back-btn" onClick={onBack}>← Back to Events</button>
        <div className="event-detail-header" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #c4845a 100%)' }}>
          <span className="event-detail-icon">💍</span>
          <h1>Weddings</h1>
        </div>
        <div className="event-detail-body">
          <h2>Your Dream Wedding, Perfectly Planned</h2>
          <p>From intimate ceremonies to grand celebrations, we craft every detail of your dream wedding — venue styling, floral arrangements, catering, and entertainment. Our team works closely with you to understand your vision, theme, and budget, ensuring a day that reflects your unique love story.</p>
          <h3>What We Offer</h3>
          <ul>
            <li>Venue selection and decoration</li>
            <li>Bridal and groom styling coordination</li>
            <li>Floral design and stage setup</li>
            <li>Catering and menu planning</li>
            <li>Photography and videography coordination</li>
            <li>Entertainment and music arrangements</li>
            <li>Guest management and hospitality</li>
          </ul>
          <h3>Our Approach</h3>
          <p>We believe every wedding is a unique story waiting to be told. Our process begins with understanding your culture, traditions, and personal style. From the engagement ceremony to the reception, we handle every detail so you can focus on creating memories.</p>
          <div className="event-cta">
            <button className="btn btn-primary" onClick={() => onBack(true)}>Plan Your Wedding</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingDetail;
