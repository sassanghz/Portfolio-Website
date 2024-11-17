const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the base directory
app.use(express.static(__dirname)); // This serves files from the root of your project

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve index.html for the root
});

// Define a route for the login page
app.get('/resume/login', (req, res) => {
  res.sendFile(__dirname + '/resume/login.html'); // Serve login.html for the /resume/login route
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
