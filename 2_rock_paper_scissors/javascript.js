
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length);
    console.log(choices[index]);
    return choices[index];
}

getComputerChoice(choices)

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("tie.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("PLAYER WINS");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("PLAYER WINS");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("PLAYER WINS");
    } else {
        console.log("PLAYER LOSES");
    }
}
playRound("paper", getComputerChoice(choices))

function game() {
    let games_played = 0
    while (games_played < 5) {
        playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
        if (!choices.includes(playerSelection)) {
            continue
        } 
        computerSelection = getComputerChoice(choices)
        winner = playRound(playerSelection, computerSelection)
        console.log(winner)
        
    }
}

game()
/*
function game() {
    let playerScore = 0
    let computerScore = 0

    while n_games < 5:
        playerSelection = prompt("Player input").toLowerCase()
        computerSelection = getComputerChoice()
        winner = playRound(playerSelection, computerSelection)

        if winner == player:
            print(f"You won! {playerSelection} beat {computerSelection}")
            playerScore ++
            n_games++
        if winner == computer:
            print(f"You lost! {playerSelection} lost to {computerSelection}")
            computerScore ++
            n_games++
        else:
            playerSelection

        
}

*/
