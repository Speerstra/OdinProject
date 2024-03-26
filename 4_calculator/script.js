const previousDisplay = document.querySelector('.screen-previous')
const currentDisplay = document.querySelector('.screen-current')
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const acButton = document.querySelector('#ac');
const delButton = document.querySelector('#del');
const equalButton = document.querySelector('#equal');


class Calculator {
        constructor(previousDisplay, currentDisplay) {
                this.previousDisplay = previousDisplay;
                this.currentDisplay = currentDisplay;
                this.clear();
        }

        clear() {
                this.previousOperand = '';
                this.currentOpperand = '';
                this.operator = undefined;
        }

        delete() {
                this.currentOpperand = this.currentOpperand.slice(0, -1); 
        }

        updateDisplay() {
                this.currentDisplay.innerHTML = this.currentOpperand.toLocaleString('fullwide', {maximumFractionDigits:12});
                if (this.operator !== undefined) {
                        this.previousDisplay.innerHTML = `${this.previousOperand} ${this.operator}`;
                }
        }

        appendNumber(number) {
                if (this.currentOpperand.toString().includes('.') && number === '.') return;
                console.log(this.operator)
                this.currentOpperand = this.currentOpperand.toString() + number.toString();
        }

        chooseOperator(operator) {
                if (this.currentOpperand === '') return;
                if (this.previousOperand !== '') {
                        this.calculate();
                }

                this.operator = operator
                this.previousOperand = this.currentOpperand;
                this.currentOpperand = '';
        }

        calculate() {
                let answer;
                let previous = parseFloat(this.previousOperand);
                let current = parseFloat(this.currentOpperand);

                if (isNaN(previous) || isNaN(current)) return;

                switch(this.operator) {
                        case '+':
                                answer = previous + current;
                                break;
                        
                        case '-':
                                answer = previous - current;
                                break;
                
                        case '×':
                                answer = previous * current;
                                break;
                        
                        case '/':
                                if (current === 0) {
                                        answer = 'Bah!';
                                        break;
                                }
                                answer = previous / current;
                                break;

                        default:
                                return;
                }

                this.currentOpperand = answer;
                this.previousOperand = '';
                this.operator = '';
        }
}

let calculator = new Calculator(previousDisplay, currentDisplay);

digitButtons.forEach(function(button) {
        button.addEventListener('click', function() {
                calculator.appendNumber(button.innerHTML);
                calculator.updateDisplay();
        })
})

operatorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
                calculator.chooseOperator(button.innerHTML);
                calculator.updateDisplay();
        })
})

equalButton.addEventListener('click', () => {
        calculator.calculate();
        calculator.updateDisplay();
})

acButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
})

delButton.addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
})

