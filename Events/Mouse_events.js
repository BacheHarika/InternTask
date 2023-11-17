
var colorChanger = document.getElementById('colorChanger');
var colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
function handleMouseOver() {
    colorChanger.style.backgroundColor = '#1abc9c';
}

function handleMouseOut() {
    colorChanger.style.backgroundColor = '#3498db';
    console.log(" handleMouseOut");
}
function handleClick() {
    var currentColor = colorChanger.style.backgroundColor;
    var index = colors.indexOf(currentColor);
    console.log(" handleClick");

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

const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
let painting = false;

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000';

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);


