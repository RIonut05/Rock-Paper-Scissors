const getComputerChoice = () => {
  const options = ["patra", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}


humanScore = 0
computerScore = 0  

const rock = document.querySelector("#rock")
const paper = ducunent.querySelector("#paper")
const scissors = ducument.querySelector("scissors")

rock.addEventListener("click", (e) => playRound(getComputerChoice))
paper.addEventListener("click", (e) => playRound(getComputerChoice))
scissors.addEventListener("click", (e) => playRound(getComputerChoice))

  const playRound = (computerChoice) => {
  const humanChoice = e.target.textContent

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
    computerScore++
  }
}
