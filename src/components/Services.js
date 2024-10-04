// Services.js
import React from 'react';
import './Services.css'; // Make sure the path is correct
import { FaLaptopCode, FaPalette, FaPencilAlt, FaBullhorn, FaCamera, FaCubes } from 'react-icons/fa';

function Services() {
  return (
    <div className="services-section text-center">
      <div className="container">
        <h2 className="services-title">OUR <span className="highlight">SERVICES</span></h2>
        <p className="services-description">
        Innovative Solutions Tailored to Your Needs: Experience the INC Global Advantage.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaPalette className="service-icon" />
              <h4>GRAPHIC DESIGN</h4>
              <p>Bringing Your Imagination to Life with Innovative Graphic Design.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaLaptopCode className="service-icon" />
              <h4>WEB DEVELOPMENT</h4>
              <p>Empowering Brands Online: Innovative Web Development for a Digital World.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaCubes className="service-icon" />
              <h4>PRODUCT DESIGN</h4>
              <p>Innovate, Design, Deliver: Shaping the Future of Product Development.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaPencilAlt className="service-icon" />
              <h4>BLOG WRITING</h4>
              <p>Your Voice, Amplified: Professional Blog Writing Tailored to Your Needs.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaBullhorn className="service-icon" />
              <h4>SOCIAL MARKETING</h4>
              <p>Connecting Brands with People: Social Marketing that Inspires Engagement.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-box">
              <FaCamera className="service-icon" />
              <h4>PHOTOGRAPHY</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
