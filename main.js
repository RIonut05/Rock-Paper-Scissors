function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']

  return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
  return prompt('Choose your wepon').toLowerCase()
}

function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log('Draw!')
    } else if (
      humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
      console.log('You win!')
      ++humanScore
    } else {
      console.log('You lose!')
      ++computerScore
    }

    console.log(`human: ${humanScore} - computer: ${computerScore}`)
  }

  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  if (humanScore === computerScore) {
    console.log('Final result: DRAW!')
  } else if (humanScore > computerScore) {
    console.log('Final result: YOU WIN!')
  } else {
    console.log('YOU LOSE!')
  }
}

playGame()