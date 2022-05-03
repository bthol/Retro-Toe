//start_line

const wins = [];
let turn;
let winner;
let boardState;

const board = document.querySelector('#board').addEventListener("click", clickFunct);
const btnReset = document.querySelector(`#btn1`).addEventListener("click", init);

init();
function init() {
  boardState = [0,0,0,0,0,0,0,0,0];
  turn = 1;
  turnDisplay();
};

function clickFunct(e) {
  boardState[e.target.id] = e.target.id;
  console.log(boardState);
};

function turnDisplay() {
  if (turn === 1) {
    document.querySelector(`#msg1`).innerText = "Player 1's Turn";
  } else {
    document.querySelector(`#msg1`).innerText = "Player 2's Turn";
  }
};

//end_line