import React, { Component } from "react";
//import { Link } from "react-router-dom";

import "../../styles/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import home_care from "../../home_care.jpg";
import rn from "../../rn.jpg";
import serenity_rn from "../../serenity_rn.jpg";

class Home extends Component {
    render() {
        return (

            <div className="homeBody">
                <br/>
                <h1>Serenity Home Care</h1><br/>

                <div className="row"> 

                    <div className="double-column">
                        <div className="section1">

                            <h2>About Us</h2>
                            <p> <span> Serenity Home Care is one of Maryland's finest home care providers located in Fulton, Maryland. We proudly assist patients and
                               hire employers all over the state of Maryland.
                             </span></p>

                            <ol className="list">The largest counties and most popular ones we are located in are the following:
                                <li>Anne Arundel County</li>
                                <li>Baltimore County</li>
                                <li>Baltimore City</li>
                                <li>Howard County</li>
                                <li>To view the rest of the counties, click<a href="https://msa.maryland.gov/msa/mdmanual/01glance/html/county.html" target="_blank" rel="noreferrer"> here</a></li>
                            </ol>
                        
                        
                        </div>
                    </div>




                    <div className="column">
                        <img src={home_care} alt="home care" id="myImage"/>
                    </div>
                </div>




                <div className="row">

                    <div className="double-column">
                        <div className="section2">
                            <h3>Why You Should Choose Us</h3>
                            <p><span>Here at Serenity Home Care we take pride in helping our patients and employees find their perfect match.
                                With all of the services that we offer, we try to please everyone that we can.</span> </p>

                                <p><span>All of our personal care givers, certified nursing assitants, and registered nurses are CPR certified and hold an active nursing license. They are all more than prepared and fit to help assist you or your loved ones.</span></p>
                        </div>
                    </div>

                    <div className="column">
                        <img src={rn} alt="a registered nurse taking a patients blood pressure" id="myImage"/>
                    </div>

                </div>


                <div className="row">

                    <div className="double-column">
                        <div className="section3">
                            <h3>Resources and Quick Links</h3>

                            <ul className="Links">
                                <li><a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noreferrer">HIPPA</a></li>
                                <li><a href="https://health.maryland.gov/ohcq/Pages/Consumer_Information.aspx" target="_blank" rel="noreferrer" >Maryland Department of Health</a></li>
                                <li><a href="https://mbon.maryland.gov/Pages/default.aspx" target="_blank" rel="noreferrer" >Maryland Board of Nursing (For Licenses and Certifications)</a></li>
                                <li><a href="https://coronavirus.maryland.gov/" target="_blank" rel="noreferrer" >Maryland COVID-19 Resources</a></li>
                            
                            
                            </ul>
                </div>

                    </div>



                    <div className="column">
                        <img src={serenity_rn} alt="RN's wearing PCE" id="myImage"/>
                    </div>
                
                </div>
                


            <br/>
            </div>

        );
    }
}

export default Home;
