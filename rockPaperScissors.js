

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
  
  //console.log(getUserChoice('Rock'));
  //console.log(getComputerChoice());
  
  function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {return 'tie';}
      if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'You lose.';
      } else {
      return 'Winner! Winner!';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'You lose';
    } else {
      return 'Winner! Winner!';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'You lose.';
    } else {
      return 'Winner! Winner!';
    }
  }
  
  //console.log(determineWinner('rock','rock'));
  //console.log(determineWinner('rock','paper'));
  //console.log(determineWinner('paper','rock'));
  
  function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame()
  
  
  