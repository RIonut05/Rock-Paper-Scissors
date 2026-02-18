const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}

const getHumanChoice = () => {
  return prompt("Pick rock, paper or scissors")
}

let humanScore = 0
let comptuterScore = 0

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice) {
    console.log("Draw!")
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!")
    humanScore++
  } else {
    console.log("You lose!")
    comptuterScore++
  }
}

const playGame = () => {
  let humanScore = 0
  let comptuterScore = 0

  const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice) {
    console.log("Draw!")
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!")
    humanScore++
  } else {
    console.log("You lose!")
    comptuterScore++
  }
}

for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice())
}
console.log(`your score is: ${humanScore}`)
}

playGame()