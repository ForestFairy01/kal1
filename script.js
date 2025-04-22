function number (num) {
    const display = document.getElementById("hasil");
    hasil.value += num;
}

function operator (op) {
    const display = document.getElementById("hasil");
    hasil.value += ""+ op +"";
}

function work () {
    const display = document.getElementById("hasil");
    const input = hasil.value;

    const match = input.match(/^(-?\d+(?:\.\d+)?)\s*([\/\*\-\+])\s*(-?\d+(?:\.\d+)?)$/);
    
    if(!match) {
        hasil.value = "Input tidak valid";
        return;
    }

    const a = Number (match[1]);
    const operator = match[2];
    const b = Number (match[3]);

    if(operator === "/" && b === 0) {
        hasil.value = "Tidak dapat dibagi 0";
        return;
    }

    let result;
    switch (operator) {
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        case "-":
            result = a - b;
            break;
        case "+":
            result = a + b;
            break;
    
        default:
            break;
    }

    hasil.value = result;
}

function allclear () {
    document.getElementById("hasil").value = "";
}

function del () {
    const display = document.getElementById("hasil");
    hasil.value = hasil.value.slice(0,-1);
}