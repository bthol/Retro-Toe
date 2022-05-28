const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]
];

let turn;
let boardState;
let winner = false;
let toggle = true;

if (toggle) {
  const board = document.querySelector('#board').addEventListener("click", clickFunct);
};
const btnReset = document.querySelector(`#btn1`).addEventListener("click", init);

function init() {
  turn = 1;
  winner = false;
  toggle = true;
  boardState = ["a","a","a","a","a","a","a","a","a"];
  for (let i = 0; i < boardState.length; i++) {
    document.querySelector(`#s${i} p`).innerText = "";
  }
  turnDisplay();
};

function boardDisplay(e) {
  boardState[e] = e;
  boardState.forEach(i => {
    if (boardState[i] === i && turn === 1) {
      document.querySelector(`#s${e} p`).innerText = "X";
      boardState[e] = "X";
    }
    if (boardState[i] === i && turn === -1) {
      document.querySelector(`#s${e} p`).innerText = "O";
      boardState[e] = "O";
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
  for (let i = 0; i < wins.length; i++) {
    const arrVals = [];
    for (let j = 0; j < wins[i].length; j++) {
      arrVals.push(boardState[wins[i][j]])
    }
    if (arrVals[0] === arrVals[1] && arrVals[1] === arrVals[2] && arrVals[0] !== "a") {
      winner = true;
    }
  }
  console.log("break")
  if (winner) {
    if (turn === 1) {
      toggle = false;
      document.querySelector(`#msg1`).innerText = "Player 1 Wins!";
    } else {
      toggle = false;
      document.querySelector(`#msg1`).innerText = "Player 2 Wins!";
    }
  } else if (!boardState.includes("a")) {
    toggle = false;
    document.querySelector(`#msg1`).innerText = "Cats Game!";
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
    boardDisplay(index);
    winTest()
  }
};

init();
