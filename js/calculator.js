// select elements with dom
const numberPress = document.querySelectorAll('button');
const displayValue = document.querySelector('#display');
const currentOperand= document.querySelector('#currentOperand')
const previousOperand = document.querySelector('#previousOperand')
const clearButton = document.querySelector('.clearButton');
const equalButton = document.querySelector('.equalButton');
const operatorButton = document.querySelectorAll('.operator')


// create functions to add, subtract, multiply, and divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// create a function taking an operator, two numbers, and calls one of the above functions
const operate = function(a, b, operator) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  }
}


// create variables to hold the values
let storedDisplay = '';
let firstValue = '';
let operatorClicked = '';
let result = '';
let equalContainer = '';
currentOperand.textContent = 0;


// loop through with forEach and add an eventlistener using this to call the value of the button
numberPress.forEach((number) => {
  number.addEventListener('click', function() {
    storedDisplay += number.value;
    currentOperand.textContent = storedDisplay.slice(-8);
  });
});

// WAS STUCK ON: the returning answer upon pressing = because the operator was appending onto the storedDisplay instead of its own operatorClicked string, causing one of the three parameters in the operate function to be undefined

// add an eventlistener to each of the operators
// use querySelectAll so operatorButton references all the operator buttons
operatorButton.forEach((operator) => {
  operator.addEventListener('click', function() {
    // if we have both the first value (converted from the first stored display) and a secondary stored display => displayResult()
    if (firstValue && storedDisplay) {
      displayResult();
    };
    // store the first number into firstValue from storedDisplay
    firstValue = storedDisplay;
    // Store operator value into the operator clicked function
    operatorClicked += operator.value;
    // clear out the storedDisplay variable for the second number
    storedDisplay = '';
  });
});

// add an eventlistener to the equal key
equalButton.addEventListener('click', function() {
  // had a huge roadblock because of giving '=' a value and it being stored in storedDisplay - fixed by giving it its own variable for conditional statements
  equalContainer += '=' 
  displayResult();
});

// create a function for displaying results
function displayResult() {  
  // check if a number is being divided by 0
  if (storedDisplay == '0' && operatorClicked === '/') {
    result = 'chill out';
    // if user isn't dividing a number by 0, use the operate function
  } else if (firstValue && storedDisplay && operatorClicked) {
    result = operate(parseFloat(firstValue), parseFloat(storedDisplay), operatorClicked)
    // round result to 7 decimal places to fit the display and keep in this scope
    result = Math.round(result * 10000000) / 10000000;
    // if = is pressed before all the appropriate values, clear all variables
  } else {
    clearMemory();
  };

  // update current operand and previous operand 
  currentOperand.textContent = result;
  // store result in storeDisplay for use in multiple operations when clicking operator button
  storedDisplay = result;
  // clear operatorClicked and firstValue for the next operation, or it will keep storing operators and use the prev number
  operatorClicked = '';
  firstValue = '';
  equalContainer = '';
};

clearButton.addEventListener('click', clearMemory);

function clearMemory() {
  currentOperand.textContent = '';
  storedDisplay = '';
  firstValue = '';
  result = '';
  operatorClicked = '';
  currentOperand.textContent = 0;
};