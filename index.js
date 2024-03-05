let counterValueElement = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueElement.textContent = 0;
} else {
    counterValueElement.textContent = clickCount;
}

function onIncrementBtn() {
    let pastCounterValue = counterValueElement.textContent;
    let updatedCounterValue = parseInt(pastCounterValue) + 1;

    localStorage.getItem("clickCount".updatedCounterValue);
    counterValueElement.textContent = updatedCounterValue;
}