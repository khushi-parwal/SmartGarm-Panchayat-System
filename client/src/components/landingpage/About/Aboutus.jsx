import { React, useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { menuItems } from '../../../assests/data/products.js';
import './Aboutus.css';

const Aboutus = () => {

    const [hovered, setHovered] = useState(false);

    const menuEl = useRef(null);
    
    useEffect(() => {
        if (menuEl.current) {
        menuEl.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [menuEl]);

  return (
    <div className='complete-aboutus'>
    <div className='menu-section' >
        <div className='menu-text'>
        <h1>Our Achievements</h1>
            <Card className='au-card'>
            <CardBody className='au-cardText'>
              <CardText>
              <strong><center>In the past Few years Gram Panchayats have taken several beneficiary actions for the citizens that involves:</center></strong><br></br>
            <div className='grid'>
              <div># Improved access to credit and financial services for rural communities.<br></br>
              # Supported rural entrepreneurship and job creation.<br></br>
              # Enhanced rural infrastructure, including roads, bridges, and broadband connectivity.</div>
              <div># Promoted sustainable agriculture practices and improving agricultural productivity.<br></br>
              # Empowered rural women and youth through education, training, and economic opportunities.</div>
              </div>
            </CardText>
            </CardBody>
          </Card>
        </div>
        <Container className='cards1'>
      <Row>
        {menuItems.map((item) => (
        <Col sm="3" className="my-3">
        <Card key={item.id} 
              style={{ backgroundColor: '#141124' }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(false)}
              className={`card ${hovered === item.id ? 'hovered' : ''}`}
            >
            <CardImg className='image-card' top width="100%" height="100%" src={item.image} alt={item.name} />
            <CardBody className='cards'>
                <Row>
                    <Col xs="9">
                        <CardTitle className="text-white font-weight-bold">{item.name}</CardTitle>
                    </Col>
                       
                </Row>
                
            </CardBody>
        </Card>
        </Col>
        ))}
      </Row>
    </Container>
    </div>
    </div>
  );
};

export default Aboutus;