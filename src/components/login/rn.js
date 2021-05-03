import axios from 'axios';
import React, { Component } from 'react'
import "../../components/contact/Contact.css";


class RN extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value })
    }

    onLastNameChange(event) {
        this.setState({ lastName: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    submitForm(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message was sent!");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message was not sent.")
            }
        })
    }

    resetForm() {
        this.setState({ firstName: '', lastName: '', email: '', subject: '', message: '', })
    }

    render() {

        return (

            <div className="section-title">
                <h2 className="title">Registered Nurse Application</h2>
                <p>Let us know what you think! In order to provide better service,
                                 please do not hesitate to give us your feedback. Thank you.</p><hr />
                <div className="formContainer">
                    <form onSubmit={this.submitForm.bind(this)}
                        method="POST">

                        <div className="formItem">
                            <label>First Name</label>
                            <input placeholder="First Name"
                                id="firstName"
                                type="text"
                                className="firstName"
                                required
                                value={this.state.firstName}
                                onChange={this.onFirstNameChange.bind(this)} />
                        </div>

                        <div className="formItem">
                            <label>Last Name</label>
                            <input placeholder="Last Name"
                                id="lastName"
                                type="text"
                                className="lastName"
                                required value={this.state.lastName}
                                onChange={this.onLastNameChange.bind(this)} />
                        </div>

                        <div className="formItem">
                            <label>Email</label>
                            <input placeholder="Email"
                                id="email"
                                type="email"
                                className="email"
                                aria-describedby="emailHelp"
                                required
                                value={this.state.email}
                                onChange={this.onEmailChange.bind(this)} />
                        </div>


                        <div className="form-group">
                            <label>Subject</label>
                            <input placeholder="Subject"
                                id="subject" type="text"
                                className="subject"
                                required value={this.state.subject}
                                onChange={this.onSubjectChange.bind(this)} />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Message"
                                id="message"
                                className="message"
                                rows="5" col="6"
                                required value={this.state.message}
                                onChange={this.onMessageChange.bind(this)} />
                        </div>
                       
                        <div className="formButton">
                            <button type="submit">Submit</button>
                        </div>
                        
                    </form>
                </div >
            </div >



        );
    }

}
export default RN;