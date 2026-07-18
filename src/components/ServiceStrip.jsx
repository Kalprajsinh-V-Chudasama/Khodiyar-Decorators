import './ServiceStrip.css';
import { serviceStripItems } from '../data/events';

function ServiceStrip({ onSelectEvent }) {
  return (
    <section className="service-strip-section">
      <div className="container">
        <div className="service-strip">
          {serviceStripItems.map((s) => (
            <div
              key={s.label}
              className={`service-card ${s.highlight ? 'highlighted' : ''}`}
              onClick={() => onSelectEvent(s.label)}
            >
              <span className="service-icon">{s.icon}</span>
              <span className="service-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceStrip;
