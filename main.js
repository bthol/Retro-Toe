
/*----- constants -----*/
const wins = [];

/*----- app's state (variables) -----*/
let turn;
let winner;
let boardState;

/*----- cached element references -----*/
const board = document.querySelector('#board');

/*----- event listeners -----*/
board.addEventListener("click", clickFunct);

/*----- functions -----*/
init();

function init() {
  boardState = [0,0,0,0,0,0,0,0,0];
  turn = 1;
  // winTest();
  // turnHandler();
};

function clickFunct(e) {
  boardState[e.target.id] = e.target.id;
  document.querySelector(e.target)
};

function turnHandler() {
  const turnMsg = document.querySelector("#msg1");
  if (turn === 1) {
    turnMsg.innerText = "Player 1's Turn";
  } else {
    turnMsg.innerText = "Player 2's Turn";
  }
  turn = turn * -1;
};
