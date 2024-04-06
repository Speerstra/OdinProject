// let createButton = document.getElementById('create');

// createButton.addEventListener('click', validate_password)

function validate_password() {
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');
        let passwordMessage = document.getElementById('password-message');

        if (password.value != confirmPassword.value) {    
                passwordMessage.innerHTML = 'Passwords do not match!';
                confirmPassword.focus(); 
                return false;
        } else {
                passwordMessage.innerHTML = ''; 
        }
}
