const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: ['https://www.opwebdev.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));

// Options for preflight requests
// app.options('/api/contact', cors());

// Nodemailer
const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
    }
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New message from ${name} at ${email}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending message: ', error);
            return res.status(500).send('Error sending message');
        }
        console.log('Message sent:', info.response);
        res.status(200).send('Request submitted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});