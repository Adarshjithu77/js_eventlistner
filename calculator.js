let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = buttons[i].innerText;

    
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      operator = value;
      firstNum = display.value; 
      display.value = "";      
    } 
    
    else {
      display.value += value;
    }
  });
}


equal.addEventListener("click", function () {
  secondNum = display.value; 

 
  if (operator === "+") {
    result = parseInt(firstNum) + parseInt(secondNum);
  } else if (operator === "-") {
    result = parseInt(firstNum) - parseInt(secondNum);
  } else if (operator === "*") {
    result = parseInt(firstNum) * parseInt(secondNum);
  } else if (operator === "/") {
    result = parseInt(firstNum) / parseInt(secondNum);
  }

  display.value = result; 
});


clear.addEventListener("click", function () {
  display.value = "";
  firstNum = "";
  secondNum = "";
  operator = "";
});