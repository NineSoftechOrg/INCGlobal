// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer-section" >
      <Container>
        <Row className="align-items-start py-5">
          <Col md={6} className="mb-4">
            <h2 className="footer-title">INC Global</h2>
            <hr className="footer-hr" />
            <p className="footer-description">
              At INC Global, we are committed to pioneering innovations that enable intelligent computing across all domains, empowering the world to address its most pressing challenges. Our cutting-edge AI, high-performance, energy-efficient computing, and unparalleled connectivity provide reliable solutions that drive transformation across key industries. At INC Global, we are dedicated to advancing human progress.
            </p>
            <div className="social-icons">
              <a href="#"><FaInstagram className="icon" /></a>
              <a href="#"><FaFacebook className="icon" /></a>
              <a href="#"><FaLinkedin className="icon" /></a>
            </div>
            {/* Adding Email and Phone Information with Icons */}
            <div className="contact-info mt-3">
              <p>
                <FaEnvelope className="contact-icon" /> 
                Email: <a href="mailto:info@incglobal.pro">info@incglobal.pro</a>
              </p>
              <p>
                <FaPhone className="contact-icon" /> 
                Phone: <a href="tel:+916363617779">+91 6363617779</a>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4} className="footer-column mb-4">
                <h5>Quick Links</h5>
                <ul> 
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </Col>
              <Col md={4} className="footer-column mb-4">
                <h5>Company Info</h5>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </Col>
              <Col md={4} className="footer-column mb-4">
                <h5>Email Subscriptions</h5>
                <p>Get the latest INC Global and industry information delivered to your inbox.</p>
                <button className="btn btn-light subscribe-button">Subscribe</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      
    </footer>
  );
};

export default Footer;
