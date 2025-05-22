const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const startBtn = document.querySelector("#start-btn");
const scoreBoard = document.querySelector("header div");
const resultsContainer = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  return new Promise(resolve => {
    rock.addEventListener('click', () => resolve('rock'), { once: true });
    paper.addEventListener('click', () => resolve('paper'), { once: true });
    scissors.addEventListener('click', () => resolve('scissors'), { once: true });
  });
}

function showResult(text) {
  // очищаем предыдущий результат
  resultsContainer.innerHTML = '';

  // создаём новый <div>
  const div = document.createElement('div');
  div.style.cssText = `
    color: rgb(219, 150, 208);
    font-size: x-large;
    font-family: Arial;
    text-align: center;
    margin-top: 1em;
  `;
  div.textContent = text;
  resultsContainer.appendChild(div);
}

async function playGame() {
  scoreBoard.textContent = "Game started! First to 5 wins.";

  while (humanScore < 5 && computerScore < 5) {
    const humanChoice = await getHumanChoice();
    const computerChoice = getComputerChoice();

    showResult(`You chose ${humanChoice}, computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
      showResult("It's a tie!");
    } else if (
      (humanChoice === 'rock'     && computerChoice === 'scissors') ||
      (humanChoice === 'paper'    && computerChoice === 'rock')     ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      showResult("You win this round!");
    } else {
      computerScore++;
      showResult("Computer wins this round!");
    }

    scoreBoard.textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;
    // пауза секунду
    await new Promise(r => setTimeout(r, 1000));
  }

  // финальный результат
  if (humanScore > computerScore) {
    scoreBoard.textContent = "🎉 Congratulations! You won the game!";
  } else {
    scoreBoard.textContent = "💻 Computer won the game. Better luck next time!";
  }
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  startBtn.remove()             // больше не нажимаем старт
  playGame().catch(console.error);
});


