//start_line

const wins = [];
let turn;
let boardState;

const board = document.querySelector('#board');
board.addEventListener("click", clickFunct);
const btnReset = document.querySelector(`#btn1`).addEventListener("click", init);

function init() {
  boardState = ["a","a","a","a","a","a","a","a","a"];
  for (let i = 0; i < boardState.length; i++) {
    document.querySelector(`#s${i} p`).innerText = "";
  }
  turn = 1;
  turnDisplay();
};

function boardDisplay(e) {
  boardState.forEach(i => {
    if (boardState[i] === i && turn === 1) {
      document.querySelector(`#s${e} p`).innerText = "X";
    }
    if (boardState[i] === i && turn === -1) {
      document.querySelector(`#s${e} p`).innerText = "O";
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

function winTest() {
  if (boardState === wins) {
    document.querySelector(`#msg1`).innerText = `Player ${turn}'s Wins`;
  } else {
    turnChange();
    turnDisplay();
  }
}

function clickFunct(e) {
  let bool = false;
  const index = JSON.stringify(e.target.id).slice(2, 3);
  boardState.forEach(i => {
    if (boardState[i] === boardState[index]) {
      bool = true;
      document.querySelector(`#msg1`).innerText = "Space already taken";
    }
  })
  if (bool === false) {
    boardState[index] = index;
    boardDisplay(index);
    winTest()
  }
  bool = false;
};

init();

//end_line