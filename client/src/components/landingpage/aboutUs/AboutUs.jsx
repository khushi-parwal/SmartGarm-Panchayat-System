import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='complete-achievement'>
   
    <div className='about' id="about">
    <Container className="my-5 pt-2 pb-1 au-container" id='aboutUs'>
      {/* Creating a row to center the title */}
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="text-center">
          <h2>About Us</h2>
        </Col>
      </Row>
      
      {/* Creating another row for the two cards */}
      <Row className="my-5">
        {/* First Column for the first card */}
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <Card className='au-card'>
            <CardBody className='au-cardText'>
              <CardTitle className='au-cardTitle'>Our Purpose</CardTitle>
              <CardText>
              To empore the rural 
communities by providing a platform for direct engagement with their local government.
              This system promotes 
transparency, and improve governance that help to bridge the gap between the 
government and its constituents, leading to a more equitable and prosperous rural India. To offer a promising solution 
to the challenges faced by rural communities in India.

              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        {/* Second Column for the second card */}
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <Card className='au-card'>
            <CardBody className='au-cardText'>
              <CardTitle className='au-cardTitle'>Our Services</CardTitle>
              <CardText>
              Enabling citizens to raise concerns, report issues, and track the progress of their requests directly with their local panchayat.
Providing real-time updates on panchayat activities, budgets, and decision-making processes.
By automating administrative tasks and streamlining communication, we ensures service delivery within 7 days to rural communities. 
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container></div> </div>
  );
};

export default AboutUs;