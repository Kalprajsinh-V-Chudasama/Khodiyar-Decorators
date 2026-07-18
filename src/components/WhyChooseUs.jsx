import './WhyChooseUs.css';

const steps = [
  {
    number: '01',
    title: 'Planning',
    desc: 'We listen, brainstorm, and craft a detailed roadmap tailored to your vision and budget.',
  },
  {
    number: '02',
    title: 'Execution',
    desc: 'Our team coordinates vendors, logistics, and timelines so you can relax and enjoy.',
  },
  {
    number: '03',
    title: 'Flawless Delivery',
    desc: 'Every detail comes together seamlessly, creating an unforgettable experience for you and your guests.',
  },
];

function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>From vision to reality — we handle every detail with precision and passion.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={step.title}>
              <div className="step-number">{step.number}</div>
              <div className="step-divider"></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
