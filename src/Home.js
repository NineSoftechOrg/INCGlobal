// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button,Card } from 'react-bootstrap'; // Assuming you're using React-Bootstrap
import './App.css'; // Import custom CSS for styling

const Home = () => {
  return (
    <div className="Home">
        {/* Full Page Background Image Section */}
      <div className="bg-full-page">
      <div className="caption-container py-4">
  <Container>
    <div id="richTextContainer" className="text-start">
      <p className="mb-0">
        <span className="rte-heading-xxxl rte-v2-style d-block">
          <span className="d-block d-md-none" style={{ fontSize: '24px', lineHeight: '32px' }}>
          Driving Global Solutions, <br />
          One Innovation at a Time.
          </span>
          <span className="d-none d-md-block d-lg-none" style={{ fontSize: '36px', lineHeight: '44px' }}>
          Driving Global Solutions, <br />
          One Innovation at a Time.
          </span>
          <span className="d-none d-lg-block" style={{ fontSize: '48px', lineHeight: '56px' }}>
          Driving Global Solutions, <br />
          One Innovation at a Time.
          </span>
        </span>
      </p>
    </div>
  </Container>
  
</div>

  
  <div className="carousel-container">
    <Container>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://m.economictimes.com/thumb/msid-107857198,width-1600,height-900,resizemode-4,imgsize-58444/generative-ai.jpg" className="d-block w-100" alt="ai"/>
          </div>
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="ml"/>
          </div>
          <div className="carousel-item">
            <img src="https://etimg.etb2bimg.com/photo/90696798.cms" className="d-block w-100" alt="automation"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  </div>
</div>


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
      <div className="black-background-section">
  <Container fluid className="d-flex justify-content-between align-items-center py-5">
    <div className="caption" style={{ marginTop: '-20px' }}>
      <h2>Discover Our Innovations</h2>
      <h2>Be part of our mission to transform the future of technology.</h2>
      <button className="btn btn-light">Learn More</button>
    </div>

    <Row className="g-4">
      <Col sm={6}>
        <Card className="card-hover">
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt="Software" />
          <Card.Body>
            <Card.Title>Software</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="card-hover">
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/3d-rendering-futuristic-computer_23-2151004383.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user" alt="Hardware" />
          <Card.Body>
            <Card.Title>Hardware</Card.Title>
          </Card.Body>
        </Card>
      </Col> 
      <Col md={6}>
        <Card className="card-hover">
          <Card.Img variant="top" src="https://img.freepik.com/premium-photo/education-distance-learning-e-learning-online-learning-are-all-types-personal-development_27634-789.jpg" alt="Learning" />
          <Card.Body>
            <Card.Title>Learning</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="card-hover">
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg" alt="Developer Blog" />
          <Card.Body>
            <Card.Title>Developer Blog</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
{/* Dark Blue Section */}
<div className="dark-blue-section" style={{ backgroundColor: '#001f3f', padding: '60px 0' }}>
  <Container fluid className="d-flex justify-content-between align-items-center">
    <Row className="align-items-center">
      <Col md={6} className="d-flex justify-content-center">
        <img 
          src="https://s7d1.scene7.com/is/image/dmqualcommprod/EmailCollage?$QC_Responsive$&fmt=png-alpha" 
          alt="Snapdragon Insider" 
          style={{ width: '50%', height: 'auto' }} 
        />
      </Col>
      <Col md={6} style={{ color: '#fff', textAlign: 'center' }}>
        <h2>Become a Snapdragon Insider</h2>
        <p>Are you a passionate creator, tech aficionado, or gamer extraordinaire? You’ve come to the right place. Connect with a global community and get access to news, giveaways, and events.</p>
        <button className="btn btn-light">Sign Up</button>
      </Col>
    </Row>
  </Container>
</div>

    </div>
  );
};

export default Home;
