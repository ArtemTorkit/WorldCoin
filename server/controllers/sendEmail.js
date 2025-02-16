// SendGrid API
const sgMail = require('@sendgrid/mail');
const { StatusCodes } = require("http-status-codes")

const sendEmail = async(req, res) =>  {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const {fullname, email, url, phoneNumber} = req.body;
    //check whether one of the credentials is missing
    if(!fullname || !email || !phoneNumber) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg: "Full name, email, and phone number are required!"})
    }

    const userMsg = {
        to: email,
        from: process.env.FROM_EMAIL, // Verified sender email in SendGrid
        subject: 'Welcome to Our Platform!',
        text: `Hello ${fullname},\nI am inviting you to install World App.\nHere is the link:${url}\n\nBest Regards,\nYour WorldCoin Service`
    };

    const adminMsg = {
        to: process.env.ADMIN_EMAIL,  // Your admin email (set in .env)
        from: process.env.FROM_EMAIL, 
        subject: 'New User Submission',
        text: `New user signed up:\n\n- Name: ${fullname}\n- Phone: ${phoneNumber}\n- Email: ${email}\n\nCheck your dashboard for more details.`
    };

    const errorMsg = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: '⚠️ Email Sending Failed!',
        text: `An email failed to send.\n\nUser Details:\n- Name: ${fullname}\n- Phone: ${phoneNumber}\n- Email: ${email}\n\nError Details:\n${error.message}`
    };
  

    // fix bugs here

    sgMail.send(userMsg)
    .then(() => {
      
        return sgMail.send(adminMsg);
    })
    .then(() => {
        res.json({ message: `Email was sent to ${email}, with a phone number: ${phoneNumber} and name: ${fullname}` });
    })
    .catch((error) => {
        console.error("SendGrid error:", error);
        sgMail.send(errorMsg)
        .finally(() => {
            res.status(500).json({ error: "Failed to send email, but admin has been notified." });
        });

    
});
};

module.exports = { sendEmail }; 

