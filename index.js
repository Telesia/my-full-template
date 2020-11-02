// set a varible for each tile in the game html by selecting from dom by class name. 
let tileOne = document.querySelector(".tileOne");
let tileTwo = document.querySelector(".tileTwo");
let tileThree = document.querySelector(".tileThree");
let tileFour = document.querySelector(".tileFour");

//Set an array of tiles and a function to select the tiles in a random order
let tileArray = [tileOne, tileTwo, tileThree, tileFour];

function randomTile() {
    return tileArray[Math.floor(Math.random() * tileArray.length)]; //How to get a random number sequence out of an array
};


//Set an array function calls from the randomTile function. Each time randomTile() is called a randomTile will be
//selected and then be passed into the function to make it flash.  
let sequenceArray = [randomTile(), randomTile(), randomTile(), randomTile()];

// Need to understand promises or make this code my own somehow
function flash(tile) { 
    return new Promise(resolve  => {
        tile.className += " active";
        setTimeout(() => {
            tile.className = tile.className.replace("active", "");
            resolve();
        }, 1000);
    });
};

async function flashTile() {
    for (let tile of sequenceArray) {
        await flash(tile);

    }
};

flashTile();

/*const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector(
'.bottom-left-panel'
);
const bottomRight = document.querySelector(
'.bottom-right-panel'
);

const getRandomPanel = () => {
const panels = [
topLeft,
topRight,
bottomLeft,
bottomRight
];
return panels[parseInt(Math.random() * panels.length)];
};
const sequence = [getRandomPanel()];
let sequenceToGuess = [...sequence];
const flash = panel => {
return new Promise(resolve => {
panel.className += ' active';
setTimeout(() => {
panel.className = panel.className.replace(
' active',
''
);
setTimeout(() => {
resolve();
}, 250);
}, 1000);
});
};
let canClick = false;
const panelClicked = panelClicked => {
if (!canClick) return;
const expectedPanel = sequenceToGuess.shift();
if (expectedPanel === panelClicked) {
if (sequenceToGuess.length === 0) {
// start new round
sequence.push(getRandomPanel());
sequenceToGuess = [...sequence];
startFlashing();
}
} else {
// end game
alert('game over');
}
};
const startFlashing = async () => {
canClick = false;
for (const panel of sequence) {
await flash(panel);
}
canClick = true;
};
startFlashing();*/ 
