import React from 'react';
import "../../styles/CareersApp.css";
import emailjs from 'emailjs-com';

export default function CNA() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'job-app', e.target, 'user_hRcPJC7dXJdiqzXhshaok')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }); e.target.reset();
    }


    return (
        <div className="section-title">

            <div className="section1">
                <h2 className="title">Certified Nursing Assistant (CNA) Application</h2>

                <p>Be sure to fill out all of the fields below</p><hr />
            </div>

            <div className="job-description">
                <h3>Job Description</h3>
                <ul>
                    <li>Assists patients with daily tasks and activities</li>
                    <li>Treats patients with chronic illnesses, special needs, and etc.</li>
                    <li>Cleans equipments and keeps supplies and additional equipment in stock</li>
                    <li>Must be able to fax or electronically submit documents</li>
                    <li>Assists patients with cleaning and other patient care tasks</li>
                    <li>Has proper CPR certifications and can perform CPR on patients if needed</li>
                    <li>Needs to be able to be "on-call" during certain situations</li>
                    <li>Must have proper nursing license</li>
                    <li>Minimum 2 years of experience or additional education</li>
                    <li>U.S Citizenship required</li>
                    <li>Must be 18 years or older</li>
                    <li>Part and Full Time Positions Available</li>


                </ul>
            </div>


            <div className="form-container-careers">

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

                    <div className="formItem">
                        <label>Phone Number</label>
                        <input placeholder="Phone Number"
                            name="phone"
                            type="tel"
                            className="phone"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label>Date of Birth</label>
                        <input placeholder="--/--/----"
                            name="birthday"
                            type="text"
                            className="birthday"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label>Address</label>
                        <input placeholder="Address"
                            name="address_one"
                            type="text"
                            className="address_one"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label>Address 2
              </label>
                        <input placeholder="Apartment, studio, or floor"
                            name="address_two"
                            type="text"
                            className="address_two"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label>City</label>
                        <input placeholder="City"
                            name="city"
                            type="text"
                            className="city"
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label>Choose a service:</label>
                        <select name="state">
                            <option>AL</option>
                            <option>AK</option>
                            <option>AZ</option>
                            <option>AR</option>
                            <option>CA</option>
                            <option>CO</option>
                            <option>CT</option>
                            <option>DE</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>HI</option>
                            <option>ID</option>
                            <option>IL</option>
                            <option>IN</option>
                            <option>IA</option>
                            <option>KS</option>
                            <option>KY</option>
                            <option>LA</option>
                            <option>ME</option>
                            <option>MD</option>
                            <option>MA</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MS</option>
                            <option>MO</option>
                            <option>MT</option>
                            <option>NE</option>
                            <option>NV</option>
                            <option>NH</option>
                            <option>NJ</option>
                            <option>NM</option>
                            <option>NY</option>
                            <option>NC</option>
                            <option>ND</option>
                            <option>OH</option>
                            <option>OK</option>
                            <option>OR</option>
                            <option>PA</option>
                            <option>RI</option>
                            <option>SC</option>
                            <option>SD</option>
                            <option>TN</option>
                            <option>TX</option>
                            <option>UT</option>
                            <option>VT</option>
                            <option>VA</option>
                            <option>WA</option>
                            <option>WV</option>
                            <option>WI</option>
                            <option>WY</option>
                        </select>

                    </div>
                    <div className="formItem">
                        <label>Zip Code</label>
                        <input placeholder="Zip Code"
                            name="zip"
                            type="text"
                            className="zip"
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label>Work History 1</label>
                        <textarea placeholder="Copy and paste work history 1"
                            name="work_one"
                            className="message"
                            rows="6" col="10"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Work History 2</label>
                        <textarea placeholder="Copy and paste work history 2"
                            name="work_two"
                            className="message"
                            rows="6" col="10"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Work History 3</label>
                        <textarea placeholder="Copy and paste work history 3"
                            name="work_three"
                            className="message"
                            rows="6" col="10"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Are you CPR Certified? (Mandatory)</label>
                        <select name="cpr">
                            <option>Yes</option>
                            <option>No</option>
                            <option>In progress</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Do you have a nursing certification? (Mandatory)</label>
                        <select name="nursingCert">
                            <option>Yes</option>
                            <option>No</option>
                            <option>In progress</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Are you authorized to work in the United States?</label>
                        <select name="authorized">
                            <option>Yes: Citizen, permanent resident, green card holder, etc.</option>
                            <option>No (Need Visa or Sponsorship)</option>
                        </select>
                    </div>



                    <div className="form-button-job">
                        <button classname="submit-button" type="submit">Submit</button>
                    </div>

                </form>
            </div >
        </div >



    );
}





