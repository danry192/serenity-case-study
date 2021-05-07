import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

import "../../styles/Contact.css";

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'contact-form', e.target, 'user_hRcPJC7dXJdiqzXhshaok')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });e.target.reset();
    }

    
  
    return (
        
        <div className="section">
                <div className="section1-contact"><h2>Contact Us</h2>
                <p>Contact us here with any questions! If you have any inquiries or requests about services, fill out the <Link to="/Requests">Requests Form</Link></p><hr />
                </div>
                <br/>
                <div className="form-container-contact">
                    <form onSubmit={sendEmail}
                        method="POST">
                        <div className="formItem">
                            <label>First Name</label>
                            <input placeholder="First Name"
                                name="firstName"
                                type="text"
                                className="firstName"
                                required
                                 />
                        </div>
                        <div className="formItem">
                            <label>Last Name</label>
                            <input placeholder="Last Name"
                                name="lastName"
                                type="text"
                                className="lastName"
                                required
                                />
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input placeholder="Email"
                                name="email"
                                type="email"
                                className="email"
                                aria-describedby="emailHelp"
                                required
                                />
                        </div>


                        <div className="form-group">
                            <label>Subject</label>
                            <input placeholder="Subject"
                                name="subject" type="text"
                                className="subject"
                                 />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Message"
                                name="message"
                                className="message"
                                rows="5" col="6"
                                required 
                                />
                        </div>
                       
                        <div className="form-button-contact">
                            <button type="submit">Submit</button>
                        </div>
                        
                    </form>
                
                </div >
                <br></br>
                <br></br>
            </div >



        );
    }

