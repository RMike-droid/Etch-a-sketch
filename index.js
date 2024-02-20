const gridContainer = document.querySelector('.grid');
const btnGenerateGrid = document.getElementById('generateGrid');


function changeColorTrail(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'black';
}

btnGenerateGrid.addEventListener('click', generateGrid);


function generateGrid() {
        removeAllChildren(gridContainer);
        
        let sizeNewGrid = window.prompt('What is the canvas size?', 16);

        if(sizeNewGrid > 100) {
            sizeNewGrid = 100;
        }



    const sizeDiv = (800 / sizeNewGrid) - 2;
    const divNumbers = sizeNewGrid * sizeNewGrid;

    for(let i = 0; i < divNumbers; i++) {
        const gridInsertion = document.createElement('div');
        gridInsertion.style.border = '1px solid black';
        gridInsertion.style.width = sizeDiv+'px';
        gridInsertion.style.width = sizeDiv+'px';
        gridInsertion.addEventListener('mouseover', changeColorTrail);
        gridContainer.appendChild(gridInsertion);
    }
}

function removeAllChildren(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}