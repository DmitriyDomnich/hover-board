const board = document.getElementById('board');
const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];
const fullHeight = document.body.clientHeight;
const fullWidth = document.body.clientWidth;

let rows = +((fullHeight * 75 / 100) / 20).toFixed();

let cols = +((fullWidth * 60 / 100) / 20).toFixed();


for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseleave', () => removeColor(square));
        board.appendChild(square);
    }
}

function setColor(square) {
    const color = colors[+(Math.random() * colors.length).toFixed()];
    square.style.backgroundColor = `${color}`;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
}