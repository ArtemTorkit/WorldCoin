const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
const port = 8000;

// Enable CORS for all routes and allow credentials
app.use(
  cors({
    origin: "https://referal-world-app.netlify.app", // Replace this with your frontend URL for production
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type,Authorization,X-Requested-With",
    credentials: true,
  })
);

// Other middleware
app.use(express.json());

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// Your email handler
const sendEmail = async (req, res) => {
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

  try {
    // Send the admin email
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent: " + adminInfo.response);

    // Send the user email
    const userInfo = await transporter.sendMail(userMailOptions);
    console.log("User email sent: " + userInfo.response);

    // Respond with success
    return res
      .status(200)
      .json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).send("Error sending email");
  }
};

// POST /send-email route
app.post("/send-email", sendEmail);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
