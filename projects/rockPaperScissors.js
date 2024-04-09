const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    return "Invalid input.";
  }
};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'User won!';
  }
  if (userChoice === computerChoice){
    return 'Its a tie!';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'User won!';
    } else{
      return 'Computer won!';
    }
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'User won!';
    } else{
      return 'Computer won!';
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'User won!';
    } else{
      return 'Computer won!';
    }
  }
  
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  console.log(`User Choice is: ${userChoice}`);

  const computerChoice = getComputerChoice();
  console.log(`Computer Choice is: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();