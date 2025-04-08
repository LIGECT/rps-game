let humanScore = 0;
let computerScore = 0;

let roundResult = document.querySelector("#roundResult");
let gameScore = document.querySelector("#gameScore");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

// function getHumanChoice() {
//   let choice = prompt("Введите ваш выбор: Камень, Ножницы или Бумага").trim();

//   if (choice === "Камень") return 0;
//   if (choice === "Ножницы") return 1;
//   if (choice === "Бумага") return 2;
// }

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
    roundResult.textContent = "Этот раунд выиграл: ты";
  } else if (result === -1) {
    computerScore++;
    roundResult.textContent = "Этот раунд выиграл: компьютер";
  } else {
    roundResult.textContent = "Ничья";
  }

  gameScore.textContent = `Счет: Ты ${humanScore}, Компьютер ${computerScore}`;

  updateScore();
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     console.log(`Раунд ${i + 1}`);

//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();

//     playRound(humanChoice, computerChoice);
//   }
//   console.log(
//     `Конечный результат: Ты ${humanScore}, Компьютер ${computerScore}`
//   );
// }

// playGame();

let menu = document.querySelector("#choiceMenu");

menu.addEventListener("click", (event) => {
  if (gameOver) return;

  let target = event.target;
  switch (target.id) {
    case "rock":
      playRound(0, getComputerChoice());
      break;
    case "paper":
      playRound(2, getComputerChoice());
      break;
    case "scissors":
      playRound(1, getComputerChoice());
      break;
  }
});

function updateScore() {
  if (humanScore === 5) {
    roundResult.textContent = "Ты победил!";
    gameOver = true;
  } else if (computerScore === 5) {
    roundResult.textContent = "Компьютер победил";
    gameOver = true;
  }
}

let gameOver = false;
