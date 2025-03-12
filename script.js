let humanScore = 0;
let computerScore = 0;
let choice1 = "Камень";
let choice2 = "Ножницы";
let choice3 = "Бумага";

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return choice1;
  } else if (random === 1) {
    return choice2;
  } else {
    return choice3;
  }
}

function getHumanChoice() {
  let choice = prompt("Ведите ваш выбор: Камень, Ножницы или Бумага").trim();
  return choice;
}

function playRound(humanChoiсe, computerChoiсe) {
  //code
  humanChoiсe =
    humanChoiсe.at(0).toUpperCase() + humanChoiсe.slice(1).toLowerCase();

  computerChoiсe =
    computerChoiсe.at(0).toUpperCase() + computerChoiсe.slice(1).toLowerCase();

  if (humanChoiсe === computerChoiсe) {
    console.log("Ничья");
    console.log("Счет: " + humanScore + " - " + computerScore);
  } else if (humanChoiсe === "Камень" && computerChoiсe === "Ножницы") {
    humanScore++;
    console.log("Ты выиграл!");
    console.log("Счет: " + humanScore + " - " + computerScore);
  } else if (humanChoiсe === "Ножницы" && computerChoiсe === "Бумага") {
    humanScore++;
    console.log("Ты выиграл!");
    console.log("Счет: " + humanScore + " - " + computerScore);
  } else if (humanChoiсe === "Бумага" && computerChoiсe === "Камень") {
    humanScore++;
    console.log("Ты выиграл!");
    console.log("Счет: " + humanScore + " - " + computerScore);
  } else {
    computerScore++;
    console.log("Компьютер выиграл");
    console.log("Счет: " + humanScore + " - " + computerScore);
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
