import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from './Header'; // Import your Header component


const Contact = () => {
  return (
    <>
     <Header/>
      <Container className="contact-page">
        <h1 className="text-center my-5" style={{paddingTop:"40px"}}>Contact Us</h1>
        <Row className="justify-content-center">
          <Col md={6} style={{paddingTop:"40px"}}>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src="https://i.pinimg.com/originals/e5/1e/91/e51e911ff1c317cf039080c55f3db09b.png" alt="Contact Us Illustration" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Contact;