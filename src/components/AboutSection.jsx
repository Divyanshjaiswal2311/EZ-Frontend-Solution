import React from "react";

function AboutSection() {
  return (
    <section className="about-section py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3" style={{color: '#222d47'}}>Who We Are</h2>
            <p className="lead mb-3">
              EZ Works delivers professional, technology-enabled business support across graphics, video, language, content, research, IT and more. Our ISO 27001:2022 certified platform connects you instantly to 1000+ subject matter experts—any time, any region, always on.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2"><span className="text-primary fw-bold">🌙</span> Available 24/7, 365 days</li>
              <li className="mb-2"><span className="text-primary fw-bold">🔒</span> Enterprise-grade info security (ISO 27001:2022)</li>
              <li className="mb-2"><span className="text-primary fw-bold">🌎</span> 100+ global organizations trust EZ Works</li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            {/* Use a relevant global team/technology illustration or logo */}
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="About EZ Works" className="img-fluid rounded shadow-sm about-image" style={{maxHeight: 260, objectFit: "cover"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
