"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.getElementById("score_player");
const cpuScore = document.getElementById("score_cpu");

let arr = ["rock", "paper", "scissors"];

////////// PC CHOICE //////////////////

let computerChoice;

/////////// PLAYER CHOICE ////////////////////

let playerChoice = "";

////////// GAME //////////////////////////

let getComputerChoice = function () {
  computerChoice = arr.at(Math.floor(Math.random() * 3));
  if (playerChoice === "rock" && computerChoice !== playerChoice) {
    alert("u won");
  } else alert("u lost");
};
getComputerChoice();

rock.addEventListener("click", () => (playerChoice = "rock"));
paper.addEventListener("click", () => (playerChoice = "paper"));
scissors.addEventListener("click", () => (playerChoice = "scissors"));
