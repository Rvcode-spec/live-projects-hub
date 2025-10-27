const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
  port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.TO_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
    rejectUnauthorized: false   
  }

});

const sendEmail = ({name, email , subject, message}) => {
   const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      to: process.env.TO_EMAIL,                     
      subject: `New message from ${name}: ${subject}`,                       
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        }

        else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

module.exports = {sendEmail};