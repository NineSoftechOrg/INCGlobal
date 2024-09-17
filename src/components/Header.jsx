import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaSearch, FaUser, FaBriefcase } from 'react-icons/fa';
import './Header.css'; // Custom CSS for styling

const Header = () => {
  const [showApplicationsOptions, setShowApplicationsOptions] = useState(false);
  const [showProductTypeOptions, setShowProductTypeOptions] = useState(false);
  const [showFeaturesTechnologiesOptions, setShowFeaturesTechnologiesOptions] = useState(false);

  // Toggle visibility for Applications submenu
  const toggleApplicationsOptions = () => {
    setShowApplicationsOptions(prevState => !prevState);
  };

  // Toggle visibility for Product Type submenu
  const toggleProductTypeOptions = () => {
    setShowProductTypeOptions(prevState => !prevState);
  };

  // Toggle visibility for Features & Technologies submenu
  const toggleFeaturesTechnologiesOptions = () => {
    setShowFeaturesTechnologiesOptions(prevState => !prevState);
  };

  return (
    <div className="header-wrapper">
      {/* Gradient Border */}
      <div
        className="gradient-border"
        style={{
          height: '4px',
          background: 'linear-gradient(to left, #E71324, #3278dc)',
        }}
      ></div>
      <Navbar bg="white" variant="light" expand="lg" className="fixed-top header" style={{ minHeight: '4.3rem' }}>
        <div className="container-fluid" style={{ paddingLeft: '130px', paddingRight: '48px', justifyContent: 'space-between', display: 'flex' }}>
          {/* Fluid container for full width */}
          <Navbar.Brand href="#" style={{ color: '#3153dc', fontWeight: 'bold' }}>INC Global</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Products Dropdown */}
              <NavDropdown title="Products" id="products-dropdown" className="products-dropdown">
                <div className="dropdown-horizontal full-width-dropdown">
                  {/* Full width */}
                  <NavDropdown.Item onClick={toggleApplicationsOptions}>
                    Applications
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleProductTypeOptions}>
                    Product Type
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleFeaturesTechnologiesOptions}>
                    Features & Technologies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#snapdragon">Snapdragon</NavDropdown.Item>
                </div>
              </NavDropdown>

              {/* Other Dropdowns */}
              <NavDropdown title="Developer" id="developer-dropdown">
                <NavDropdown.Item href="#dev1">Dev Tools</NavDropdown.Item>
                <NavDropdown.Item href="#dev2">API Docs</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Support" id="support-dropdown">
                <NavDropdown.Item href="#support1">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#support2">FAQs</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Right Side Icons */}
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#search" className="ms-3">
                <FaSearch size={20} />
              </Nav.Link>
              <div className="vertical-divider mx-3"></div>
              <Nav.Link href="#signin" className="ms-3">
                <FaUser size={20} />
              </Nav.Link>
              <div className="vertical-divider mx-3"></div>
              <Nav.Link href="#workspace" className="ms-3">
                <FaBriefcase size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Sub-options for Applications */}
          {showApplicationsOptions && (
            <div className="applications-submenu full-width-submenu bg-light p-3">
              <h4 className="text-dark">Applications</h4>
              <div className="applications-grid">
                <div>
                  <h5>Mobile</h5>
                  <ul>
                    <li><a href="#smartphones">Smartphones</a></li>
                    <li><a href="#laptops">Laptops & Tablets</a></li>
                    <li><a href="#xr">XR, VR, AR, MR</a></li>
                    <li><a href="#wearables">Wearables</a></li>
                  </ul>
                </div>
                <div>
                  <h5>Automotive</h5>
                  <ul>
                    <li><a href="#adas">ADAS/AD</a></li>
                    <li><a href="#cockpit">Cockpit</a></li>
                    <li><a href="#cv2x">C-V2X</a></li>
                    <li><a href="#carCloud">Car-to-Cloud</a></li>
                    <li><a href="#connectivity">Connectivity & Positioning</a></li>
                    <li><a href="#twoWheelers">Two-Wheelers</a></li>
                  </ul>
                </div>
                <div>
                  <h5>Audio</h5>
                  <ul>
                    <li><a href="#bluetooth">Bluetooth Wireless Speakers</a></li>
                    <li><a href="#headsets">Headsets, Headphones & Earbuds</a></li>
                    <li><a href="#mobileAudio">Mobile Audio</a></li>
                    <li><a href="#smartSpeakers">Smart Speakers</a></li>
                    <li><a href="#soundbars">Soundbars and Home Theater</a></li>
                  </ul>
                </div>
                {/* Add more sections as needed */}
              </div>
            </div>
          )}

          {/* Sub-options for Product Type */}
          {showProductTypeOptions && (
            <div className="product-type-submenu full-width-submenu bg-light p-3">
              {/* Content for Product Type submenu */}
            </div>
          )}

          {/* Sub-options for Features & Technologies */}
          {showFeaturesTechnologiesOptions && (
            <div className="features-technologies-submenu full-width-submenu bg-light p-3">
              {/* Content for Features & Technologies submenu */}
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;