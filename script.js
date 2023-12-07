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
display.textContent = "";
display.memory = "";
display.writeFlag = false;
function clearDisplay() {
    display.textContent = "";
}
function writeToDisplay(event) {
    if (display.textContent.length < 9) {
        if (display.writeFlag == true) {
            display.textContent = "";
            display.writeFlag= false;
        }
        display.textContent += event.target.textContent;
    }
}
function onOperatorClick(event) {
    //if memory empty, display empty (unless using =), if something in memory
/*     if (display.textContent != "") {
        display.memory = display.textContent + event.target.textContent;
        display.textContent = "";
    } */
    operatorKey = event.target.textContent;
    switch (operatorKey) {
        case "CLR":
            display.memory = "";
            display.textContent = "";
            break;
        case "=":
            if (display.memory.length > 0) {
                console.log(display.memory);
            }
            break;
        case "+":
            if (display.textContent.length > 0) {
                if (display.memory.length == 0) {
                    display.memory = Number(display.textContent);
                    display.writeFlag = true;
                }
                else {
                    display.memory += Number(display.textContent);
                    display.writeFlag = true;
                    display.textContent = display.memory;
                }

            }
     
        
            
    }
}
buttonDiv = document.querySelector("#buttons");
function createButtons() {
    for (i = 1; i <= 16; i++) {
        btn = document.createElement('div');
        switch (i) {
            case 4:
                btn.textContent = "+";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 8:
                btn.textContent = "-";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 12:
                btn.textContent = "*";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 13:
                btn.textContent = "0";
                btn.addEventListener('click', (event) => writeToDisplay(event));
                break;
            case 14:
                btn.textContent = ".";
                btn.addEventListener('click', (event) => writeToDisplay(event));
                break;
            case 15:
                btn.textContent = "CLR";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            case 16:
                btn.textContent = "/";
                btn.addEventListener('click', (event) => onOperatorClick(event));
                break;
            default:
                if ((i < 4) && (i>0)) {
                    btn.textContent = `${i}`;
                    btn.addEventListener('click', (event) => writeToDisplay(event));
                }
                else if ((i >=5) && (i <= 7)) {
                    btn.textContent = `${i-1}`;
                    btn.addEventListener('click', (event) => writeToDisplay(event));
                }
                else {
                    btn.textContent = `${i-2}`;
                    btn.addEventListener('click', (event) => writeToDisplay(event));
                }
        }
        
        btn.style.fontSize= "16px";
        btn.style.width = "81px";
        btn.style.height = "80px";
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
    btn = document.createElement('div');
    buttonDiv.appendChild(btn);
    btn.addEventListener('click', (event) => onOperatorClick(event));
    btn.style.fontSize= "16px";
    btn.style.width = "167px";
    btn.style.height = "60px";
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
    btn.style.marginLeft = "85px"
    btn.textContent = "=";
    //btn.style.flex = "1 0 auto";
    //btn.style.justify = "stretch";
}
createButtons()


    