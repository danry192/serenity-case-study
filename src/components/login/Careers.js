import React from "react";
import { Route, wtihRouter,Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Row, Col } from 'react-bootstrap';


const Careers = ({ handleLogout }) => {



  return (

        <section className='careers'>
            <nav>

                <Row>
                    <Col xs="3">
                        {/*Position 1*/}
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Registered Nurse - RN</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>

                                    </ul>
                                </Card.Text> 
                                <Link to="/Careers/RN"><Button>Apply Here</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs="auto">
                        {/*Position 2*/}

                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Certified Nursing Assistant - CNA</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>

                                    </ul>
                                </Card.Text>
                                <Link to="/Careers/CNA"><Button variant="primary">Apply Here</Button></Link>

                                
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs="3">

                        {/*Position 2*/}

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Patient Care Assistant - PCA</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>

                                    </ul>
                                </Card.Text> <Link to="/Careers/PCA"><Button variant="primary">Apply Here</Button></Link>
                                
                            </Card.Body>
                        </Card>





                    </Col>

                </Row>


                <button onClick={handleLogout}>Logout</button>
            </nav>

        </section>

    );


};

export default Careers;