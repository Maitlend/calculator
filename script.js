const zeroButton = document.getElementById("zero-btn");
const oneButton = document.getElementById("one-btn");
const twoButton = document.getElementById("two-btn");
const threeButton = document.getElementById("three-btn");
const fourButton = document.getElementById("four-btn");
const fiveButton = document.getElementById("five-btn");
const sixButton = document.getElementById("six-btn");
const sevenButton = document.getElementById("seven-btn");
const eightButton = document.getElementById("eight-btn");
const nineButton = document.getElementById("nine-btn");

const clearButton = document.getElementById("ac-btn");
const divideButton = document.getElementById("divide-btn");
const multiplyButton = document.getElementById("multiply-btn");
const subtractButton = document.getElementById("minus-btn");
const addButton = document.getElementById("plus-btn");
const equalsButton = document.getElementById("equals-btn");
const decimalButton = document.getElementById("decimal-btn");
const percentButton = document.getElementById("percent-btn");
const inverseButton = document.getElementById("plus-minus-btn");

zeroButton.addEventListener('click', digitHandler.bind(zeroButton));
oneButton.addEventListener('click', digitHandler.bind(oneButton));
twoButton.addEventListener('click', digitHandler.bind(twoButton));
threeButton.addEventListener('click', digitHandler.bind(threeButton));
fourButton.addEventListener('click', digitHandler.bind(fourButton));
fiveButton.addEventListener('click', digitHandler.bind(fiveButton));
sixButton.addEventListener('click', digitHandler.bind(sixButton));
sevenButton.addEventListener('click', digitHandler.bind(sevenButton));
eightButton.addEventListener('click', digitHandler.bind(eightButton));
nineButton.addEventListener('click', digitHandler.bind(nineButton));

clearButton.addEventListener('click', clearButtonHandler);

divideButton.addEventListener('click', operandHandler.bind(divideButton));
multiplyButton.addEventListener('click', operandHandler.bind(multiplyButton));
subtractButton.addEventListener('click', operandHandler.bind(subtractButton));
addButton.addEventListener('click', operandHandler.bind(addButton));
equalsButton.addEventListener('click', operationHandler);
decimalButton.addEventListener('click', decimalHandler);
percentButton.addEventListener('click', percentHandler);
inverseButton.addEventListener('click', inverseHandler);

const display = document.getElementById("display");
let previousOperator = 0;
let operand = null;
let operandPressed = false;

// let displayContent = 0;
// let currentOperator = 0;

function digitHandler(){
  let currentOperator = getDisplay();
  if(currentOperator !== 0 && !operandPressed){
    if(currentOperator.indexOf('.') === -1){
      currentOperator *= 10;
    }
    currentOperator += parseInt(this.textContent);
    updateDisplay(currentOperator);
  }
  else{
  // console.log(parseInt(this.textContent));
  updateDisplay(parseInt(this.textContent));
  operandPressed = false;
  }
}

function clearButtonHandler(){
  updateDisplay(0);
}

function operandHandler(){
  switch(this.textContent){
    case '+':
      operand = '+';
      break;
    case '−':
      operand = '-';
      break;
    case '×':
      operand = '*';
      break;
    case '÷':
      operand = '/';
      break;
  }
  previousOperator = parseFloat(getDisplay());
  operandPressed = true;
}

function operationHandler(){
  if(operand != ''){
    updateDisplay(operate(operand,previousOperator,parseFloat(getDisplay())));
    operand = '';
  }
}

function decimalHandler(){
  let currentOperator = getDisplay();
  if(operandPressed){
    operandPressed = false;
    updateDisplay('.');
  }
  else if(currentOperator.indexOf('.') === -1){
    updateDisplay(currentOperator+='.');
  }
}

function percentHandler(){
  let currentOperator = getDisplay();
  updateDisplay(currentOperator/=100);
}

function inverseHandler(){
  let currentOperator = getDisplay();
  updateDisplay(-currentOperator);
}

function getDisplay(){
  return document.querySelector('#display p').textContent;
}

function updateDisplay(content){
  // currentOperator = content;
  const displayContent = document.createElement('p');
  // displayContent.setAttribute("style", "font-size: 10vw margin: 0;");
  displayContent.textContent = content;
  display.replaceChild(displayContent,display.firstElementChild);
}

function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
return a*b;
}

function divide(a,b){
  return b != 0 ? a/b: 'Error';
}

function operate(operand,a,b){
  switch(operand){
    case '+':
       return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
  }
}