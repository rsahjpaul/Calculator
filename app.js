//MAIN OPERATORS

let add = (a, b) => {
  return a + b;
};

let subtract = (x, y) => {
  return x - y;
};

let multiply = (x, y) => {
  return x * y;
};

let divide = (x, y) => {
  if (y === 0) {
    return "undefined";
  }
  return x / y;
};

let firstNumber = '';
let secondNumber = '';
let operator = "+";

let operate = (operator, firstNumber, secondNumber) => {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
};

let calculate = document.getElementById("equals");
calculate.addEventListener("click", () => {
  console.log(operate(operator, firstNumber, secondNumber));
});

