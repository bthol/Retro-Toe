//start_line

console.log(document.querySelector(`#0 > p`))

const wins = [];
let turn;
let boardState;

const board = document.querySelector('#board');
board.addEventListener("click", clickFunct);
const btnReset = document.querySelector(`#btn1`).addEventListener("click", init);

function init() {
  boardState = ["a","a","a","a","a","a","a","a","a"];
  turn = 1;
  render();
};

function render() {
  boardDisplay();
  turnDisplay();
};

function boardDisplay(e) {
  boardState.forEach(i => {
    if (boardState[i] === i && turn === 1) {
      console.log(turn);
      document.querySelector(`#${e} p`).innerText = "X";
    }
    if (boardState[i] === i && turn === -1) {
      console.log(turn);
      document.querySelector(`#${e} p`).innerText = "O";
    }
  })
};

function turnDisplay() {
  if (turn === 1) {
    document.querySelector(`#msg1`).innerText = "Player 1's Turn";
  } else {
    document.querySelector(`#msg1`).innerText = "Player 2's Turn";
  }
};

function turnChange() {
  turn = turn * -1;
};

function clickFunct(e) {
  let bool = false;
  boardState.forEach(i => {
    if (boardState[e.target.id] === e.target.id) {
      bool = true;
      document.querySelector(`#msg1`).innerText = "Space already taken";
    }
  })
  if (bool === false) {
    boardState[e.target.id] = e.target.id;
    console.log(boardState);
    boardDisplay(e.target.id);
    turnChange();
    turnDisplay();
  }
  bool = false;
};

init();

//end_line