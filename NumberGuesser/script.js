let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let max = 10;
  target =  Math.floor(Math.random()*max);
  return target 
}

const compareGuesses = (human,computer,secret) => {
  human_score = Math.abs(secret - human);
  computer_score = Math.abs(secret - computer);
  return human_score <= computer_score;
}

//humanScore1 === 0;
//computerScore1 === 0;
const updateScore = (winner) => {
  // increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore — the string passed in will be either 'human' or 'computer'
  switch (winner) {
    case 'human':
      return humanScore += 1;
    case 'computer':
      return computerScore += 1;
  }
}

const advanceRound = () => {
  return currentRoundNumber += 1;
}


