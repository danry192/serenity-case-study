import React from 'react';
import "../../styles/Login.css";
import { Link } from "react-router-dom";


const LoginForm=(props) =>{

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;


    return(

        <section className = "login">
            <div className="loginContainer">
             
             <form>
             <label>Username</label>
                <input 
                    type="text"
                    autoFocus
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p className="errorMessage">{emailError}</p>

                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <p className="errorMessage">{passwordError}</p>
                
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <Link to="/Careers"><button onClick={handleLogin}>Sign In</button></Link>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up here</span></p>
                        </>

                        //setHasAccount toggles the Sign in/Sign up buttons

                    ) : (
                        <>
                        <Link to="/Careers"><button onClick={handleSignup}>Sign Up</button></Link>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log In here</span></p>
                        </>

                    )}
                </div>
                </form>
            </div>

            
        </section>
    );
};

export default LoginForm;
