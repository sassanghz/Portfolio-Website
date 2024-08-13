const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the email
const emailSchema = new mongoose.Schema({
    email: String
});

// Define a model based on the schema
const Email = mongoose.model('Email', emailSchema);

// Middleware
app.use(bodyParser.json());

// Serve static files (e.g., your HTML file)
app.use(express.static('public'));

// Endpoint to handle email submission
app.post('/submit-email', (req, res) => {
    const newEmail = new Email({ email: req.body.email });

    newEmail.save((err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to save email' });
        } else {
            res.status(200).json({ message: 'Email saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
