"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScoreHTML = document.getElementById("score_player");
const cpuScoreHTML = document.getElementById("score_cpu");

const reset = document.getElementById("reset");
const log = document.getElementById("log");

let arr = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let computerChoice;

////////// GAME //////////////////////////

rock.addEventListener("click", (e) => game(e.target.textContent.toLowerCase()));
paper.addEventListener("click", (e) =>
  game(e.target.textContent.toLowerCase())
);
scissors.addEventListener("click", (e) =>
  game(e.target.textContent.toLowerCase())
);

function getComputerChoice() {
  computerChoice = arr.at(Math.floor(Math.random() * 3));
  return computerChoice;
}

function gameRestart() {
  playerScore = playerScoreHTML.textContent = 0;
  computerScore = cpuScoreHTML.textContent = 0;
  log.textContent = "";
}

function game(player) {
  let computer = getComputerChoice();

  /////// player wins the round //////
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer == "paper")
  ) {
    playerScore++;
    playerScoreHTML.textContent = playerScore;
    log.textContent = `Player: ${player} CPU: ${computer} = you have won this round!`;

    if (playerScore === 5) {
      gameRestart();
      log.textContent = `You have won!`;
    }

    getComputerChoice();

    /////// computer wins the round //////
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer == "rock")
  ) {
    computerScore++;
    cpuScoreHTML.textContent = computerScore;
    log.textContent = `Player: ${player}, CPU: ${computer} = cpu has won this round!`;

    if (computerScore === 5) {
      gameRestart();
      log.textContent = `You have lost!`;
    }

    getComputerChoice();

    ////////////// draw /////////////////
  } else {
    log.textContent = `Player: ${player}, CPU: ${computer} = it's a draw!`;

    getComputerChoice();
    return;
  }
}

/////////// reset the game /////////////////////
reset.addEventListener("click", gameRestart);
