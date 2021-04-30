import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
//import Careers from "./components/login/Careers";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";

import { Components } from "antd/lib/date-picker/generatePicker";

class App extends Component {
    render(){
        return (
            <HashRouter>          
              <div>
                {/*<h1>Serenity Home Care</h1>*/}
              

                <ul className="header">
                    <li><NavLink to="/components/home/Home">Home</NavLink></li>
                    <li><NavLink to="/components/services/Services">Services</NavLink></li>
                    <li><NavLink to="/components/contact/Contact">Contact</NavLink></li>
                    {/*<li><NavLink to="/components/login/careers">Careers</NavLink></li>*/}
                    <li><NavLink to="/components/login/LoginForm">Login</NavLink></li>


                </ul>

                <div className="content">
                    <Route exact path ="/components/home/Home" component={Home}/>
                    <Route path ="/components/services/Services" component={Services}/>
                    <Route path = "/components/contact/Contact" component={Contact}/>
                    {/*<Route path = "/components/login/careers" component={Careers}/>*/}
                    <Route path = "/components/login/LoginForm" component={Login}/>

                    <Footer />

                </div>
                


            </div>
        </HashRouter>
        );
    };
};

export default App;