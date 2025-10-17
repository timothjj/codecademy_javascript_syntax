// rock-paper-scissors.js

const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'wrong';
  }
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie.';
  }

  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'You lose.' : 'Winner! Winner!';
  }

  if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'You lose.' : 'Winner! Winner!';
  }

  if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'You lose.' : 'Winner! Winner!';
  }
};

function playGame() {
  const userArg = process.argv[2];

  if (!userArg) {
    console.log("Please provide your choice: rock, paper, or scissors.");
    return;
  }

  const userChoice = getUserChoice(userArg);
  if (userChoice === 'wrong') {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return;
  }

  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
