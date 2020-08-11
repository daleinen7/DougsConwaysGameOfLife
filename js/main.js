/*----- constants -----*/
const GRIDHEIGHT = 10;
const GRIDWIDTH = 10;
const GRIDCOLOR = 'var(--grid-color)';
const BOXCOLOR = 'var(--box-color)';
const MAINCOLOR = 'var(--bg)';
const BOXSIZE = 'var(--box-size)';

/*----- app's state (variables) -----*/
let grid = [];
let generation;

/*----- cached element references -----*/
const btn = document.querySelector('button');
const board = document.querySelector('main');
let boxEls = document.querySelectorAll('.box');

/*----- event listeners -----*/
board.addEventListener('click', bringToLife);
btn.addEventListener('click', gen);

/*----- functions -----*/
// init
function init() {
    generation = 0;

    // make main board
    board.style.width = GRIDWIDTH * BOXSIZE + (GRIDWIDTH + 1);
    board.style.height = GRIDHEIGHT * BOXSIZE + (GRIDHEIGHT + 1);

    // create grid
    for (let i = 0; i < GRIDWIDTH * GRIDHEIGHT; i++) {
        // set grid array to all 0
        grid.push(0);

        // create boxes
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id', 'box' + i);
        box.style.width = BOXSIZE;
        box.style.height = BOXSIZE;
        board.append(box);
    }

    //create elementReference
    boxEls = document.querySelectorAll('.box');

    render();
}

// go to next generation
function gen() {
    const liveNeighbors = getNeighborStatus();
    setTimeout(gen, 1000);
}

// render
function render() {
    grid.forEach((box, i) => {
        if (box == 1) {
            boxEls[i].style.backgroundColor = BOXCOLOR;
        } else {
            boxEls[i].style.backgroundColor = GRIDCOLOR;
        }
    });
}


// life


// death


// get the status of neighboring boxes
function getNeighborStatus() {
    const liveNeighbors = [];

    grid.forEach((box, i) => {
        liveNeighbors.push(0)
        // check top neighbor
        if (grid[i - GRIDWIDTH] === 1) {
            liveNeighbors[i] = liveNeighbors[i] + 1;
        }
        // check bottom neighbor
        if (grid[i + GRIDWIDTH] === 1) {
            liveNeighbors[i] = liveNeighbors[i] + 1;
        }
        // check left neighbor
        if (i % GRIDWIDTH !== 0 && grid[i - 1] === 1) {
            liveNeighbors[i] = liveNeighbors[i] + 1;
        }
        // check right neighbor

        if (i % GRIDWIDTH !== GRIDWIDTH - 1 && grid[i + 1] === 1) {
            liveNeighbors[i] = liveNeighbors[i] + 1;
        }
    });
    return liveNeighbors;
}


// bring cell to life unnaturally
function bringToLife(e) {
    cell = e.target;
    // activate array index
    let box = e.target.id.replace('box', '');
    grid[box] = (grid[box] === 0) ? 1 : 0;
    render();
}


function startSpaceTime() {

}

init();
