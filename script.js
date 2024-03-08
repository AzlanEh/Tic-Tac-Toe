let button = document.getElementsByClassName("box");
let resetButton = document.getElementById("reset");
let displayResult = document.getElementsByClassName("display");
let player_O = document.getElementById("playerO");
let player_X = document.getElementById("playerX");
const tapSound = new Audio("res/sound/tapSound1.mp3");
let flag = 1;

//          Print X or O on Board

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (button[i].innerText == "X" || button[i].innerText == "O") {
      // If the button is already clicked, do nothing
    } else {
      if (flag) {
        button[i].innerText = "X";
        tapSound.play();
        player_O.style.backgroundColor = "#69e969";
        player_X.style.backgroundColor = "blanchedalmond";
        flag = 0;
      } else {
        button[i].innerText = "O";
        tapSound.play();
        player_O.style.backgroundColor = "blanchedalmond";
        player_X.style.backgroundColor = "#69e969";
        flag = 1;
      }

      const winner = check();
      if (winner) {
        displayResult[0].innerText = `${winner} wins!`;
      } else {
        count++;
        if (count === 9) {
          displayResult[0].innerText = "It's a draw!";
        }
      }
    }
  });
}

//        Check Who Win's

// for (let i = 0; i < 3; i++) {
//   if (button[i + 1] == `X` && button[i + 4] == `X` && button[i + 7] == `X`) {
//     console.log(`jj`);
//   }
// }
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

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      button[a].innerText &&
      button[a].innerText === button[b].innerText &&
      button[a].innerText === button[c].innerText
    ) {
      button[a].style.color = "Green";
      button[b].style.color = "Green";
      button[c].style.color = "Green";

      return button[a].innerText; // Return the winning player's symbol
    }
  }

  return null; // Return null if there's no winner
}

//        reset Option

resetButton.addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].innerText = " ";
    player_X.style.backgroundColor = "blanchedalmond";
    player_O.style.backgroundColor = "blanchedalmond";
  }
});

//       Hover effact on Reset Button
resetButton.addEventListener("mouseenter", () => {
  resetButton.style.backgroundColor = "red";
});
resetButton.addEventListener("mouseleave", () => {
  resetButton.style.backgroundColor = "blanchedalmond";
});
