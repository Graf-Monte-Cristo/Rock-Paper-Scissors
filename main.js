function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice;
  do {
    choice = prompt(`Choose one: ${choices.join(', ')}`).toLowerCase();
  } while (!choices.includes(choice));
  return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }
}
function playGame() {
  const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
  for (let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}`);
    playRound();
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game! Better luck next time.");
  } else {
    console.log("It's a tie overall!");
  }
}
playGame();
