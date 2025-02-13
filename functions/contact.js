// filepath: /functions/contact.js
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New message from ${name} at ${email}`,
    text: message,
  };

  try {
    await sendgrid.send(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Request submitted successfully' }),
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending message' }),
    };
  }
};