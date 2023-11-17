// Get references to form elements
var myForm = document.getElementById('myForm');
var formMessage = document.getElementById('formMessage');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = '#e74c3c'; // Red color for error
    } else {
        formMessage.textContent = `Thank you, ${name}! We'll get back to you soon.`;
        formMessage.style.color = '#27ae60'; // Green color for success
        // Additional logic for form submission can be added here
    }
}

// Add event listener for form submission
myForm.addEventListener('submit', handleFormSubmit);
