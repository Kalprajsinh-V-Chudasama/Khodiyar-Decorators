import { useState } from 'react';
import './ContactForm.css';

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Social Gathering',
  'Festival',
  'Other',
];

function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
    setForm({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get a Free Consultation</h2>
          <p>Tell us about your event, and we'll craft a proposal tailored to you.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+91 9974160324">+91 9974160324</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:khodiyardecorators@gmail.com">khodiyardecorators@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Office</h4>
                <p>Shop-1, Greenvilla Residency, D-cabin, Sabarmati, Ahmedabad, Gujarat, 380019</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <select name="eventType" value={form.eventType} onChange={handleChange} required>
                <option value="">Select Event Type</option>
                {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} />
            <textarea name="message" placeholder="Tell us about your event..." value={form.message} onChange={handleChange} required rows="4"></textarea>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
              <p className="form-note">We'll respond within 24 hours</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
