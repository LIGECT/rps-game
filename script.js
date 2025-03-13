let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

function getHumanChoice() {
  let choice = prompt("Введите ваш выбор: Камень, Ножницы или Бумага").trim();

  if (choice === "Камень") return 0;
  if (choice === "Ножницы") return 1;
  if (choice === "Бумага") return 2;
}

function compareByCycle(a, b) {
  if (a === b) return 0;

  if ((a === 0 && b === 1) || (a === 1 && b === 2) || (a === 2 && b === 0)) {
    return 1;
  } else {
    return -1;
  }
}

function playRound(humanChoice, computerChoice) {
  const result = compareByCycle(humanChoice, computerChoice);

  if (result === 1) {
    humanScore++;
    console.log("Ты победил!");
  } else if (result === -1) {
    computerScore++;
    console.log("Компьютер победил");
  } else {
    console.log("Ничья");
  }

  console.log(`Счет: Ты ${humanScore}, Компьютер ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Раунд ${i + 1}`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }
  console.log(
    `Конечный результат: Ты ${humanScore}, Компьютер ${computerScore}`
  );
}

playGame();
