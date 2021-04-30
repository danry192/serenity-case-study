const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { default: Contact } = require('./Contact');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        /*user: 'serenityhomecare9@gmail.com',
        pass: 'Serenity192!'*/
    }
});

//connection configuration verification

transporter.verify(function(error, success){
    if (error){
        console.log(error);
    } else {
        console.log("Server is connected")
    }
});

app.post('/send', (req, res, next) => {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      from: firstName,
      to: 'serenityhomecare9@gmail.com',
      subject: subject,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })
  