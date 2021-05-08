import React, { Component } from "react";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";

//import pages
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Requests from "./components/requests/Requests";
import Login from "./components/login/Login";
import RN from "./components/login/rn";
import CNA from "./components/login/cna";
import PCA from "./components/login/pca";
import Careers from "./components/login/Careers";

//images and CSS
import logo from "./logo_new.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";



class App extends Component {



    render() {
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
                        <Route exact path="/" component={Home} />
                        <Route path="/Services" component={Services} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Requests" component={Requests} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Careers" component={Careers} />
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

                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/Contact"><li>Contact Information</li></Link>
                            <li>410-410-4105</li>
                            <li><a href="serenityhomecare9@gmail.com">serenityhomecare9@gmail.com</a></li>
                        </ul>


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
    width: 10.5rem;
    padding:20px;
    margin-left:10px;
}
background: #F4F4F6;

ul li{
        
        text-decoration: none;
        &:hover{
            color: #9F9C93;
        }
    }

`;
const FooterContainer = styled.div`
    background: #54627B;
ul{
    font-size:15px;


}
    ul li{
        list-style: none;
        color: #F4F4F6;
        font-weight: bold;
        font-family: 'Libre Bakersville';
        text-decoration: none;
        &:hover{
            color: #9F9C93;
        }
    }

    .copy-right{
        color: #F4F4F6;
        font-weight:bold;

    }


p{
    font-size:15px;
}`;