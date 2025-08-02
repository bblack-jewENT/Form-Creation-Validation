document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameMessage = document.getElementById('messages-username');
    const emailMessage = document.getElementById('messages-email');
    const passwordMessage = document.getElementById('messages-password');

    // Helper to clear all messages
    function clearMessages() {
        usernameMessage.textContent = '';
        emailMessage.textContent = '';
        passwordMessage.textContent = '';
        feedbackDiv.textContent = '';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearMessages();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Username validation
        if (username.length < 3) {
            isValid = false;
            usernameMessage.textContent = 'Username must be at least 3 characters long.';
            usernameMessage.style.color = '#d8000c';
        }

        // Email validation
        if (!(email.includes('@') && email.includes('.'))) {
            isValid = false;
            emailMessage.textContent = 'Email must include "@" and "." characters.';
            emailMessage.style.color = '#d8000c';
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            passwordMessage.textContent = 'Password must be at least 8 characters long.';
            passwordMessage.style.color = '#d8000c';
        }

        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.className = 'success';
        } else {
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'error';
        }
    });
});
