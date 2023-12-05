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
        switch (i) {
            case 4:
                btn.textContent = "+";
                break;
            case 8:
                btn.textContent = "-";
                break;
            case 12:
                btn.textContent = "*";
                break;
            case 13:
                btn.textContent = "0";
                break;
            case 14:
                btn.textContent = ".";
                break;
            case 15:
                btn.textContent = "CLR";
                break;
            case 16:
                btn.textContent = "=";
                break;
            default:
                if ((i < 4) && (i>0)) {
                    btn.textContent = `${i}`;
                }
                else if ((i >=5) && (i <= 7)) {
                    btn.textContent = `${i-1}`;
                }
                else {
                    btn.textContent = `${i-2}`;
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
        btn.style.backround = "50,50,50";
        btn.style.alignContent = "center";
        btn.style.borderRadius = "4px";
        btn.style.justifyContent = "center";
        btn.style.flex = "0 0 auto";
        buttonDiv.appendChild(btn);
    }
}
createButtons()