import React, { useState, useEffect } from "react";
import fire from '../../backend/fire';
import LoginForm from './LoginForm';
//import Careers from "./Careers";

const Login = () => {

    const[user, setUser] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword]= useState('');
    const[emailError, setEmailError] = useState('');
    const[passwordError, setPasswordError] = useState('');

    //Will help switch from sign in to sign up
    const[hasAccount, setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail('');
        setPassword('');

    }

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
    }

    //Login Function
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    //Sign up Function

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                      setEmailError(err.message);
                      break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    //Logout Function - single line function

    const handleLogout = () => {
        fire.auth().signOut();
    };

    //Listener to check if user exists

    const authListener = () =>{
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();


    }, []);

    return(


        <div className="App">
            <h3>We are always looking for eager applicants to join our team!</h3>
            <br></br>
            <h4>To Apply, create an account or log in below</h4>


            {/*if user exists, take to careers page*/}

            {user ? (
                <LoginForm handleLogout={handleLogout}/>

            ) : (

                <LoginForm 
                email={email} 
                setEmail={setEmail} 
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                />
                
            )}
                
        </div>
    );
};

export default Login;