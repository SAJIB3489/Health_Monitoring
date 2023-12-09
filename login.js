function login(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Your login logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Check if the username and password match
    if (username === 'savonia' && password === '123456') {
        // Redirect to the main page after successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
