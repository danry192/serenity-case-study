import React, { Component } from "react";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Requests from "./components/requests/Requests";
import Login from "./components/login/Login";
import RN from "./components/login/rn";
import CNA from "./components/login/cna";
import PCA from "./components/login/pca";
import Careers from "./components/login/Careers";
import logo from "./logo_new.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

//import Footer from "./components/footer/Footer";

//import { Components } from "antd/lib/date-picker/generatePicker";


class App extends Component {
    render(){
        return (
            <HashRouter>          
              <NavbarContainer>{/*<h1>Serenity Home Care</h1>*/}
                <ul className="navHeader">
                    <li>
                    <img src={logo} alt="..." /></li>
                    <li className="navLink"><NavLink to="/Login">Login</NavLink></li>
                    <li className="navLink"><NavLink to="/Requests">Requests</NavLink></li>
                    <li className="navLink"><NavLink to="/Contact">Contact</NavLink></li>
                    <li className="navLink"><NavLink to="/Services">Services</NavLink></li>
                    <li className="navLink"><NavLink to="/">Home</NavLink></li>
                    


                </ul>

                <div className="content">
                    <Route exact path ="/" component={Home}/>
                    <Route path ="/Services" component={Services}/>
                    <Route path = "/Contact" component={Contact}/>
                    <Route path = "/Requests" component={Requests}/>
                    <Route path = "/Login" component={Login}/>
                    <Route path = "/Careers" component={Careers}/>
                    <Route path="/Career/RN" component={RN}></Route>
                    <Route path="/Career/PCA" component={PCA}></Route>
                    <Route path="/Career/CNA" component={CNA}></Route>
                </div>
                </NavbarContainer>
                
            
            
                <FooterContainer>
     
     <div className="row pt-5">
         {/*Column 1*/}
         <div className="col-sm-3 col-xs-12 d-flex">
             <ul className="list-inline mx-auto justify-content-center">
                 <Link to="/">
                     <li>Home</li>
                 </Link>

                 <Link to="/Services">
                     <li>Services</li>
                 </Link>

                 <Link to="/Contact">
                     <li>Contact</li>
                 </Link>

                 

                 
             </ul>
             <ul className="list-inline mx-auto justify-content-center">
             <Link to="/Requests">
                     <li>Requests</li>
                 </Link>

                 <Link to="/Login">
                     <li>Login</li>
                 </Link>

             </ul>
             
         </div>

         <p className="pt-3 pb-2 pl-5 copy-right">
             &copy;&nbsp; Daniella Rakhamimov &nbsp;
             {`${new Date().getFullYear()}`}
             &nbsp; All Rights Reserved
         </p>
         

     </div>



 </FooterContainer>
            </HashRouter>
            
        );
    };
};

export default App;

//STYLED COMPONENTS 

const NavbarContainer = styled.div`
img{
    width: 8.5rem;
}
background: #F4F4F6;

`;
const FooterContainer = styled.div`
    background: var(--ivory);

    ul li{
        list-style: none;
        color:var(--slate);
        font-weight: bold;
    }


    a {
        color: var(--ivory);
        text-decoration: none;
        &:hover{
            color: var(--taupe);
        }
    }

    .copy-right{
        color: var(--slate);
        font-weight:bold;

    }
`;