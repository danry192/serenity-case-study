import React from 'react';
//import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import "../../styles/Services.css";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion, Card, Button } from 'react-bootstrap';



function Services() {
  return (
    <div className="servicesContainer">
      <div className="headerServices">
        <div className="row-services">
          <div className="column-services">
            <h1>Services</h1>
            <p>Our services range from a variety, whether it's companionship care or providing full on support for our patients.</p>
          </div>
        </div>


        
          <div className="ServicesAccordion">
            <div className="double-column">
            <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} className="cardTitle"variant="link" eventKey="0">
              Companionship Care
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="cardBody">Companionship Care is for those who are in need of a companion, rather than a caretaker. Our nurses and caregivers specialize in assisting patients with disabilities, providing them with emotional support, socialization and more.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Home Care
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Medicine Management and Assistance Care
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Hospice Care
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Click me!
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services;


