
const CHOICES = ["rock", "paper", "scissors"];
const roundsPerGame = 5
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

const selectionButtons = document.querySelectorAll('.selection-button');
const resetButton = document.querySelector('#reset-button')

document.querySelector('#reset-view').style.display = 'none';
document.querySelector('#game-view').style.display = 'block';


let gameWinnerDiv = document.querySelector('.game-winner')

selectionButtons.forEach(button => {
    button.addEventListener('click', (e) => getPlayerSelection(e));
});

resetButton.addEventListener('click', () => resetGame())

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


function updateScore(winner) {
    roundsPlayed+=1
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

function displayGameWinner(playerScore, computerScore) {
    const result = document.querySelector('.result');
    document.querySelector('#reset-view').style.display = 'block';
    document.querySelector('#game-view').style.display = 'none';
    if (playerScore === computerScore) {
        result.innerHTML = `Its a tie ${resetButton}`
    } else if (playerScore > computerScore) {
        result.innerHTML = `Yay, you won! ${resetButton}`
    } else {
        result.innerHTML = `Ah, the computer won. ${resetButton}`
    }
}

function resetGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#reset-view').style.display = 'none';
    document.querySelector('#game-view').style.display = 'block';
}


function game(playerSelection) {
    const computerSelection = getComputerSelection(CHOICES)
    const roundWinner = getRoundWinner(playerSelection, computerSelection)
    displayRoundWinner(roundWinner)
    updateScore(roundWinner)
    if (isGameOver(roundsPlayed, roundsPerGame)) {
        displayGameWinner(playerScore, computerScore)
    }
}
    


