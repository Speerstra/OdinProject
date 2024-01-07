
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    /* 
    * Takes an array of choices as input
    * Returns one random selection of the choices as a string
    */
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    /*
    * Input parameters - player and computer selections as strings
    * Returns NULL if tie.
    * Returns true if player wins
    * Returns false if player loses
    */
    if (playerSelection === computerSelection) {
        return null;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return true;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return true;
    } else {
        return false;
    }
}


function game() {
    /*
    * Plays the game until gamesPlayed is equal to roundsToPlay
    * Increments playerScore if player wins a round
    * Round is replayed in case of a tie
     */
    let gamesPlayed = 0;
    let playerScore = 0;
    const roundsToPlay = 5;

    while (gamesPlayed < roundsToPlay) {
        playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
        
        if (!choices.includes(playerSelection)) {
            continue
        } 

        computerSelection = getComputerChoice(choices);
        isPlayerWinner = playRound(playerSelection, computerSelection);
        if (isPlayerWinner === null) {
            console.log(`Tie on ${playerSelection}. Let's play again.`)
        } else if (isPlayerWinner === true) {
            playerScore++;
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`)
            gamesPlayed++;
        } else {
            console.log(`You lost! ${playerSelection} lost to ${computerSelection}.`)
            gamesPlayed++;
        }  
    }
    console.log(`All done! You won ${player_score} out of 5 games.`)
}

game()