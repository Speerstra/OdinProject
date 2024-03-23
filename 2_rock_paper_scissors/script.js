const CHOICES = [
    {name: "rock",
     icon: '🪨', 
     beats: "scissors"}, 
    {name: "paper",
     icon: '📋',
     beats: "rock"}, 
    {name: "scissors",
     icon: '✂️',
     beats: "paper"}];

const roundsPerGame = 5
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

const buttonsDiv = document.querySelector('.buttons');
const resetButton = document.querySelector('#reset-button');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const playerSelectionDiv = document.querySelector('#player-selection');
const computerSelectionDiv = document.querySelector('#computer-selection');
const messageDiv = document.querySelector('.message')
const resultDiv = document.querySelector('.result');


function generateChoiceButtons()
	{
	   for(var i=0; i<CHOICES.length; i++)
	   {
        var choice = CHOICES[i];
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class",'selection-button');
        btn.setAttribute("id",choice.name);
        btn.innerHTML = choice.icon;
        btn.addEventListener('click', (e) => game(e));
        buttonsDiv.appendChild(btn);
    	}
    };

generateChoiceButtons()

function game(button) {
    let playerSelection = button.target.id;
    const computerSelection = getComputerSelection(CHOICES)
    const roundWinner = getRoundWinner(playerSelection, computerSelection)
    updateScore(roundWinner)
    if (isGameOver(roundsPlayed, roundsPerGame)) {
        displayGameWinner(playerScore, computerScore)
    }
}

function getComputerSelection(CHOICES) {
    const index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index].name;
}

function getRoundWinner(playerSelection, computerSelection) {
    playerSelectionObj = CHOICES.find(choice => choice.name === playerSelection)
    computerSelectionObj = CHOICES.find(choice => choice.name === computerSelection)
    if (playerSelection === computerSelection) {  
        messageDiv.innerHTML = `Tie on ${playerSelectionObj.icon}`
        return 'tie';
    } else if (playerSelectionObj.beats === computerSelectionObj.name) {
        messageDiv.innerHTML = `${playerSelectionObj.icon} beats ${computerSelectionObj.icon}`
        return 'player';
    } else {
        messageDiv.innerHTML = `${playerSelectionObj.icon} lost to ${computerSelectionObj.icon}`
        return 'computer';
    }
}

function updateScore(winner) {
    roundsPlayed+=1
    const star = document.createElement("div");
    star.innerText= '⭐'
    star.setAttribute("class",'star');
    if (winner === 'player') {
        playerScore +=1
        playerScoreDiv.appendChild(star)
    } else if (winner === 'computer') {
        computerScore += 1
        computerScoreDiv.appendChild(star)
    }
}

function isGameOver(roundsPlayed, roundsPerGame) {
    if (roundsPlayed === roundsPerGame) {
        return true;
    }
}

function resetGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    messageDiv.innerHTML = ''
    clearDiv(computerScoreDiv)
    clearDiv(playerScoreDiv)
    // clearDiv(playerSelectionDiv)
    // clearDiv(computerSelectionDiv)
    clearDiv(buttonsDiv)
    generateChoiceButtons()

}

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function displayGameWinner(playerScore, computerScore) {
    clearDiv(buttonsDiv)
    if (playerScore > computerScore) {
        messageDiv.innerHTML = 'You won!'
    } else if (playerScore === computerScore){
        messageDiv.innerHTML = 'You tied'
    } else {
        messageDiv.innerHTML = 'You lost!'
    }
    var resetbtn = document.createElement("BUTTON");
    resetbtn.setAttribute("id", 'reset-button');
    resetbtn.innerHTML = 'Play again';
    resetbtn.addEventListener('click', (e) => resetGame(e));
    buttonsDiv.appendChild(resetbtn);
}