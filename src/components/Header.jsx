import React, { useState } from "react";
import { Navbar, Nav, NavDropdown ,Dropdown } from "react-bootstrap";
import { FaSearch, FaUser, FaHome } from 'react-icons/fa';
import './Header.css'; // Custom CSS for styling
import { Link ,useLocation} from 'react-router-dom';


const Header = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const location = useLocation();
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, refresh it
      window.location.reload();
    }
  };

  const handleSubMenu = (menu) => {
    if (activeSubMenu === menu) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menu);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setActiveSubMenu(null);
    }
  };
  // Toggle search bar visibility
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Toggle sign-in form dropdown visibility
  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
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
          <Navbar.Brand href="#" style={{ color: '#3153dc', fontWeight: 'bold' }}>INC Global</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Products Dropdown */}
              <NavDropdown
                title="Products"
                id="products-dropdown"
                className="products-dropdown"
                onToggle={handleDropdownToggle}
              >
                <div className="dropdown-horizontal full-width-dropdown">
                  <NavDropdown.Item onClick={() => handleSubMenu('applications')}>
                    Applications
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSubMenu('productType')}>
                    Product Type
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSubMenu('featuresTechnologies')}>
                    Features & Technologies
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSubMenu('snapdragon')}>
                    Snapdragon
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              {/* Developer Dropdown */}
              <NavDropdown title="Developer" id="developer-dropdown">
                <NavDropdown.Item href="#support1">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="support2">FAQs</NavDropdown.Item>
              </NavDropdown>

              {/* Support Dropdown */}
              <NavDropdown title="Support" id="support-dropdown">
                <NavDropdown.Item href="#support1">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="support2">FAQs</NavDropdown.Item>
              </NavDropdown>

              {/* Company Dropdown */}
              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="#support1">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="support2">FAQs</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Right Side Icons */}
            <Nav className="d-flex align-items-center">
              {/* Search Icon */}
              <Nav.Link onClick={toggleSearch} className="ms-3">
                <FaSearch size={20} className="d-inline d-md-none" /> {/* Smaller devices */}
                <FaSearch size={24} className="d-none d-md-inline" /> {/* Medium and above */}
              </Nav.Link>

              {/* Conditionally render search bar */}
              {searchVisible && (
                <div className="search-bar-container ms-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              )}

              {/* Divider */}
              <div className="vertical-divider mx-3 d-none d-sm-block"></div>

              {/* User Icon with Sign-In Dropdown */}
              <Nav>
                <Link to="/Signin" className="ms-3"> {/* Use Link component to navigate to login */}
                  <FaUser size={20} className="d-inline d-md-none" /> {/* Smaller devices */}
                  <FaUser size={24} className="d-none d-md-inline" /> {/* Medium and above */}
                </Link>
              </Nav>

              {/* Divider */}
              <div className="vertical-divider mx-3 d-none d-sm-block"></div>

              {/* Home Icon (Replaced workspace icon) */}
              <Nav.Link as={Link} to="/" onClick={handleHomeClick} className="ms-3">
                <FaHome size={20} className="d-inline d-md-none" /> {/* Smaller devices */}
                <FaHome size={24} className="d-none d-md-inline" /> {/* Medium and above */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Sub-options for Applications */}
          <div className={`applications-submenu full-width-submenu bg-light p-3 ${activeSubMenu === 'applications' ? 'active' : ''}`}>
            <h4 className="text-dark">Applications</h4>
            <div className="applications-grid">
              {/* Mobile Section */}
              <div>
                <h5>Mobile</h5>
                <ul>
                  <li><a href="#smartphones">Smartphones</a></li>
                  <li><a href="#laptops">Laptops & Tablets</a></li>
                  <li><a href="#xr">XR, VR, AR, MR</a></li>
                  <li><a href="#wearables">Wearables</a></li>
                </ul>
              </div>
              {/* Automotive Section */}
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
              {/* Audio Section */}
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
            </div>
          </div>

          {/* Sub-options for Product Type */}
          <div className={`product-type-submenu full-width-submenu bg-light p-3 ${activeSubMenu === 'productType' ? 'active' : ''}`}>
            <h4 className="text-dark">Product Type</h4>
            <div className="applications-grid">
              {/* System Processors Section */}
              <div>
                <h5>System Processors</h5>
                <ul>
                  <li><a href="#automotive">Automotive</a></li>
                  <li><a href="#extendedReality">Extended Reality</a></li>
                  <li><a href="#handheldGaming">Handheld Gaming</a></li>
                  <li><a href="#iot">IoT</a></li>
                  <li><a href="#laptops">Laptops & Tablets</a></li>
                  <li><a href="#printers">Printers</a></li>
                  <li><a href="#smartHomes">Smart Homes</a></li>
                  <li><a href="#smartphones">Smartphones</a></li>
                  <li><a href="#wearables">Wearables</a></li>
                </ul>
              </div>
              {/* Audio Components Section */}
              <div>
                <h5>Audio Components</h5>
                <ul>
                  <li><a href="#amplifiers">Amplifiers</a></li>
                  <li><a href="#codecs">Codecs</a></li>
                  <li><a href="#processors">Processors</a></li>
                </ul>
              </div>
              {/* Power Managers Section */}
              <div>
                <h5>Power Managers</h5>
                <ul>
                  <li><a href="#batteryChargers">Battery Chargers</a></li>
                  <li><a href="#pmics">PMICs</a></li>
                </ul>
              </div>
              {/* RF Components Section */}
              <div>
                <h5>RF Components</h5>
                <ul>
                  <li><a href="#antennaModules">Antenna Modules</a></li>
                  <li><a href="#frontEndModules">Front-End Modules</a></li>
                  <li><a href="#frontEndFilters">Front-End Filters</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sub-options for Features & Technologies */}
          <div className={`features-technologies-submenu full-width-submenu bg-light p-3 ${activeSubMenu === 'featuresTechnologies' ? 'active' : ''}`}>
            <h4 className="text-dark">Features & Technologies</h4>
            <div className="applications-grid">
              {/* AI Section */}
              <div>
                <h5>Artificial Intelligence</h5>
                <ul>
                  <li><a href="#pcAI">PC AI</a></li>
                  <li><a href="#smartphoneAI">Smartphone AI</a></li>
                  <li><a href="#automotiveAI">Automotive AI</a></li>
                  <li><a href="#cloudAI">Cloud AI</a></li>
                  <li><a href="#edgeAI">Edge AI</a></li>
                </ul>
              </div>
              {/* 5G Section */}
              <div>
                <h5>5G</h5>
                <ul>
                  <li><a href="#5gMmWave">5G mmWave</a></li>
                  <li><a href="#modemRfSystems">Modem-RF Systems</a></li>
                </ul>
              </div>
              {/* Bluetooth Section */}
              <div>
                <h5>Bluetooth</h5>
                <ul>
                  <li><a href="#bluetoothMesh">Bluetooth Mesh</a></li>
                  <li><a href="#aptXAudio">aptX Audio</a></li>
                  <li><a href="#cVcNoise">cVc noise cancellation</a></li>
                  <li><a href="#trueWireless">TrueWireless Stereo</a></li>
                </ul>
              </div>
              {/* Wi-Fi Section */}
              <div>
                <h5>Wi-Fi</h5>
                <ul>
                  <li><a href="#wiFi7">Wi-Fi 7</a></li>
                  <li><a href="#fastConnect">FastConnect</a></li>
                  <li><a href="#automatedFrequency">Automated Frequency Coordination</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sub-options for Snapdragon */}
          <div className={`snapdragon-submenu full-width-submenu bg-light p-3 ${activeSubMenu === 'snapdragon' ? 'active' : ''}`}>
            <h4 className="text-dark">Snapdragon</h4>
            <div className="applications-grid">
              {/* Snapdragon Experiences Section */}
              <div>
                <h5>Snapdragon Experiences</h5>
                <ul>
                  <li><a href="#cameras">Cameras</a></li>
                  <li><a href="#gaming">Gaming</a></li>
                  <li><a href="#audio">Audio</a></li>
                </ul>
              </div>
              {/* Snapdragon Insiders Section */}
              <div>
                <h5>Snapdragon Insiders</h5>
                <ul>
                  <li><a href="#newsArticles">News Articles</a></li>
                </ul>
              </div>
              {/* Snapdragon Devices Section */}
              <div>
                <h5>Snapdragon Devices</h5>
                <ul>
                  <li><a href="#smartphones">Smartphones</a></li>
                  <li><a href="#laptops">Laptops</a></li>
                  <li><a href="#xr">XR</a></li>
                  <li><a href="#deviceFinder">Device Finder</a></li>
                </ul>
              </div>
            </div>
          </div>
           
          
        </div>
      </Navbar>

    </div>
  );
};

export default Header;
