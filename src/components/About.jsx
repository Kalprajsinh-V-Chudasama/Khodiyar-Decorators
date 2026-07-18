import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-images">
          <div className="collage">
            <div className="collage-main"></div>
            <div className="collage-1"></div>
            <div className="collage-2"></div>
          </div>
        </div>
        <div className="about-text">
          <h2>About SKD Events</h2>
          <p>
            With over 10 years of experience, SKD Events has been transforming
            ordinary spaces into extraordinary experiences. Based in Ahmedabad,
            Gujarat, we've orchestrated 500+ events — from intimate birthday
            gatherings to grand corporate galas.
          </p>
          <p>
            Our mission is simple: take the stress out of planning so you can
            truly enjoy your special moments. Every event we design is a unique
            story, brought to life with creativity, precision, and heart.
          </p>
          <div className="founder-quote">
            <blockquote>
              "We don't just plan events — we craft memories that last a lifetime.
              Our passion is your peace of mind."
            </blockquote>
            <cite>— Rajesh Patel, Founder & Director, SKD Events</cite>
          </div>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;
