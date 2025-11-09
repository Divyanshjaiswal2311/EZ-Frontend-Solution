import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5" style={{background: 'linear-gradient(90deg, #313958 60%, #161c2d 100%)'}}>
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="fw-bold fs-4 mb-2" style={{letterSpacing:2}}>EZ Works</div>
            <div style={{fontSize:'0.97em',opacity:0.92}}>An Extended Team for Business Professionals,<br/>AI-powered, global, and always on.</div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="fw-bold mb-2">Services</div>
            <ul className="list-unstyled footer-links">
              <li><a href="#features" className="text-white-50">Graphics & Video</a></li>
              <li><a href="#features" className="text-white-50">Presentation Design</a></li>
              <li><a href="#features" className="text-white-50">AI Tools & Tech</a></li>
              <li><a href="#features" className="text-white-50">Research & Analytics</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="fw-bold mb-2">Information Security</div>
            <div style={{fontSize:'0.93em', opacity:0.85}}>
              <div>ISO 27001:2022</div>
              <div>GDPR Compliant</div>
              <div>ISO 9001:2015</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fw-bold mb-2">Follow Us</div>
            <a href="#" className="text-white me-3" aria-label="Twitter" style={{fontSize: 21}}> <i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white me-3" aria-label="LinkedIn" style={{fontSize: 21}}> <i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-white" aria-label="GitHub" style={{fontSize: 21}}> <i className="bi bi-github"></i></a>
          </div>
        </div>
        <hr className="border-light mt-4" style={{opacity:0.18}} />
        <div className="text-center small" style={{letterSpacing:1, fontSize:'0.97em'}}>
          &copy; {new Date().getFullYear()} EZ Works. All rights reserved.<br/>Terms of Use &nbsp;|&nbsp; Privacy Policy
        </div>
      </div>
    </footer>
  );
}

export default Footer;
