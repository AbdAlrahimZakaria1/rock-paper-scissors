const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let playerScore = 0;
let pcScore = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function computerSelection() {
  let randomNum = getRandomNumber(1, 4);
  switch (randomNum) {
    case 1:
      return rock;
    case 2:
      return paper;
    case 3:
      return scissors;
    default:
      return "Wrong input";
  }
}

function getPlayerSelection() {
  let playerSelection = this.textContent;
  console.log(playerSelection);
  game(playerSelection);
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  console.log(`player ${playerSelection} ----- pc ${computerSelection}`);
  let winner = "Tie";
  if (playerSelection == rock && computerSelection == paper) winner = "PC";
  else if (playerSelection == rock && computerSelection == scissors)
    winner = "Player";
  else if (playerSelection == paper && computerSelection == rock)
    winner = "Player";
  else if (playerSelection == paper && computerSelection == scissors)
    winner = "PC";
  else if (playerSelection == scissors && computerSelection == rock)
    winner = "PC";
  else if (playerSelection == scissors && computerSelection == paper)
    winner = "Player";
  return winner;
}

function round(playerSelection) {
  let winner = playRound(playerSelection, computerSelection());
  if (winner.toLowerCase() == "pc") {
    pcScore++;
  } else if (winner.toLowerCase() == "player") {
    playerScore++;
  }
  const playerScoreElement = document.querySelector(".player");
  playerScoreElement.textContent = playerScore;
  const PcScoreElement = document.querySelector(".pc");
  PcScoreElement.textContent = pcScore;
}

function game(playerSelection) {
  if (playerScore < 5 && pcScore < 5) {
    round(playerSelection);
  } else {
    let winner = playerScore > pcScore ? "You" : "PC";
    const winnerElement = document.querySelector(".winner");
    winnerElement.textContent = winner;
  }
}

let playButton = document.querySelector(".play .action-button");
playButton.addEventListener("click", gameSimulator);
function gameSimulator(e) {
  let buttons = document.querySelectorAll(".action-choices .action-button");
  buttons.forEach((button) =>
    button.addEventListener("click", getPlayerSelection)
  );
}
