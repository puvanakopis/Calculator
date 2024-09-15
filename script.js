var userInput = document.getElementById("user_input");
var expression = "";

function press(num) {
    if (userInput.innerHTML === "0" && !isNaN(num)) {
        expression = ""; 
    }
    expression += num;
    userInput.innerHTML = expression;
}


var openBrackets = 0; 
function addBracket() {
    if (userInput.innerHTML === "0") {
        expression = ''; 
    }

    if (openBrackets === 0 || (expression.slice(-1) === '(' || /[+\-*/]/.test(expression.slice(-1)))) {
        expression += '(';
        openBrackets++; 
    } else if (openBrackets > 0 && !/[+\-*/(]/.test(expression.slice(-1))) {
        expression += ')';
        openBrackets--; 
    }

    userInput.innerHTML = expression;
}


function backspace() {
        expression = expression.slice(0, -1);
        if (expression === "") {
            userInput.innerHTML = "0";
        } else {
            userInput.innerHTML = expression;
        }
    }


function erase() {
    expression = "";
    userInput.innerHTML = "0";
}


function toggleSign() {
    if (expression !== "") {
        expression = (parseFloat(expression) * -1).toString();
        userInput.innerHTML = expression;
    }
}

    


function equal() {
    try {
        expression = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        userInput.innerHTML = expression;
    } catch (error) {
        userInput.innerHTML = "Error";
        expression = "";
    }
}
