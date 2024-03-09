
const CHOICES = [
    {name: "rock",
     symbol: '✊'}, 
    {name: "paper",
    symbol: '✋'}, 
    {name: "scissors",
    symbol: '✌️'}];


const roundsPerGame = 5
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

const selectionButtons = document.querySelectorAll('.selection-button');
const resetButton = document.querySelector('#reset-button');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const playerSelectionDiv = document.querySelector('.player-selection');
const computerSelectionDiv = document.querySelector('.computer-selection');
const resultDiv = document.querySelector('.result');

document.querySelector('#reset-view').style.display = 'none';
document.querySelector('#game-view').style.display = 'block';


selectionButtons.forEach(selection => {
    selection.addEventListener('click', (e) => game(e));
});

resetButton.addEventListener('click', () => resetGame())

function isGameOver(roundsPlayed, roundsPerGame) {
    if (roundsPlayed > roundsPerGame) {
        return true;
    }
}

function getComputerSelection(CHOICES) {
    const index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index].name;
    
}

function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {  
        return 'tie';
    } else if (playerSelection === CHOICES[0].name && computerSelection === CHOICES[2].name) {
        return 'player';
    } else if (playerSelection === CHOICES[1].name && computerSelection === CHOICES[0].name) {
        return 'player';
    } else if (playerSelection === CHOICES[2].name && computerSelection === CHOICES[1].name) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    roundsPlayed+=1
    const star = document.createElement("div");
    star.innerText= '⭐'
    if (winner === 'player') {
        playerScore +=1
        playerScoreDiv.appendChild(star)

    } else if (winner === 'computer') {
        computerScore += 1
        computerScoreDiv.appendChild(star)
    }
}

function displayRoundWinner(roundWinner) {
    if (roundWinner === 'tie') {
        resultDiv.innerHTML = `Tie!`
    } else {
        resultDiv.innerHTML = `${roundWinner} won!`
    }
}

function displaySelections(playerSelection, computerSelection) {
    playerSelectionIcon = document.createElement('div')
    playerSelectionIcon.innerText = playerSelection
    playerSelectionDiv.after(playerSelectionIcon)

    computerSelectionIcon = document.createElement('div')
    computerSelectionIcon.innerText = computerSelection
    computerSelectionDiv.after(computerSelectionIcon)
}

function game(button) {
    let playerSelection = button.target.id;
    const computerSelection = getComputerSelection(CHOICES)
    const roundWinner = getRoundWinner(playerSelection, computerSelection)
    displayRoundWinner(roundWinner)
    displaySelections(playerSelection, computerSelection)
    updateScore(roundWinner)
    if (isGameOver(roundsPlayed, roundsPerGame)) {
        displayGameWinner(playerScore, computerScore)
    }
}
    
function resetGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#reset-view').style.display = 'none';
    document.querySelector('#game-view').style.display = 'block';
    computerScoreDiv.innerHTML = ``
    playerScoreDiv.innerHTML = ``
}

function displayGameWinner(playerScore, computerScore) {
    gameWinnerDiv = document.querySelector('.game-winner');
    document.querySelector('#reset-view').style.display = 'block';
    document.querySelector('#game-view').style.display = 'none';
    if (playerScore === computerScore) {
        gameWinnerDiv.innerHTML = `Its a tie`
    } else if (playerScore > computerScore) {
        gameWinnerDiv.innerHTML = `Yay, you won!`
    } else {
        gameWinnerDiv.innerHTML = `Ah, the computer won.`
    }
}