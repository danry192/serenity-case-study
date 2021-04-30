import React, { Component } from "react";
import "../../styles/Home.css";

class Home extends Component{
    render() {
        return(
            <div className="homeBody">
                <h1>
                    Serenity Home Care
                </h1>
                <p>
                    Serenity Home Care is one of Maryland's finest home care providers. 
                    Located in Fulton, Maryland, Serenity Home Care providers proudly assist patients and companions in all coutnies in Maryland.
                    A list of Maryland Counties can be found <a href="https://msa.maryland.gov/msa/mdmanual/01glance/html/county.html" target="_blank"> here</a>
                    
                </p>
            </div>
        );
    }
}

export default Home;