import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Careers.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Row, Col } from 'react-bootstrap';


const Careers = ({ handleLogout }) => {



    return (

        <div className="careers">
            <div className="careers-container">

                <div class="row">
                    <div className="column"></div>

                    <div className="column"></div>
                    
                    <div className="column"></div>
                </div>
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
                                <Link to="/Career/RN"><Button>Apply Here</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs="3">
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
                                <Link to="/Career/CNA"><Button variant="primary">Apply Here</Button></Link>


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
                                </Card.Text> <Link to="/Career/PCA"><Button variant="primary">Apply Here</Button></Link>

                            </Card.Body>
                        </Card>





                    </Col>

                </Row>

                <br />
                <br />


            </div>

            <Careers><button onClick={handleLogout}>Logout</button></Careers>
            <br />
            <br />
        </div>

    );


};

export default Careers;