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
display.textContent.maxLength = 9;
display.memory = undefined;
display.writeFlag = false;
function clearDisplay() {
    display.textContent = "";
}
function writeToDisplay(event) {
    if (event.name) {
        key = event.name;
    }
    else {
        key = event.target.textContent;
    }
    if (display.textContent.length < 9) {
        if (display.writeFlag == true) {
            display.textContent = "";
            display.writeFlag= false;
        }
        if ((key != ".") && (String(display.textContent) != "0")) {
            display.textContent += key;
        }
        else if (key == ".") {
            if ((display.textContent.length >= 1) && (display.textContent.includes(".") == false) && (display.textContent.length < 8)) {
                display.textContent += key;
            }
        }
        else if (String(display.textContent) == "0") {
            if (key == ".") {
                display.textContent += key;
            }
        }
    }
    else if ((display.textContent.length == 9) && (display.writeFlag == true)) {
        display.textContent = "";
        display.writeFlag= false;
        display.textContent += key;
    }
}

function memoryHandler(memory) {
    if (memory >= 999999999) {
        memory = parseFloat(memory.toPrecision(3)).toExponential();
        display.textContent = memory;
        display.memory = undefined;
        return memory;
    }
    if (String(memory).length > 9) {
        memory = Number(String(memory).substring(0,9));
        
        return memory;
    }
    return memory;
}

function onOperatorClick(event) {
    if (event.name) {
        operatorKey = event.name;
    }
    else {
        operatorKey = event.target.textContent;
    }
    switch (operatorKey) {
        case "\u25c0":
            if ((String(display.textContent).length > 0) && (display.textContent != "Failure")) {
                display.textContent = display.textContent.slice(0,-1);
            }
            break;
        case "CLR":
            display.memory = undefined;
            display.textContent = "";
            break;
        case "=":
            if ((Number(display.textContent) == 0) && (display.nextOperatorKey == "/")) {
                display.textContent = "Failure";
                display.memory = undefined;
                display.writeFlag = true;
            }
            else if ((display.memory != undefined) && (display.textContent != "") && (display.nextOperatorKey)) {
                display.memory = operate(display.memory, Number(display.textContent), display.nextOperatorKey);
                display.memory = memoryHandler(display.memory);
                display.writeFlag = true;
                display.textContent = display.memory;
                display.memory = undefined;
            }
            break;
        default:
            if (display.textContent.length > 0) {
                if (display.memory == undefined) {
                    display.memory = Number(display.textContent);
                    display.writeFlag = true;
                    display.nextOperatorKey = operatorKey;
                }
                else if ((Number(display.textContent) == 0) && (operatorKey == "/")) {
                    display.textContent = "Failure";
                    display.memory = undefined;
                    display.writeFlag = true;
                }
                else {
                    display.memory = operate(Number(display.memory), Number(display.textContent), display.nextOperatorKey);
                    display.memory = memoryHandler(display.memory);
                    display.prevOperation = display.operationKey;
                    display.writeFlag = true;
                    display.textContent = display.memory;
                    display.nextOperatorKey = operatorKey;
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
                btn.textContent = "\u25c0";
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
    btn.style.width = "166px";
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
    //btn.style.marginLeft = "85px"
    btn.textContent = "CLR";
    btn = document.createElement('div');
    buttonDiv.appendChild(btn);
    btn.addEventListener('click', (event) => onOperatorClick(event));
    btn.style.fontSize= "16px";
    btn.style.width = "166px";
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
    btn.textContent = "=";
}
createButtons()
document.addEventListener('keydown', function(event) {
    if (event.code === "ArrowLeft") {
        event.name = "\u25c0";
        onOperatorClick(event);
    }
    else if (event.code === "Backspace") {
        event.name = "CLR";
        onOperatorClick(event);
    }
    else if (event.code === "Enter") {
        event.name = "=";
        onOperatorClick(event);
    }
    else if (event.code === "Minus") {
        event.name = "+";
        onOperatorClick(event);
    }
    else if (event.code === "Slash") {
        event.name = "-";
        onOperatorClick(event);
    }
    else if (event.code === "Slash") {
        event.name = "-";
        onOperatorClick(event);
    }
    else if (event.code == "Digit7" && (event.shiftKey)) {
        event.name = "/"
        onOperatorClick(event);
    }
    else if (event.code == "Backslash" && (event.shiftKey)) {
        event.name = "*"
        onOperatorClick(event);
    }
    else if (event.code === "Period") {
        event.name = "."
        writeToDisplay(event);        
    }
    else if (event.code.slice(0,-1) == "Digit") {
        event.name = event.code.slice(-1);
        writeToDisplay(event);
    }
    else if ((event.code.slice(0,-1) == "Numpad") && (event.code.length == 7)) {
        event.name = event.code.slice(-1);
        writeToDisplay(event);
    }
    else if (event.code === "NumpadEnter") {
        event.name = "=";
        onOperatorClick(event);
    }
    else if (event.code === "NumpadSubtract") {
        event.name = "-";
        onOperatorClick(event);
    }
    else if (event.code === "NumpadAdd") {
        event.name = "+";
        onOperatorClick(event);
    }
    else if (event.code === "NumpadMultiply") {
        event.name = "*";
        onOperatorClick(event);
    }
    else if (event.code === "NumpadDivide") {
        event.name = "/";
        onOperatorClick(event);
    }
})

    