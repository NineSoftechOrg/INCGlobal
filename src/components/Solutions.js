import React from 'react';
import './Solutions.css'; // Custom CSS for this page

const Solutions = () => {
  return (
    <div>
      <div className="hero-section d-flex align-items-center">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6">
              <h1 className="main-title">Artificial Intelligence Development</h1>
              <p className="main-description">
                Empowering the Future with Intelligent Automation & Revolutionizing Industries with Advanced AI Systems.
              </p>
              <button className="btn btn-primary get-started-button">Get Started</button>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/young-girl-works-on-automation-machine-illustration-download-in-svg-png-gif-file-formats--ai-engineer-robotics-production-pack-industry-illustrations-5625499.png?f=webp"
                alt="AI Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-heading text-center mt-5">Our Testimonials</h2>
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="testimonial-card text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Client"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "This AI solution has transformed our workflow and improved our efficiency."
                </p>
                <h5 className="testimonial-author">John Doe</h5>
                <p className="testimonial-role">CEO, Tech Solutions</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="testimonial-card text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Client"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "The advanced AI systems provided by this company are top-notch and reliable."
                </p>
                <h5 className="testimonial-author">Jane Smith</h5>
                <p className="testimonial-role">Project Manager, Innovative Corp</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="testimonial-card text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Client"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "Their customer support is exceptional, and the AI products are easy to use."
                </p>
                <h5 className="testimonial-author">Michael Lee</h5>
                <p className="testimonial-role">CTO, Global Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Companies Section */}
      <div className="partners-section">
        <div className="container">
          <h2 className="partners-heading text-center">Our Partners</h2>
          <div className="partners-logos">
            <div className="logos-scroll">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bosch-logo.svg/1280px-Bosch-logo.svg.png" alt="Bosch" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Accenture_logo.svg/1280px-Accenture_logo.svg.png" alt="Accenture" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Deloitte.svg/1280px-Deloitte.svg.png" alt="Deloitte" className="partner-logo" />
              {/* Duplicate logos for continuous scrolling */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bosch-logo.svg/1280px-Bosch-logo.svg.png" alt="Bosch" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Accenture_logo.svg/1280px-Accenture_logo.svg.png" alt="Accenture" className="partner-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Deloitte.svg/1280px-Deloitte.svg.png" alt="Deloitte" className="partner-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
