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

const display = document.getElementById("display");
// let displayContent = 0;
let displayConentHolder = 0;

function digitHandler(){
  if(displayConentHolder != 0){
    displayConentHolder *= 10;
    displayConentHolder += parseInt(this.textContent);
    updateDisplay(displayConentHolder);
  }
  else{
  // console.log(parseInt(this.textContent));
  updateDisplay(parseInt(this.textContent));
  }
}

function clearButtonHandler(){
  updateDisplay(0);
}

function updateDisplay(content){
  displayConentHolder = content;
  const displayContent = document.createElement('p');
  displayContent.setAttribute("style", "font-size: 10vw margin: 0;");
  displayContent.textContent = displayConentHolder;
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
  return a/b;
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