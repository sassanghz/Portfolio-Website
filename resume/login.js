// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve user input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = './resume.html'; // Redirect to the resume page
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
