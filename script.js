const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
 
form.addEventListener('submit', (event) => {
    event.preventDefault();

})

username.addEventListener('input', () => {

    const name = username.value;

     if (name.length < 3 || name.length > 15) {
            message.innerHTML = 'Username must contain between 3 and 15 characters';
        } else if (name.length > 15) {
            message.innerHTML = 'Username cannot exceed 15 characters';
        } else if (name.includes(' ')) {
            message.innerHTML = 'Username cannot contain spaces';
        } else {
            message.innerHTML = '';
        }
});

email.addEventListener('input', () => {
    const email = email.value;
    // const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.excludes('@')) {
        message.innerHTML = 'Please enter a valid email address';
    } else if (email.length < 3 || email.length > 15) {
        message.innerHTML = 'Email cannot be less than 3 or more than 15 characters';
    } else if (email.includes(' ')) {
        message.innerHTML = 'Email cannot contain spaces';
    } else {
        message.innerHTML = '';
    }
})
