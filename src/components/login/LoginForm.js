import React from 'react';
import "../../styles/Login.css";


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
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up here</span></p>
                        </>

                        //setHasAccount toggles the Sign in/Sign up buttons

                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log In here</span></p>
                        </>

                    )}
                </div>

                <br/>
                <br/>

                

            

            
            
            
            
            
            
            
            
        
            </div>


        </section>
    );
};

export default LoginForm;
