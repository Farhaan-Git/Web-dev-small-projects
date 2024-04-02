const quote = "The quick brown fox jumps over the lazy dog";
const input = document.getElementById("input");
const quoteElement = document.getElementById("quote");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start-btn");

let startTime;

function startTest() {
    startTime = Date.now();
    input.disabled = false;
    input.focus();
    startButton.disabled = true;
    quoteElement.textContent = quote;
    resultElement.textContent = "";
}

function calculateSpeed() {
    const typedText = input.value.trim();
    const elapsedTime = (Date.now() - startTime) / 1000; 
    const words = typedText.split(" ").length;
    const speed = Math.round(words / (elapsedTime / 60)); 
    resultElement.textContent = `Your typing speed is ${speed} WPM`;
}

startButton.addEventListener("click", startTest);
input.addEventListener("input", calculateSpeed);


