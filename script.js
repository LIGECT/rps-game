function getComputerChoice() {
  let choice1 = "Rock";
  let choice2 = "Paper";
  let choice3 = "Scissors";

  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return choice1;
  } else if (random === 1) {
    return choice2;
  } else {
    return choice3;
  }
}

console.log(getComputerChoice());
