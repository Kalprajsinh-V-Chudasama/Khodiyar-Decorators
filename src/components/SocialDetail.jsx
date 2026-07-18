import './EventDetail.css';

function SocialDetail({ onBack }) {
  return (
    <section className="event-detail">
      <div className="container">
        <button className="btn btn-outline back-btn" onClick={onBack}>← Back to Events</button>
        <div className="event-detail-header" style={{ background: 'linear-gradient(135deg, #0f3460 0%, #2a3f56 100%)' }}>
          <span className="event-detail-icon">🎉</span>
          <h1>Social & Community Events</h1>
        </div>
        <div className="event-detail-body">
          <h2>Bringing People Together</h2>
          <p>Cultural festivals, charity galas, and community gatherings — we bring people together with thoughtfully designed events that inspire connection. Our team specializes in creating inclusive, engaging experiences that celebrate culture, community, and causes.</p>
          <h3>What We Offer</h3>
          <ul>
            <li>Cultural festival planning</li>
            <li>Charity gala and fundraiser management</li>
            <li>Community outreach events</li>
            <li>Religious and traditional ceremony coordination</li>
            <li>Public event logistics and permits</li>
            <li>Volunteer coordination</li>
            <li>Stage performances and cultural programs</li>
          </ul>
          <h3>Our Approach</h3>
          <p>Social and community events are about connection and purpose. We work closely with organizers to understand the cultural significance and community impact of each event, ensuring every detail respects traditions while delivering a memorable experience for all attendees.</p>
          <div className="event-cta">
            <button className="btn btn-primary" onClick={() => onBack(true)}>Plan Your Event</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialDetail;
