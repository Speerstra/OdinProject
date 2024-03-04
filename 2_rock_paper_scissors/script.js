
const CHOICES = ["rock", "paper", "scissors"];
const roundsPerGame = 5
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

const selectionButtons = document.querySelectorAll('.selection-button');
const resetButton = document.querySelector('#reset-button')
const playerScoreDiv = document.querySelector('#player-score')
const computerScoreDiv = document.querySelector('#computer-score')
const computerSelection = document.querySelector('.computer-selection-hi')
document.querySelector('#reset-view').style.display = 'none';
document.querySelector('#game-view').style.display = 'block';


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
    animateComputerSelection(index)
    return CHOICES[index];
}

function animateComputerSelection(index) {
    const computerSelections = document.querySelectorAll('.computer')
    computerSelections.forEach(button => {
        button.style.animation = '';
    });
    const selection = document.querySelector(`.computer:nth-of-type(${index + 1})`);
    selection.style.animation = 'fade 2.5s linear';
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
    const node = document.createElement("div");
    node.innerHTML= '⭐'
    if (winner === 'computer') {
        computerScore +=1
        computerScoreDiv.appendChild(node)
    } else if (winner === 'player') {
        playerScore += 1
        playerScoreDiv.appendChild(node)
    }
}

function displayRoundWinner(roundWinner) {
    const result = document.querySelector('.result');
    if (roundWinner === 'tie') {
        result.innerHTML = `Tie!`
    } else {
        result.innerHTML = `${roundWinner} won!`
    }
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

function resetGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#reset-view').style.display = 'none';
    document.querySelector('#game-view').style.display = 'block';
    computerScoreDiv.innerHTML = ``
    playerScoreDiv.innerHTML = ``
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
    


