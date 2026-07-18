import './ServiceStrip.css';

const services = [
  { icon: '💍', label: 'Weddings', highlight: true },
  { icon: '🎂', label: 'Birthdays' },
  { icon: '🏢', label: 'Corporate Events' },
  { icon: '🎉', label: 'Social Gatherings' },
  { icon: '🎪', label: 'Festivals' },
];

function ServiceStrip() {
  return (
    <section className="service-strip-section">
      <div className="container">
        <div className="service-strip">
          {services.map((s) => (
            <a
              key={s.label}
              href="#portfolio"
              className={`service-card ${s.highlight ? 'highlighted' : ''}`}
            >
              <span className="service-icon">{s.icon}</span>
              <span className="service-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceStrip;
