

function validate_password() {
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');
        let passwordMessage = document.getElementById('password-message');
        let createButton = document.getElementById('create');
        if (password.value != confirmPassword.value) { 
                
                passwordMessage.innerHTML = 'Passwords do not match';
                confirmPassword.setAttribute('invalid', true)
                confirmPassword.focus(); 
                return false; 
        }
//         if (password.value == confirmPassword.value) {
//                 confirmPassword.style.border = '';
//                 confirmPassword.style.borderColor = '';
//                 passwordMessage.innerHTML = '';
//                 createButton.disabled = false;
//                 createButton.style.opacity = 1;

//         } else {
//                 // confirmPassword.style.border = '2px solid';
//                 // confirmPassword.style.borderColor = 'red';
//                 confirmPassword.setAttribute('invalid', true)
//                 passwordMessage.innerHTML = 'Passwords do not match';
//                 confirmPassword.focus();
//                 passwordMessage.style.color = 'red';
//                 createButton.disabled = true;
//                 createButton.style.opacity = 0.4;
//       }
}
