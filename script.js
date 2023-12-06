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
const display = document.querySelector('#display');
function clearDisplay() {
    display.textContent = "";
}
function writeToDisplay(input) {
    display.textContent += input;
}
function onOperatorClick(event) {
    if (display.textContent != "") {
        display.memory = display.textContent + event.target.textContent;
        display.textContent = "";
    }
}
buttonDiv = document.querySelector("#buttons");
function createButtons() {
    for (i = 1; i <= 16; i++) {
        btn = document.createElement('div');
        switch (i) {
            case 4:
                btn.textContent = "";
                btnChild1 = document.createElement('div');
                btnChild2 = document.createElement('div');
                btn.appendChild(btnChild1);
                btn.appendChild(btnChild2);
                btnChild1.textContent = "+";
                btnChild2.textContent = "-";
                btnChild1.style.background = "green";
                btnChild1.style.display = "flex";
                btnChild1.style.flex = "1";
                btnChild2.style.background = "pink";
                btnChild2.style.flex = "1";
                btnChild2.style.display = "flex";
                //btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 8:
                btn.textContent = "";
                //btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 12:
                btn.textContent = "*";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 13:
                btn.textContent = "0";
                btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                break;
            case 14:
                btn.textContent = ".";
                btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                break;
            case 15:
                btn.textContent = "CLR";
                btn.addEventListener('click', clearDisplay);
                break;
            case 16:
                btn.textContent = "=";
                btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                break;
            default:
                if ((i < 4) && (i>0)) {
                    btn.textContent = `${i}`;
                    btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                }
                else if ((i >=5) && (i <= 7)) {
                    btn.textContent = `${i-1}`;
                    btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                }
                else {
                    btn.textContent = `${i-2}`;
                    btn.addEventListener('click', (event) => display.textContent += event.target.textContent);
                }
        }
        
        btn.style.fontSize= "16px";
        btn.style.width = "81px";
        btn.style.height = "98px";
        btn.style.border = "1px";
        btn.style.margin = "1px";
        btn.style.borderStyle = "solid";
        btn.style.display = "flex";
        btn.style.flexWrap = "wrap";
        btn.style.fontSize = "32px";
        btn.style.background = "rgb(50,50,50)";
        btn.style.alignContent = "center";
        btn.style.borderRadius = "4px";
        btn.style.justifyContent = "center";
        btn.style.flex = "0 0 auto";
        buttonDiv.appendChild(btn);
    }
}
createButtons()


    