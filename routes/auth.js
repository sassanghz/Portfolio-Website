const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // User model 
const router = express.Router();

// POST route for user login
router.post('/resume/login.html', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        // Compare password with hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        // If login successful, send a success message
        return res.json({ message: 'Login successful.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
