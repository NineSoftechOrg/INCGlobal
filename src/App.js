import React from "react";
import { Container, Card } from "react-bootstrap";
import Header from "./components/Header";
import './App.css'; // Import custom CSS for styling

const App = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Full Page Background Image Section */}
      <div className="bg-full-page">
        <div className="caption-container">
          <Container>
            <div id="richTextContainer">
              <p>
                <span className="rte-heading-xxxl rte-v2-style">
                  We bring intelligent <br />
                  computing everywhere.
                </span>
              </p>
            </div>
          </Container>
        </div>

        {/* New SVG Icons Section - Positioned Below Caption */}
        <div className="svg-icons-container">
          <div className="flex-container-header_wrapper__B3pr-">
            <div className="flex-container-header_controls__hR0EU flex-container-header_topLeft__GS1eu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-fPXMVe boTdfl slider_wosArrowControl__B45lb">
                <mask id="mask0_577_417" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                </mask>
                <g mask="url(#mask0_577_417)">
                  <rect x="-8" y="-8" width="40" height="40" fill="inherit"></rect>
                </g>
              </svg>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-fPXMVe boTdfl slider_wosArrowControl__B45lb">
                <path d="M4.66602 10.0003H16.3327M16.3327 10.0003L10.4993 4.16699M16.3327 10.0003L10.4993 15.8337" stroke="var(--qualcomm-blue-default)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Section */}
      <div className="scrollable-cards-section">
        <Container className="white-background py-5">
          <h3 className="text-center mb-4">
            <h1 className="text-content">
              Welcome to INC Global<br />
              Discover our diverse range of<br />
              offerings and resources.
            </h1>
          </h3>
          <div className="card-container">
            {/* Card Items */}
            <Card className="card-item">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTduMpXZOeOCHwSBJkzL3hyAVMTWffDMOkMDyHSLWu267pzMPtto1XVsNW_OKSRzkSS3M&usqp=CAU" alt="AI" />
              <Card.Body className="text-center">
                <Card.Title><a href="#ai" className="stretched-link text-dark">AI</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-68408,resizemode-75,msid-100074543/news/how-to/whats-hyperautomation-and-how-it-can-improve-compliance-and-transparency-in-bfsi.jpg" alt="Automation" />
              <Card.Body className="text-center">
                <Card.Title><a href="#automation" className="stretched-link text-dark">Automation</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-111517612,width-1600,height-900,resizemode-4,imgsize-78742/voice-over-ai.jpg" alt="Audio" />
              <Card.Body className="text-center">
                <Card.Title><a href="#audio" className="stretched-link text-dark">Audio</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-105790141,width-1600,height-900,resizemode-4,imgsize-117488/ar-vr.jpg" alt="XR/VR" />
              <Card.Body className="text-center">
                <Card.Title><a href="#xr-vr" className="stretched-link text-dark">XR/VR</a></Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-item">
              <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-113237414,width-1600,height-900,resizemode-4,imgsize-207571/laptops-75k.jpg" alt="Laptops" />
              <Card.Body className="text-center">
                <Card.Title><a href="#laptops" className="stretched-link text-dark">Laptops</a></Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default App;
