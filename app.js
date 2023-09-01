//MAIN OPERATORS

let add = (a, b) => {
  return a + b;
};

let subtract = (x, y) => {
  return x - y;
};

let multiply = (x, y) => {
  if (y === 0 || x === 0) {
    return "undefined";
  }
  return x * y;
};

let divide = (x, y) => {
  if (y === 0 || x === 0) {
    return "undefined";
  }
  return x / y;
};

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// let operate = (operator, firstNumber, secondNumber) => {
//   if (operator === "+") {
//     return add(firstNumber, secondNumber);
//   } else if (operator === "-") {
//     return subtract(firstNumber, secondNumber);
//   } else if (operator === "*") {
//     return multiply(firstNumber, secondNumber);
//   } else if (operator === "/") {
//     return divide(firstNumber, secondNumber);
//   }
// };

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) {
        return "Cannot divide by zero";
      }
      return firstNumber / secondNumber;
    default:
      return "Invalid operator";
  }
};

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  screenDisplay.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
});

const numberButtons = document.querySelectorAll(".numeric-buttons #number");
const screenDisplay = document.getElementById("screen");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    screenDisplay.textContent += buttonValue;

    if (operator === "") {
      firstNumber = parseFloat(screenDisplay.textContent);
    } else {
      secondNumber = parseFloat(screenDisplay.textContent);
    }
    console.log("First Number: " + firstNumber);
    console.log("Second Number: " + secondNumber);
  });
});

let plusButton = document.getElementById("plus");

plusButton.addEventListener("click", () => {
  if (screenDisplay.textContent !== "") {
    if (firstNumber === 0) {
      firstNumber = parseFloat(screenDisplay.textContent);
      operator = "+";
    } else if (firstNumber !== 0 && secondNumber !== 0) {
      firstNumber = firstNumber + secondNumber;
      secondNumber = 0;

      operator = "+";
      screenDisplay.textContent += "+";
    } else if (firstNumber !== 0) {
      secondNumber = 0;
      operator = "+";
      screenDisplay.textContent += "+";
    }

    screenDisplay.textContent = "";
  }
  console.log("First Number: " + firstNumber);
  console.log("Second Number: " + secondNumber);
  console.log("Operator: " + operator);
});

let minusButton = document.getElementById("minus");

minusButton.addEventListener("click", () => {
  screenDisplay.textContent = operate(operator, firstNumber, secondNumber);

  if (screenDisplay.textContent !== "") {
    firstNumber = parseFloat(screenDisplay.textContent);

    if (firstNumber === 0) {
      firstNumber = parseFloat(screenDisplay.textContent);
      screenDisplay.textContent += "-";
      operator = "-";
    } else if (firstNumber !== 0 && secondNumber !== 0) {
      firstNumber = parseFloat(screenDisplay.textContent);
      operator = "-";
      screenDisplay.textContent += "-";
    } else if (firstNumber !== 0) {
      secondNumber = 0;
      operator = "-";
      screenDisplay.textContent += "-";
    }

    screenDisplay.textContent = "";
  }

  console.log("First Number: " + firstNumber);
  console.log("Second Number: " + secondNumber);
  console.log("Operator: " + operator);
});

let multiplyButton = document.getElementById("multiply");

multiplyButton.addEventListener("click", () => {
  screenDisplay.textContent = operate(operator, firstNumber, secondNumber);

  if (firstNumber === 0) {
    firstNumber = parseFloat(screenDisplay.textContent);
    screenDisplay.textContent += "*";
    operator = "*";
  } else if (firstNumber !== 0 && secondNumber !== 0) {
    firstNumber = parseFloat(screenDisplay.textContent);
    operator = "*";
    screenDisplay.textContent += "*";
  } else if (firstNumber !== 0) {
    secondNumber = 0;
    operator = "*";
    screenDisplay.textContent += "*";
  }

  screenDisplay.textContent = "";

  console.log("First Number: " + firstNumber);
  console.log("Second Number: " + secondNumber);
  console.log("Operator: " + operator);
});

let divideButton = document.getElementById("divide");

divideButton.addEventListener("click", () => {
  screenDisplay.textContent = operate(operator, firstNumber, secondNumber);

  if (firstNumber === 0) {
    firstNumber = parseFloat(screenDisplay.textContent);
    screenDisplay.textContent += "/";
    operator = "/";
  } else if (firstNumber !== 0 && secondNumber !== 0) {
    firstNumber = firstNumber / secondNumber;
    operator = "/";
    screenDisplay.textContent += "/";
  } else if (firstNumber !== 0) {
    secondNumber = 0;
    operator = "/";
    screenDisplay.textContent += "/";
  }

  screenDisplay.textContent = "";

  console.log("First Number: " + firstNumber);
  console.log("Second Number: " + secondNumber);
  console.log("Operator: " + operator);
});

let equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", () => {
  screenDisplay.textContent = operate(operator, firstNumber, secondNumber);
  firstNumber = 0;
  secondNumber = 0;

  console.log("First Number: " + firstNumber);
  console.log("Second Number: " + secondNumber);
});
