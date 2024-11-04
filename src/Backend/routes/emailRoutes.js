const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

router.post('/send', async (req, res) => {
  const { name, email, subject, feedback } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EM_ORIGIN,
      pass: process.env.EM_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'testeenrolados@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
