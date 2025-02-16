const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailSender = async (str, data) => {
  try {
    let Osubject, Otext, Ohtml;
    if (str === "forgetPassword") {
      Osubject = "Reset Password";
      Otext = `Reset Password Link: `;
      Ohtml = `<h1>Reset Password Link: <a href="${data.resetUrl}">Click Here</a></h1>`;
    } else if (str == "signup") {
      Osubject = "Welcome to our family";
      Otext = `Welcome to our family`;
      Ohtml = `<h1>Welcome to our family</h1>
        <p>Thank you for joining us</p>
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        `;
    }

    if (process.env.SENDGRID_API_KEY) {
      // Send email using SendGrid
      const msg = {
        to: data.email,
        from: process.env.MAIL_USER, // Change to your verified sender
        subject: Osubject,
        text: Otext,
        html: Ohtml,
      };
      await sgMail.send(msg);
      console.log("Email sent using SendGrid");
    } else {
      // Send email using Nodemailer
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
      let info = await transporter.sendMail({
        from: "your-email@example.com",
        to: data.email,
        subject: Osubject,
        html: Ohtml,
      });
      console.log("Email sent using Nodemailer:", info);
    }
  } catch (error) {
    console.log("Error while sending mail", error);
  }
};

module.exports = mailSender;
