function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a / b;
}
function operate(num1,num2,operator) {
    switch (operator) {
        case "*":
            return multiply(num1,num2);
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}
let num1;
let num2;
let operator;

buttonDiv = document.querySelector("#buttons");
function createButtons() {
    for (i = 1; i <= 16; i++) {
        btn = document.createElement('div');
        btn.textContent = `${i}`;
        btn.style.fontSize= "16px";
        btn.style.width = "85px";
        btn.style.height = "102px";
        btn.style.display = "flex";
        btn.style.flex = "0 0 auto";
        buttonDiv.appendChild(btn);
    }
}