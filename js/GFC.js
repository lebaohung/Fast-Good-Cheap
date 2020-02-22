
function checkGreen() {
    if (document.getElementById("red").checked === true ) {
        document.getElementById("blue").checked = false;
    }
}

function checkBlue() {
    if (document.getElementById("green").checked === true) {
        document.getElementById("red").checked = false;
    }
}

function checkRed() {
    if (document.getElementById("blue").checked === true ) {
        document.getElementById("green").checked = false;
    }
}