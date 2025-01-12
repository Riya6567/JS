let display = document.getElementById('display');

function appendNumbers(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function Backspace() {
    display.value = display.value.slice(0, -1);
}
