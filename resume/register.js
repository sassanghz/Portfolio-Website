document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Note: Passwords should be hashed and stored securely in real scenarios

    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login.html'; // Redirect to login page
});
