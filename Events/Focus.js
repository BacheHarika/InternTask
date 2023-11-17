
var textInput = document.getElementById('textInput');
var actionButton = document.getElementById('actionButton');
var output = document.getElementById('output');

// Function to handle input focus
function handleInputFocus() {
    output.textContent = 'Input field is focused.';
}

// Function to handle input blur (loss of focus)
function handleInputBlur() {
    output.textContent = 'Input field lost focus.';
}

// Function to handle button focus
function handleButtonFocus() {
    output.textContent = 'Button is focused.';
}

// Function to handle button blur (loss of focus)
function handleButtonBlur() {
    output.textContent = 'Button lost focus.';
}

// Add event listeners for focus and blur events
textInput.addEventListener('focus', handleInputFocus);
textInput.addEventListener('blur', handleInputBlur);

actionButton.addEventListener('focus', handleButtonFocus);
actionButton.addEventListener('blur', handleButtonBlur);
