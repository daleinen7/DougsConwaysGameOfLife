/*----- constants -----*/
const GRIDHEIGHT = 10;
const GRIDWIDTH = 10;
const GRIDCOLOR = 'var(--grid-color)';
const BOXCOLOR = 'var(--box-color)';
const MAINCOLOR = 'var(--bg)';
const BOXSIZE = 'var(--box-size)';

/*----- app's state (variables) -----*/
let grid = [];

/*----- cached element references -----*/
/*----- event listeners -----*/
const btn = document.querySelector('button');
const board = document.querySelector('main')

/*----- functions -----*/
// init
function init() {
    // make main board
    board.style.width = GRIDWIDTH * BOXSIZE + (GRIDWIDTH + 1)
    board.style.height = GRIDHEIGHT * BOXSIZE + (GRIDHEIGHT + 1)

    // create grid
    for (let i = 0; i < GRIDWIDTH * GRIDHEIGHT; i++) {

    }
    // set grid to 0

}

// gen
    //

// render

init();
