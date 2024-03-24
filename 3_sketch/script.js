
const INITIAL_SIZE = 32;
const INITIAL_OPACITY = 0.1

var mainDiv = document.querySelector('.canvas')
let resetButton = document.querySelector('.reset-button')
resetButton.addEventListener('click', resetCanvas);
let sizeButton = document.querySelector('.size-button')
sizeButton.addEventListener('click', resizeCanvas);

function generateCanvas(size)
	{
                for(var i=0; i<size; i++)
                {
                        var rowDiv = document.createElement('div');
                        rowDiv.setAttribute('class', 'row');
                        for (var j=0; j<size; j++) {
                                var cell = document.createElement('BUTTON');
                                cell.setAttribute('class', 'cell');
                                cell.setAttribute('id', `${i}, ${j}`);
                                cell.style.opacity = INITIAL_OPACITY;
                                cell.addEventListener('mouseover', changeColor);
                                cell.addEventListener('mouseover', changeOpacity);

                                rowDiv.appendChild(cell);
                        }
                        mainDiv.appendChild(rowDiv)
    	        }
        };

generateCanvas(INITIAL_SIZE)

function changeColor(e) {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
}

function changeOpacity(e) {
        if (e.target.style.opacity < 1) {
                let currentOpacity = parseFloat(e.target.style.opacity)
                e.target.style.opacity = currentOpacity + 0.1;
        }
}

function resetCanvas() {
        cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
                cell.style.backgroundColor = null;
                cell.style.opacity = INITIAL_OPACITY;
        });
};

function resizeCanvas() {
        var newSize = parseFloat(prompt("Enter a Value", INITIAL_SIZE));
        while (mainDiv.firstChild) {
                mainDiv.removeChild(mainDiv.firstChild);
            }
        generateCanvas(newSize)
}

