const screenPrevious = document.querySelector('.screen-previous')
const screenCurrent = document.querySelector('.screen-current')
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const ac = document.querySelector('#ac');
const del = document.querySelector('#del');
const devide = document.querySelector('#devide');
const multiply = document.querySelector('#multiply');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');

// display on screen
digits.forEach(function(e) {
        e.addEventListener('click', (e) => {
                let button = e.target.id
                console.log(button)
                screenCurrent.innerHTML += button
        });
    });
// when operator clicked, advance screen

// calulate answer

// clear screen

// delete last digit
