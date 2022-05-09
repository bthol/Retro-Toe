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
  //are the boardState array values, which return at the indexes of the items in the nested array, all equal to each other? 
  //if so, assign true to winner variable.
  for (let i = 0; i < wins.length; i++) {
    for (let j = 0; j < wins[i].length; j++) {
      //iterates through j before increasing i
      console.log(wins[i][j]);
      //if on the same i index or if j is at a number divisible by the length of the array j iterates through
      if (j % wins[i].length) {
        //use the values at the j index to search the boardState
        
        //if those values equal each other
        //then assign true to winner
        // boardState[wins[i][j]]
      }
    }
  }
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
    boardState[index] = index;
    boardDisplay(index);
    winTest()
  }
};

init();

//end_line