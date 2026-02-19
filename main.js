const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}

let humanScore = 0
let computerScore = 0  

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper",getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))

const result = document.querySelector(".result")
const score = document.querySelector(".score")

const playRound = (humanChoice, computerChoice) => {

  if (humanChoice === computerChoice) {
    result.textContent = "Draw!"
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = "You win!"
    ++humanScore
  } else {
    result.textContent = "You lose!"
    ++computerScore
  }

  score.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`

  if (humanScore === 5 || computerScore === 5) {
  const finalResult = document.querySelector(".final-result")
  finalResult.textContent = humanScore === 5 ? "You won!!!!" : "Computer beat you!!!!"
}
}

