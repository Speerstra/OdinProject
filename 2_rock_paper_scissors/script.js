
const CHOICES = ["rock", "paper", "scissors"];
const roundsPerGame = 5
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

const selectionButtons = document.querySelectorAll('.selection-button');
let gameWinnerDiv = document.querySelector('.game-winner')

selectionButtons.forEach(button => {
    button.addEventListener('click', (e) => getPlayerSelection(e));
});

function isGameOver(roundsPlayed, roundsPerGame) {
    if (roundsPlayed > roundsPerGame) {
        return true;
    }
}

function getComputerSelection(CHOICES) {
    const index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index];
}

function getPlayerSelection(button) {
    let playerSelection = button.target.id;
    console.log(playerSelection)
    game(playerSelection)
}

function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {  
        return 'tie';
    } else if (playerSelection === CHOICES[0] && computerSelection === CHOICES[1]) {
        return 'player';
    } else if (playerSelection === CHOICES[1] && computerSelection === CHOICES[2]) {
        return 'player';
    } else if (playerSelection === CHOICES[2] && computerSelection === CHOICES[0]) {
        return 'player';
    } else {
        return 'computer';
    }
}

function incrementRoundsPlayed() {
    roundsPlayed+=1
    return roundsPlayed
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerScore +=1
    } else if (winner === 'player') {
        playerScore += 1
        console.log(playerScore)
    }
}

function displayRoundWinner(roundWinner) {
    const result = document.querySelector('.result');
    if (roundWinner === 'tie') {
        result.innerHTML = `It's a tie!`
    } else {
        result.innerHTML = `${roundWinner} won!`
    }
    
}

function displayGameWinner(winner) {
    gameWinnerDiv.innerHTML = `${winner} won the game!`
}

function game(playerSelection) {
    const computerSelection = getComputerSelection(CHOICES)
    const roundWinner = getRoundWinner(playerSelection, computerSelection)
    displayRoundWinner(roundWinner)
    incrementRoundsPlayed(roundsPlayed)
    updateScore(roundWinner)
    if (isGameOver(roundsPlayed, roundsPerGame)) {
        displayGameWinner(roundWinner)
    }
}
    


