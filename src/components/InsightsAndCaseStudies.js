import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './InsightsAndCaseStudies.css'; // Custom CSS for animations and colors

const InsightsAndCaseStudies = () => {
  return (
    <section className="insights-section" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/71/98/91/240_F_371989100_AE0aApDRl9k6WJzIaKGCR2zmQRLqWg3X.jpg)', backgroundSize: 'cover' }}>
      <Container>
        <h2 className="section-title text-center mb-5">Insights and Case Studies</h2>
        <Row>
          <Col md={4}>
            <Card className="insight-card animated-card">
              <Card.Body>
                <Card.Title className="card-title">AI-Driven Solutions</Card.Title>
                <Card.Text>
                  Discover how AI is transforming industries worldwide. Explore real-world applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="insight-card animated-card">
              <Card.Body>
                <Card.Title className="card-title">Case Study: Healthcare Innovation</Card.Title>
                <Card.Text>
                  Learn how INC Global helped revolutionize healthcare technology, improving lives.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="insight-card animated-card">
              <Card.Body>
                <Card.Title className="card-title">Advanced Automation</Card.Title>
                <Card.Text>
                  Automation is reshaping industries. Explore the future of smart automation systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InsightsAndCaseStudies;
