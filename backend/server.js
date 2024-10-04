// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define the POST endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // You can perform validation here if needed

    // Handle the data (e.g., save to a database or send an email)
    console.log('Contact Form Submission:', { name, email, message });

    // Respond with a success message
    res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
