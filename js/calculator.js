// create functions to add, subtract, multiply, and divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// create a function taking an operator, two numbers, and calls one of the above functions
const operate = function(operator, a, b) {
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
console.log(operate('*', 5, 5))

function makeRowsAndColumns(rows, cols) {
  // grab element class of div in html
  const buttonContainer = document.getElementsByClassName('calcButtonsContainer')[0];
  // give the rows and columns the corresponding properties
  buttonContainer.style.setProperty('--grid-rows', rows);
  buttonContainer.style.setProperty('--grid-cols', cols);
  // loop the creation of rows of columns and rows, name them with a number, and append a class name to them
  for (let i = 0; i < (rows * cols); i++) {
  const item = document.createElement('button');
    buttonContainer.appendChild(item).className = 'calcButton'
  };
};

makeRowsAndColumns(5, 4)

// manually label the buttons that need text other than numbers
const plusMinusButton = document.getElementsByClassName('calcButton')[0];
plusMinusButton.textContent = '+/-';

const delButton = document.getElementsByClassName('calcButton')[1];
delButton.textContent = 'DEL';

const percentButton = document.getElementsByClassName('calcButton')[2];
percentButton.textContent = '%';

const clearButton = document.getElementsByClassName('calcButton')[3];
clearButton.textContent = 'Clear';

const sevenButton = document.getElementsByClassName('calcButton')[4];
sevenButton.textContent = '7';

const eightButton = document.getElementsByClassName('calcButton')[5];
eightButton.textContent = '8';

const nineButton = document.getElementsByClassName('calcButton')[6];
nineButton.textContent = '9';

const divideButton = document.getElementsByClassName('calcButton')[7];
divideButton.textContent = '/';

const fourButton = document.getElementsByClassName('calcButton')[8];
fourButton.textContent = '4';

const fiveButton = document.getElementsByClassName('calcButton')[9];
fiveButton.textContent = '5';

const sixButton = document.getElementsByClassName('calcButton')[10]
sixButton.textContent = '6'

const multiplyButton = document.getElementsByClassName('calcButton')[11];
multiplyButton.textContent = 'x';

const oneButton = document.getElementsByClassName('calcButton')[12];
oneButton.textContent = '1';

const twoButton = document.getElementsByClassName('calcButton')[13];
twoButton.textContent = '2';

const threeButton = document.getElementsByClassName('calcButton')[14];
threeButton.textContent = '3';

const minusButton = document.getElementsByClassName('calcButton')[15];
minusButton.textContent = '-';

const zeroButton = document.getElementsByClassName('calcButton')[16];
zeroButton.textContent = '0';

const decimalButton = document.getElementsByClassName('calcButton')[17];
decimalButton.textContent = '.';
    
const addButton = document.getElementsByClassName('calcButton')[18];
addButton.textContent = '+';

const equalButton = document.getElementsByClassName('calcButton')[19];
equalButton.textContent = '=';


// create functions to populate the display and store this display value

