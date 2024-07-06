let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function clearAll() {
    displayValue = ''; // Clear the entire display
    updateDisplay();
}

function operate(operator) {
    if (displayValue !== '' && displayValue.slice(-1) !== operator) {
        displayValue += operator;
        updateDisplay();
    }
}

function calculate() {
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
