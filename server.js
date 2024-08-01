const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/emailDB', { useNewUrlParser: true, useUnifiedTopology: true });

const emailSchema = new mongoose.Schema({
    email: String,
});

const Email = mongoose.model('Email', emailSchema);

app.post('/submit-email', (req, res) => {
    const newEmail = new Email({
        email: req.body.email,
    });

    newEmail.save((err) => {
        if (err) {
            res.status(500).send('Error saving email');
        } else {
            console.log(`Email saved: ${req.body.email}`); // Log email to the console
            res.status(200).json({ message: 'Email saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
