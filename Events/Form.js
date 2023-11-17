
var myForm = document.getElementById('myForm');
var formMessage = document.getElementById('formMessage');

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("handleFormSubmit");
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = '#e74c3c'; 
    } else {
        formMessage.textContent = `Thank you, ${name}! We'll get back to you soon.`;
        formMessage.style.color = '#27ae60'; 
        
    }
}
myForm.addEventListener('submit', handleFormSubmit);
