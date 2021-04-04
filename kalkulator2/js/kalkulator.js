// inisiasi objek untuk menampung data dan kondisi pada kalkulator yg
const calculator = {
    displayNumber : '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

// function menampilkan perubahan displayNumber
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

// function untuk mengkosongkan displayNumber
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator= null;
    calculator.firstNumber= null;
    calculator.waitingForSecondNumber= false;
} 

// function untuk menginput digit yang dipilih
function inputDigit(digit) {
    if(calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

// function untuk mengontrol apabila ingin menggunakan angka minus
function inverseNumber() {
    if(calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber =calculator.displayNumber * -1;
}

// funtion untuk menghandel operator pada kalkulator
function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah diterapkan');
    }
}

// function untuk menghandel perhitungan kalkulator
function performCalculation() {
    // apabila angka belum / operator belum dipilih
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    // mengitung
    let result = 0;
    if(calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if(calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    } else if(calculator.operator === "*") {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber)
    } else if(calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber)
    }
    
    // objek yang dikirimkan sebagai argumen fungsi putHistory()
    const history = {
        firstNumber : calculator.firstNumber,
        secondNumber : calculator.displayNumber,
        operator : calculator.operator,
        result : result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
    
}

// ketika tombol pada kalkulator diklik
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        // apabila dklik tombol CE
        if(target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
        // apabila angka nya negatif
        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        // apabila diklik sama dengan
        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
        // apabila operator dipilih
        if(target.classList.contains('operator')) {
            handleOperator(target.innerText)
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    });
}
