let humanScore = 0;
let computerScore = 0;
let gameOver = false;

let roundResult = document.querySelector("#roundResult");
let gameScore = document.querySelector("#gameScore");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return random;
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
  const choice = ["Камень", "Ножницы", "Бумага"];
  const humanText = choice[humanChoice];
  const computerText = choice[computerChoice];

  const result = compareByCycle(humanChoice, computerChoice);
  if (result === 1) {
    humanScore++;
    roundResult.textContent = `👱: ${humanText}, 
                              🖥️: ${computerText}. 
                              Этот раунд выиграл: ты`;
  } else if (result === -1) {
    computerScore++;
    roundResult.textContent = `👱: ${humanText}, 
                              🖥️: ${computerText}. 
                              Этот раунд выиграл: компьютер`;
  } else {
    roundResult.textContent = `👱: ${humanText},
                               🖥️: ${computerText}.
                                Ничья`;
  }

  gameScore.textContent = `Счет: Ты ${humanScore}, 
                          Компьютер ${computerScore}`;
  updateScore();
}

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
    roundResult.textContent = "Ты победил! Поздравляю, чемпион!";
    roundResult.style.color = "#28a745";
    gameScore.textContent = "Игра окончена";
    gameOver = true;
    addResetButton();
  } else if (computerScore === 5) {
    roundResult.textContent = "Компьютер победил! Ты проиграл, лузер!";
    roundResult.style.color = "#dc3545";
    gameScore.textContent = "Игра окончена";
    gameOver = true;
    addResetButton();
  }
}

function addResetButton() {
  let buttonReset = document.createElement("button");
  buttonReset.textContent = "Новая игра";
  buttonReset.classList.add("reset-btn");
  buttonReset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    roundResult.textContent = "";
    roundResult.style.color = "#333";
    gameScore.textContent = "Счет: Ты 0, Компьютер 0";
    buttonReset.remove();
  });
  document.body.appendChild(buttonReset);
}
