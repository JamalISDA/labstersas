document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful! (Simulation)');
    } else {
        alert('Please fill in both fields.');
    }
});
