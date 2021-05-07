import React from 'react';

//bootstrap import
import { Accordion, Card, Button } from 'react-bootstrap';

//css import
import "../../styles/Services.css";
import "bootstrap/dist/css/bootstrap.css";

import medicine_managemet from "../../medicine_management.jpg";

function Services() {
  return (
    <div className="servicesContainer">
      <div className="headerServices">
        <div className="row-services">
          <div className="column-services">
            <div className="section1-services"><h2>Services</h2>
            <p>We offer a variety of services, and we can tailor them to best suit you and/or your loved ones.</p>
            </div>
            <img id="medicine_image" src={medicine_managemet} alt="medicine management" />
          </div>
        </div>

        <div className="ServicesAccordion">
          <div className="column-services">
            <Accordion defaultActiveKey="0">

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} className="cardTitle" variant="link" eventKey="0">
                    <p className="accordion-label"> Companionship Care </p>
                  </Accordion.Toggle>


                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="cardBody">Companionship Care is for those who are in need of a companion, rather than a caretaker. Our nurses and caregivers specialize in assisting patients with disabilities, providing them with emotional support, socialization and more.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <p className="accordion-label">Home Care </p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Home Care is for those who are suffering from illnesses and need more hands on assistance and care. Our nurses will be available to assist the patient with any medical need whether it's a chronic illness, injury, or disability.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <p className="accordion-label">Medicine Management and Assistance Care</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Medicine Management and Assistance Care is for those who need extra assistance staying on top of their medicine and other appointments and inquiries. On top of that, our nurses and caregivers will take the extra steps of making sure the patient is well-taken care of and aware.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <p className="accordion-label">Hospice Care</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Hospice Care is for those are in need of social, emotional support. Amongst that, the hospice nurses are responsible for making regular visits to the paitent and are always on call.</Card.Body>
                </Accordion.Collapse>
              </Card>


              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    <p className="accordion-label">Live In Care</p>

                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>Live In Care is for those who need the 24/7 assistance. Our nurses and caregivers dedicate themselves to staying with the patient as much as they can, or live with them to be by the patients side at all times. This servie includes home care, medicine management care, and etc.</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    <p className="accordion-label">Private Home Care </p>

                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>Private Home Care is for those who specifically request it. It is similar to the Home Care Service (second drop down tab).</Card.Body>
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


