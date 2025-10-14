
/*  Using Traditional function syntax */
const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput} 
  else {
    return 'wrong'};
  }

function getComputerChoice() {
  let choice = '';
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0) {
    choice = 'rock';
  } else if (randomNumber === 1) {
    choice = 'paper';
  } else if (randomNumber ===2) {
    choice = 'scissors';
  } { 
    return choice}
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose.';
    } else {
      return 'Winner! Winner!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lose.';
    } else {
      return 'Winner! Winner!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lose.';
    } else {
      return 'Winner! Winner!';
    }
  }

  return 'Invalid input.';
}

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame()


