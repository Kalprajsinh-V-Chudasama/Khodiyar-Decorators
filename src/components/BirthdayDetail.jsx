import './EventDetail.css';

function BirthdayDetail({ onBack }) {
  return (
    <section className="event-detail">
      <div className="container">
        <button className="btn btn-outline back-btn" onClick={onBack}>← Back to Events</button>
        <div className="event-detail-header" style={{ background: 'linear-gradient(135deg, #e8c75a 0%, #d4a574 100%)' }}>
          <span className="event-detail-icon">🎂</span>
          <h1>Birthdays & Private Parties</h1>
        </div>
        <div className="event-detail-body">
          <h2>Celebrate Life's Special Moments</h2>
          <p>Milestone birthdays, anniversary celebrations, and themed parties — personalized experiences that surprise and delight your guests. Whether it's a 1st birthday or a 50th celebration, we create joy-filled events that honor the person and the occasion.</p>
          <h3>What We Offer</h3>
          <ul>
            <li>Themed party planning and decoration</li>
            <li>Kids' party entertainment and activities</li>
            <li>Anniversary celebrations</li>
            <li>Catering and cake design</li>
            <li>Photo booth and party favors</li>
            <li>Live music and DJ arrangements</li>
            <li>Surprise party coordination</li>
          </ul>
          <h3>Our Approach</h3>
          <p>Every birthday is a milestone worth celebrating. We take the time to understand the guest of honor's personality and preferences, crafting a party that feels personal and memorable. From intimate family gatherings to large-scale celebrations, we bring the fun.</p>
          <div className="event-cta">
            <button className="btn btn-primary" onClick={() => onBack(true)}>Plan Your Party</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BirthdayDetail;
