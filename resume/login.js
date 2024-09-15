document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to the resume page
        window.location.href = 'resume.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
