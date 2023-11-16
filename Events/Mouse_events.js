
var colorChanger = document.getElementById('colorChanger');
var colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
function handleMouseOver() {
    colorChanger.style.backgroundColor = '#1abc9c';
}

function handleMouseOut() {
    colorChanger.style.backgroundColor = '#3498db';
}
function handleClick() {
    var currentColor = colorChanger.style.backgroundColor;
    var index = colors.indexOf(currentColor);

    // If the color is found in the array, switch to the next color; otherwise, go back to the first color
    if (index !== -1) {
        index = (index + 1) % colors.length;
        colorChanger.style.backgroundColor = colors[index];
    } else {
        colorChanger.style.backgroundColor = colors[0];
    }
}
// Add event listeners
colorChanger.addEventListener('mouseover', handleMouseOver);
colorChanger.addEventListener('mouseout', handleMouseOut);
colorChanger.addEventListener('click', handleClick);
