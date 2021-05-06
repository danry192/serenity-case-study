import React, { Component } from "react";
import "../../styles/Home.css";

class Home extends Component{
    render() {
        return(
            <div className="homeBody">
                <div className="section1">
                    <h1>Serenity Home Care</h1>
                    <p> Serenity Home Care is one of Maryland's finest home care providers. 
                    Located in Fulton, Maryland, Serenity Home Care providers proudly assist patients and companions in all coutnies in Maryland.
                    A list of Maryland Counties can be found <a href="https://msa.maryland.gov/msa/mdmanual/01glance/html/county.html" target="_blank" rel="noreferrer"> here</a></p>
                </div>

                <br></br>

                <div className="section2">
                    <h2>Why You Should Choose Us</h2>
                     <p> We take pride in our employees work ethics and our patients cooperation. </p>
                </div>

                <div className="section3">
                    <h3>Resources and Quick Links</h3>

                    <p>The quick links below will redirect you to additional information about HIPPA and the Maryland Department of Health.</p>

                    <ul className="Links">
                            <li><a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noreferrer">HIPPA</a></li>
                            <li><a href="https://health.maryland.gov/ohcq/Pages/Consumer_Information.aspx" target="_blank" rel="noreferrer" >Maryland Department of Health</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;

//STYLED COMPONENTS

