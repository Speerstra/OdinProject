let password = document.getElementById('password');    
let passwordMessage = document.getElementById('password-message');
let confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener('onchange', validate_password());

function validate_password() {
        if (password.value != confirmPassword.value) {    
                passwordMessage.innerHTML = 'Passwords do not match!';
                confirmPassword.focus(); 
                return false;
        } else {
                passwordMessage.innerHTML = ''; 
        }
}
