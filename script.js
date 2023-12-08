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

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));

function getComputerChoice() {
  computerChoice = arr.at(Math.floor(Math.random() * 3));
  return computerChoice;
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

    getComputerChoice();

    ////////////// draw /////////////////
  } else {
    log.textContent = `Player: ${player}, CPU: ${computer} = it's a draw!`;

    getComputerChoice();
    return;
  }
}

reset.addEventListener("click", function () {
  playerScoreHTML.textContent = 0;
  cpuScoreHTML.textContent = 0;
  log.textContent = "";
});
