let calculationHistory = [];

function addToDisplay(value) {
    const display = document.getElementById("result");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("result");
    display.value = "";
}

function deleteLastChar() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("result");
    let result;
    try {
        result = eval(display.value);
    } catch {
        display.value = "Error";
        console.log("Error Occurred due to wrong Entry of values");
    }

    if (!isNaN(result)) {
        calculationHistory.push(display.value + " = " + result);
        display.value = result;
        updateHistoryList();
    }

}

function updateHistoryList() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    calculationHistory.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });

    // Store the history in local storage
    localStorage.setItem("calculationHistory", JSON.stringify(calculationHistory));
}

window.onload = function () {
    // Load the history from local storage on page load
    const storedHistory = localStorage.getItem("calculationHistory");
    if (storedHistory) {
        calculationHistory = JSON.parse(storedHistory);
        updateHistoryList();
    }
};
