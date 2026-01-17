const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameOver = false;

const winPatterns = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
];

submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return;

  document.getElementById("player1").style.display = "none";
  document.getElementById("player2").style.display = "none";
  submitBtn.style.display = "none";

  board.style.display = "grid";
  currentPlayer = player1;
  message.textContent = `${currentPlayer}, you're up`;
});

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameOver || cell.textContent !== "") return;

    cell.textContent = currentSymbol;

    if (checkWin()) {
      message.textContent = `${currentPlayer} congratulations you won!`;
      gameOver = true;
      return;
    }

    if (currentSymbol === "x") {
      currentSymbol = "o";
      currentPlayer = player2;
    } else {
      currentSymbol = "x";
      currentPlayer = player1;
    }

    message.textContent = `${currentPlayer}, you're up`;
  });
});

function checkWin() {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).textContent === currentSymbol
    )
  );
}
