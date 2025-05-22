const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.mcrindia.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'info@mcrindia.com', // Use environment variables
        pass: process.env.EMAIL_PASS || 'Wha@Mc6TGreen',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: '"MCR India" <info@mcrindia.com>',
      to: req.body.to || 'uppalahemanth4@gmail.com', // Allow dynamic recipient
      subject: req.body.subject || 'Test Email from Node.js',
      text: req.body.text || 'This is a test email sent securely via Node.js!',
      html: req.body.html || '<b>This is a test email sent securely via Node.js!</b>',
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});