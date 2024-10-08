document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    if (username && email && password) {
        // Normally, you would send this data to a server
        // Redirect to welcome.html after a brief delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000); // Redirect after 1 second
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
});
