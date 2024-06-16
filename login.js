

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password
    };

    fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.email) {
            localStorage.setItem('user', JSON.stringify(data));
            
            window.location.href = JSON.parse(localStorage.getItem('windowside'));
           
        } else {
            document.getElementById('response').textContent = 'Login failed: ' + (data.message || 'Unknown error');
        }
    })
    .catch((error) => {
        document.getElementById('response').textContent = 'Error: ' + error.message;
    });
});
