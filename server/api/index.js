const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin: "https://referal-world-app.netlify.app/" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { fullName, email, phoneNumber } = req.body;

  const adminHtml = `
    <strong>Client info:</strong>
    <br>Name: ${fullName}</br>
    <br>Email: ${email}</br>
    <br>Phonenumber: ${phoneNumber}</br>
  `;

  const userHtml = `
  <p>Dear ${fullName},</p>
  
  <p>I hope you're doing well! I would like to invite you to install <strong>World App</strong>.</p>

  <p>🔗 <strong>Download here:</strong> <a href="https://world.org/join/850S7RK" target="_blank">https://world.org/join/850S7RK</a></p>

  <p>🎟 <strong>Referral Code:</strong> <b>850S7RK</b></p>

  <p>By using this referral code in the app and verifying yourself, you will receive approximately <strong>$50 USD</strong>.</p>

  <p>If you have any questions, feel free to reach out!</p>

  <p>Best regards,</p>
  <p><strong>World Coin Referals</strong></p>
`;

  const adminMailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "World Coin Referals",
    html: adminHtml,
  };

  const userMailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Referal Link 50USD",
    html: userHtml,
  };

  transporter.sendMail(adminMailOptions, function (error, info) {
    if (error) {
      console.log("Admin email error:", error);
      return res.status(500).send("Error sending email to admin");
    }
    console.log("Admin email sent: " + info.response);

    transporter.sendMail(userMailOptions, function (error, info) {
      if (error) {
        console.log("User email error:", error);
        return res.status(500).send("Error sending email to user");
      }
      console.log("User email sent: " + info.response);
      res
        .status(200)
        .json({ success: true, message: "Emails sent successfully" });
    });
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
