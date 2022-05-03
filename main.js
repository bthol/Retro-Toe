//start_line
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
  let arr = [];
  for (let i = 0; i < 9; i++) {
    const items = document.querySelector(`#s${i} p`);
    arr.push(items.textContent);
  }
  console.log(arr);
  let bool = false;
  for (let i = 0; i < wins.length; i++) {
    //get indexes of duplicates in arr
    //search for winning indexes in duplicates (irrespective of order or length)
    if (wins[i] === arr[i]) {
      if (turn === 1) {
        document.querySelector(`#msg1`).innerText = "Player 1 Wins!";
      } else {
        document.querySelector(`#msg1`).innerText = "Player 2 Wins!";
      }
    } else {
      bool = true;
    }
  }
  if (bool = true) {
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
};

init();

//end_line