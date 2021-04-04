// untuk menyimpan riwayat dalam cache
const CACHE_KEY = "calculator_history";

// untuk memeriksa bahwa datanya ada
function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

// untuk mengambil ro=iwayat perhitungan
function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);
        // membatasi hanya 5 riwayat terakhir
        if (historyData.length > 5) {
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

// menampung hasil perhitungan dalam array
function showHistory() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

// untuk menempatkan hasil perhitungan dalam tabel riwayat
function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";
    // looping untuk menampilkan history dalam tabel
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
        historyList.appendChild(row);
    }
}

renderHistory();


