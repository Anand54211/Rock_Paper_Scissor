console.log("test")

const choices = ["rock", "paper", "scissors"];
let humanScore = 0
let computeScore = 0

function getComputerChoice() {
  
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//console.log(getComputerChoice())

function getHumanChoice() {
 
  let input = prompt("Please enter rock, paper, or scissors:");

  while (!choices.includes(input)) {
    input = prompt("Invalid input. Please enter rock, paper, or scissors:");
  }

  return input;
}

//console.log(getHumanChoice()); // Output: "rock", "paper", or "scissors" based on user input

function playRound(humanChoice, computerChoice){

  if(humanChoice === computerChoice){
    console.log("tie")
  }
  else if((humanChoice == "rock" && computerChoice == "scissors")
  || (humanChoice == "scissors" && computerChoice == "paper")
|| (humanChoice == "paper" && computerChoice == "rock")){
    console.log("human wins")
    humanScore++
  } else{
    console.log("computer wins")
    computeScore++
  }
  

  

}

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

playRound(humanSelection,computerSelection)


console.log("human score = " + humanScore +
  "computer score = " + computeScore
)