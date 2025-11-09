import React from "react";

function HeroSection() {
  return (
    <section className="hero-section py-5 bg-white border-bottom" style={{background: 'linear-gradient(90deg, #313958 60%, #161c2d 100%)', color: '#fff'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3" style={{letterSpacing:1}}>
              AI-Powered Business Support, <span style={{color:'#4ba3fa'}}>On Demand</span>
            </h1>
            <p className="lead mb-4 fw-medium">
              70+ professional services, hundreds of subject matter experts, and round-the-clock global delivery. Unlock efficiency, creativity, and impact for your organization with EZ Works.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg px-4 rounded-pill shadow">
              Get in Touch
            </a>
          </div>
          <div className="col-lg-6 text-center">
            {/* Use a relevant illustration or hero mockup if you have it; otherwise Unsplash business/ai illustration */}
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=480&q=80"
              alt="AI Digital Collaboration"
              className="img-fluid rounded shadow-sm hero-image"
              style={{ maxHeight: 350, objectFit: "cover", boxShadow:'0 8px 48px 0 rgba(70,140,255,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
