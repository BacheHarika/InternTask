// Get a reference to the keyboard events demo div
var keyboardEventsDemo = document.getElementById('keyboardEventsDemo');

// Function to display keyboard event details
function displayKeyEventDetails(event) {
    keyboardEventsDemo.textContent = `
        Key Pressed: ${event.key}
        Key Code: ${event.keyCode}
        Key Location: ${event.location}
        Shift Key: ${event.shiftKey ? 'Pressed' : 'Not Pressed'}
        Alt Key: ${event.altKey ? 'Pressed' : 'Not Pressed'}
        Ctrl Key: ${event.ctrlKey ? 'Pressed' : 'Not Pressed'}
    `;
}

// Function to reset the content when the mouse is clicked
function resetContent() {
    keyboardEventsDemo.textContent = 'Press a key to see the event details.';
}
function detect(){
    let text=document.getElementById("try").value;
    document.getElementById("result").innerText=text;

}

// Add event listeners for keyboard events
document.addEventListener('keydown', displayKeyEventDetails);
document.addEventListener('keyup', resetContent);








