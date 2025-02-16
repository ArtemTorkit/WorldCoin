const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
const port = 8000;

// CORS configuration
const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://referal-world-app.netlify.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await fn(req, res); // Call the original handler
};

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

// Apply CORS and then your handler
app.post("/send-email", allowCors(sendEmail));

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
