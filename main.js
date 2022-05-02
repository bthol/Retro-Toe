
/*----- constants -----*/
const wins = [];

/*----- app's state (variables) -----*/
let turn;
let winner;
let boardState;

/*----- cached element references -----*/
const boardEl = document.querySelector('#board');

/*----- event listeners -----*/
boardEl.addEventListener("click", clickFunct(e));

/*----- functions -----*/
init();

function init() {
  boardState = [0,0,0,0,0,0,0,0,0];
  turn = -1;
  renderTurn();
};

function clickFunct(e) {
  console.log("clicked!")
  boardState[e.target] = 1;
};

function render() {
  // winTest();
  turnChange();
}

function turnChange() {
  turn = turn * -1;
  const turnMsg = document.querySelector("#msg1");
  if (turn === 1) {
    turnMsg.innerText = "Player 1's Turn";
  } else {
    turnMsg.innerText = "Player 2's Turn";
  }
};
