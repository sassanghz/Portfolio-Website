document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        // send POST REQUEST to backennd for login
        const response = await fetch('/resume/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();

        if(response.ok){
            //successful login
            sessionStorage.setItem('authenticated', 'true');

            window.location.ref = 'resume.html';
        }else{
            alert(data.error || 'Invalid credentials. Please try again!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occured. Please try again later!');
    }
});
