// reset tampilan hasil
function clearOutput() {
    document.getElementById("output").innerHTML="0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = "";
        document.getElementById("output").innerHTML=value;
     }
}

function persen() {
    removeZero();
    var value = document.getElementById("output").innerHTML;
    value = value/100;
    document.getElementById("output").innerHTML=value;
}

function forDisplay(myValue) {
    removeZero();
    document.getElementById("output").innerHTML+=myValue;
}

function solve() {
    removeZero();
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
}