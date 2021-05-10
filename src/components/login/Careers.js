import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Careers.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Row, Col } from 'react-bootstrap';


const Careers = ({ handleLogout }) => {



    return (

        <div className="careers">
            <div className="careers-container">
                <Row>
                    <Col xs="4">
                        {/*Position 1*/}
                        <Card className="cardHeight">

                            <Card.Body>
                                <Card.Title>Registered Nurse - RN</Card.Title>
                                <Card.Text>
                                    <ul className="careers-list">
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Treats patients with chronic illnesses, special needs, and etc.</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Must be able to fax or electronically submit documents</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>
                                        <li>Must have proper nursing license</li>
                                        <li>Needs to be able to be "on-call" during certain situations</li>
                                        <li>Minimum 2 years of experience or additional education</li>  
                                        <li>U.S Citizenship required</li>
                                        <li>Must be 18 years or older</li> 
                                        <li>Part and Full Time Positions Available</li>
                                        <br/>

                                    </ul>


                        
                                </Card.Text>
                                <Link to="/Career/RN"><Button>Apply Here</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs="4">
                        {/*Position 2*/}

                        <Card className="cardHeight">

                            <Card.Body>
                                <Card.Title>Certified Nursing Assistant - CNA</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Treats patients with chronic illnesses, special needs, and etc.</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Must be able to fax or electronically submit documents</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>
                                        <li>Needs to be able to be "on-call" during certain situations</li>
                                        <li>Must have proper nursing license</li>
                                        <li>Minimum 2 years of experience or additional education</li>  
                                        <li>U.S Citizenship required</li>
                                        <li>Must be 18 years or older</li> 
                                        <li>Part and Full Time Positions Available</li>
                                                                       

                                    </ul>
                                </Card.Text>
                                <Link to="/Career/CNA"><Button variant="primary">Apply Here</Button></Link>


                            </Card.Body>
                        </Card >
                    </Col>

                    <Col xs="4">

                        {/*Position 3*/}

                        <Card className="cardHeight">
                            <Card.Body>
                                <Card.Title>Personal Care Assistant - PCA</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Assists patients with daily tasks and activities</li>
                                        <li>Treats patients with chronic illnesses, special needs, and etc.</li>
                                        <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                                        <li>Must be able to fax or electronically submit documents</li>
                                        <li>Assists patients with cleaning and other patient care tasks</li>
                                        <li>Has proper CPR certifications and can perform CPR on patients if needed</li>
                                        <li>U.S Citizenship required</li>
                                        <li>Must be 18 years or older</li> 
                                        <li>Part and Full Time Positions Available</li>

                                    </ul>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Card.Text> <Link to="/Career/PCA"><Button variant="primary">Apply Here</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <br />
                <br />
                <div className="form-button-careers"><button onClick={handleLogout}>Logout</button>
</div>

            </div>


            <br />
            <br />
        </div>

    );


};

export default Careers;