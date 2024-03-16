const buttons = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
const displayResult = document.querySelector(".display");
const player_O = document.getElementById("playerO");
const player_X = document.getElementById("playerX");
const tapSound = new Audio("res/sound/tapSound1.mp3");

let gameOver = false;
let currentPlayer = "X";

//          Start Game

// What will print when button is click

function clickXO(event) {
  const button = event.target;

  if (button.innerText !== "" || gameOver) return;
  // If the button is already clicked Do nothing

  button.innerText = currentPlayer;
  tapSound.play();
  //change player
  currentPlayer = currentPlayer === `X` ? `O` : `X`;

  //if O turn
  playerO.style.backgroundColor =
    currentPlayer === "O" ? "#69e969" : "blanchedalmond";
  //if X turn
  playerX.style.backgroundColor =
    currentPlayer === "X" ? "#69e969" : "blanchedalmond";

  const winner = check();
  if (winner) {
    displayResult.innerText = `${winner} wins!`;
    gameOver = true;
  } else if ([...buttons].every((button) => button.innerText !== ``)) {
    displayResult.innerText = `It's a draw!`;
    gameOver = true;
  }
}

//           Check Who Win's

function check() {
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      buttons[a].innerText &&
      buttons[a].innerText === buttons[b].innerText &&
      buttons[a].innerText === buttons[c].innerText
    ) {
      buttons[a].style.color = "Green";
      buttons[b].style.color = "Green";
      buttons[c].style.color = "Green";

      return buttons[a].innerText; // Return the winning player's symbol
    }
  }

  return null; // Return null if there's no winner
}

//          Print X or O on Board
buttons.forEach((button) => button.addEventListener("click", clickXO));

//            reset Option

resetButton.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerText = ``;
    button.style.color = `black`;
    gameOver = false;
  });

  player_X.style.backgroundColor = "blanchedalmond";
  player_O.style.backgroundColor = "blanchedalmond";
  currentPlayer = `X`;
  displayResult.innerText = ``;
});

//           Hover effact on Reset Button
resetButton.addEventListener("mouseenter", () => {
  resetButton.style.backgroundColor = "red";
});
resetButton.addEventListener("mouseleave", () => {
  resetButton.style.backgroundColor = "blanchedalmond";
});
