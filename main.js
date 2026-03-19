function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']

  return choices[Math.floor(Math.random() * 3)]
}

const elements = {
  result: document.querySelector('.result'),
  finalResult: document.querySelector('.final-result'),
  humanScore: document.querySelector('.human-score'),
  computerScore: document.querySelector('.computer-score')
}

function playGame() {
  let humanScore = 0
  let computerScore = 0
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      elements.result.textContent = 'Daw!'
    } else if (
      humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
      elements.result.textContent = 'You win!'
      ++humanScore
    } else {
      elements.result.textContent = 'You lose!'
      ++computerScore
    }

    elements.humanScore.textContent = `Human: ${humanScore}`
    elements.computerScore.textContent = `Computer: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
      elements.result.textContent = ''
      elements.humanScore.textContent = ''
      elements.computerScore.textContent = ''

      if (humanScore > computerChoice) {
        elements.finalResult.textContent = "YOU WON!!!"
      } else {
        elements.finalResult.textContent = 'YOU LOST!!!'
      }
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('rock')) {
      playRound('rock', getComputerChoice())
    } else if (e.target.classList.contains('paper')) {
        playRound('rock', getComputerChoice())
    } else if (e.target.classList.contains('scissors')) {
        playRound('scissors', getComputerChoice())
    }
  })
}

playGame()