import './DarkServices.css';

const services = [
  { icon: '💍', title: 'Wedding Planning', desc: 'End-to-end wedding design, vendor coordination, and on-day management.' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Conferences, product launches, and company celebrations.' },
  { icon: '🎂', title: 'Birthday Parties', desc: 'Themed parties and milestone celebrations for all ages.' },
  { icon: '🎉', title: 'Social Events', desc: 'Anniversaries, reunions, and community gatherings.' },
  { icon: '🏛️', title: 'Venue Decoration', desc: 'Stunning venue transformations tailored to your theme.' },
  { icon: '🍽️', title: 'Catering Coordination', desc: 'Curated menus and seamless food & beverage service.' },
];

function DarkServices() {
  return (
    <section id="services" className="dark-services">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'var(--white)' }}>Our Services</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Comprehensive event solutions tailored to your needs.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-item" key={s.title}>
              <span className="service-item-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DarkServices;
