const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
})

username.addEventListener('input', () => {

    const name = username.value;

    if (name.length < 3) {
        username.setCustomValidity('Username must be at least 3 characters long');
    } else {
        username.setCustomValidity('');
    }

    if (name.includes(' ')) {
        username.setCustomValidity('Username cannot contain spaces');
    } else {
        username.setCustomValidity('');
    }

    if (name.length > 15) {
        username.setCustomValidity('Username cannot exceed 15 characters');
    } else {
        username.setCustomValidity('');
    }
})

email.addEventListener('input', () => {
    const email = email.value;
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!emailPattern.match(email)) {
        email.setCustomValidity('Please enter a valid email address');   
    }
})
