const container = document.getElementById('container');
let gridRow = 50;
let gridSize = 480 / gridRow;
console.log(gridSize);

const slider = document.getElementById('myRange');
const rangeValue = document.getElementById('rangeValue');
slider.oninput = function() {
    rangeValue.innerHTML = this.value;
    console.log(this.value);
    gridSize = 480 / this.value;
    container.replaceChildren();
    createGrid(this.value);
}

function createGrid(gridRow) {
    for(let i = 0; i < (gridRow * gridRow); i++) {
        let div = document.createElement('div');
        div.style.width = gridSize + 'px';
        div.style.height = gridSize + 'px';
        div.style.backgroundColor = 'white';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'blue';
        });
        container.appendChild(div);
    }
}