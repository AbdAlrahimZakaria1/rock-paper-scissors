const rock = "rock";
const paper = "paper";
const scissors = "scissors";
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

function playerSelection() {
  let playerInput = prompt("Enter your selection (Rock-Paper-Scissors)");
  playerInput = playerInput.toLowerCase();
  if (
    playerInput !== rock &&
    playerInput !== paper &&
    playerInput !== scissors
  ) {
    console.warn(`Player input is wrong! input is ${playerInput}`);
    return;
  }
  return playerInput;
}

function playRound(playerSelection, computerSelection) {
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

  console.log(
    `player choice: ${playerSelection} - pc choice: ${computerSelection} - winner is: ${winner}`
  );
  return winner;
}

function round() {
  console.log(`score is: Player ${playerScore} - PC ${pcScore}`);
  let winner = playRound(playerSelection(), computerSelection());
  if (winner.toLowerCase() == "pc") {
    pcScore++;
  } else if (winner.toLowerCase() == "player") {
    playerScore++;
  } else round();

  // TODO
  // the score variables here dont override global variables - we need to do something about that
}
function game() {
  round();
  round();
  round();
  round();
}
