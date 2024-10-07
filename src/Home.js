// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button,Card } from 'react-bootstrap'; // Assuming you're using React-Bootstrap
import './App.css'; // Import custom CSS for styling
import ChatBot from './components/ChatBot'
import AOS from 'aos';
import InsightsAndCaseStudies from './components/InsightsAndCaseStudies';


const Home = () => {
  return (
    <div className="home">
    <Container fluid>
      <Row className="align-items-center" style={{ height: '100vh' }}>
        <Col md={6} className="text-left">
          <div className="caption-container">
            <h1 className="display-4">Welcome to INC Global</h1>
            <h3>Lead the Change: Experience the Future with INC Global.</h3>
            <Button variant="primary" className="mt-3">Read More</Button>
          </div>
        </Col>
        <Col md={6} className="image-container">
          <img 
            src="https://example.com/your-image.jpg"  // Replace with your actual image URL
            alt="AI Solutions"
            className="img-fluid" 
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>


      {/* Horizontal Scrollable Cards Section */}
      <div className="scrollable-cards-section">
        <Container className="white-background py-5">
          <h3 className="text-center mb-4">
            <h1 className="text-content"><p style={{ color: 'blue' }}>
              Welcome to INC Global </p>
              Discover our diverse range of <br />
              offerings and resources.
            </h1>
          </h3>
          <div className="card-container">
            {/* Card Items */}
            <Card className="card-item">
              <Card.Img variant="top" src="https://s7d1.scene7.com/is/image/dmqualcommprod/women-and-dog-at-sea?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1" alt="AI" />
              <Card.Body className="text-center">
                <Card.Title><a href="#ai" className="stretched-link text-dark">AI</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://s7d1.scene7.com/is/image/dmqualcommprod/automotive-car?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1" alt="Automation" />
              <Card.Body className="text-center">
                <Card.Title><a href="#automation" className="stretched-link text-dark">Automation</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://s7d1.scene7.com/is/image/dmqualcommprod/women-listening-music?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1" alt="Audio" />
              <Card.Body className="text-center">
                <Card.Title><a href="#audio" className="stretched-link text-dark">Audio</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://s7d1.scene7.com/is/image/dmqualcommprod/xr-vr-electronic?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1" alt="XR/VR" />
              <Card.Body className="text-center">
                <Card.Title><a href="#xr-vr" className="stretched-link text-dark">XR/VR</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://s7d1.scene7.com/is/image/dmqualcommprod/laptop-homepage-carousel?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1" alt="Laptops" />
              <Card.Body className="text-center">
                <Card.Title><a href="#laptops" className="stretched-link text-dark">Laptops</a></Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
     
{/* black background section */}
     {/* Why Choose Us Section */}
     <div className="why-choose-us">
        <h2 className="why-title" data-aos="fade-up">Why Choose Us?</h2>
        <div className="features-container row">
          <div className="col-md-3 feature-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h4>Locally Owned and Operated</h4>
            <p>A fixture in our community, dedicated to serving our neighbors since 2013.</p>
          </div>
          <div className="col-md-3 feature-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Innovative Solutions</h4>
            <p>Get the best equipment to meet your family’s needs and comfort demands.</p>
          </div>
          <div className="col-md-3 feature-box" data-aos="fade-up" data-aos-delay="600">
            <div className="icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h4>Satisfaction Guarantee</h4>
            <p>Our job isn’t complete until you are fully satisfied with our work, guaranteed.</p>
          </div>
          <div className="col-md-3 feature-box" data-aos="fade-up" data-aos-delay="800">
            <div className="icon">
              <i className="fas fa-award"></i>
            </div>
            <h4>Award-Winning Service</h4>
            <p>Our highly skilled technicians deliver award-winning service on all jobs, big and small.</p>
          </div>
        </div>
      </div>
{/* Insights and Casestudies */}
<InsightsAndCaseStudies />
{/* Dark Blue Section */}
{/* Newsletter Section */}
{/* Newsletter Section */}
<div className="newsletter-section">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/newsletter-illustration-download-in-svg-png-gif-file-formats--email-marketing-promotional-mail-advertising-business-pack-people-illustrations-3414911.png?f=webp"
              alt="Newsletter Image"
              className="newsletter-image"
            />
          </div>
          {/* Right Side - Box with Form */}
          <div className="col-md-6">
            <div className="newsletter-box">
              <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
              <p className="newsletter-description">
                Stay updated with the latest news and innovations from INC Global.
              </p>
              <form className="newsletter-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
{/* ChatBot section */}
<ChatBot />
    
    </div>
  );
};

export default Home;