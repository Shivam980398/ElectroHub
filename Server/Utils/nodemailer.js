// const nodemailer = require("nodemailer");
// const Brevo = require("@getbrevo/brevo"); // Ensure Brevo is correctly imported

// // Initialize Brevo API client with a different approach
// const defaultClient = new Brevo.BrevoClient({ apiKey: process.env.Brevo_Api });

// const mailSender = async (str, data) => {
//   try {
//     let Osubject, Otext, Ohtml;
//     if (str === "forgetPassword") {
//       Osubject = "Reset Password";
//       Otext = `Reset Password Link: `;
//       Ohtml = `<h1>Reset Password Link: <a href="${data.resetUrl}">Click Here</a></h1>`;
//     } else if (str == "signup") {
//       Osubject = "Welcome to our family";
//       Otext = `Welcome to our family`;
//       Ohtml = `<h1>Welcome to our family</h1>
//         <p>Thank you for joining us</p>
//         Name: ${data.firstName} ${data.lastName}
//         Email: ${data.email}
//         `;
//     }

//     // Commented out the SendGrid code
//     /*
//     const sgMail = require("@sendgrid/mail");
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//     if (process.env.SENDGRID_API_KEY) {
//       // Send email using SendGrid
//       const msg = {
//         to: data.email,
//         from: process.env.MAIL_USER, // Change to your verified sender
//         subject: Osubject,
//         text: Otext,
//         html: Ohtml,
//       };
//       await sgMail.send(msg);
//       console.log("Email sent using SendGrid");
//     } else {
//     */

//     // Send email using Nodemailer
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });
//     let info = await transporter.sendMail({
//       from: "your-email@example.com",
//       to: data.email,
//       subject: Osubject,
//       html: Ohtml,
//     });
//     console.log("Email sent using Nodemailer:", info);

//     // Optionally use Brevo to send an email
//     const sendSmtpEmail = {
//       sender: { email: "brevo@brevo.com", name: "Brevo" },
//       subject: Osubject,
//       htmlContent: Ohtml,
//       messageVersions: [
//         {
//           to: [{ email: data.email }],
//         },
//       ],
//     };

//     if (process.env.BREVO_API_KEY) {
//       await defaultClient.sendTransacEmail(sendSmtpEmail);
//       console.log("Email sent using Brevo");
//     }
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (str, data) => {
  try {
    let Osubject, Ohtml;

    if (str === "forgetPassword") {
      Osubject = "Reset Password";
      Ohtml = `<h1>Reset Password Link: <a href="${data.resetUrl}">Click Here</a></h1>`;
    } else if (str === "signup") {
      Osubject = "Welcome to our family";
      Ohtml = `<h1>Welcome to our family</h1>
        <p>Thank you for joining us</p>
        <p>Name: ${data.firstName} ${data.lastName}</p>
        <p>Email: ${data.email}</p>`;
    } else {
      throw new Error("Invalid email type");
    }

    // Create Nodemailer Transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: data.email,
      subject: Osubject,
      html: Ohtml,
    });

    console.log(" Email sent successfully:", info.messageId);
    return { success: true, info };
  } catch (error) {
    console.error(" Error sending email:", error.message);
    return { success: false, error: error.message };
  }
};

module.exports = mailSender;
