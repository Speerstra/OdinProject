
const CHOICES = [
    {name: "rock",
     icon: '✊', 
     beats: "scissors"}, 
    {name: "paper",
     icon: '✋',
     beats: "rock"}, 
    {name: "scissors",
     icon: '🤟',
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
const resultDiv = document.querySelector('.result');

document.querySelector('#reset-view').style.display = 'none';
document.querySelector('#game-view').style.display = 'block';



resetButton.addEventListener('click', () => resetGame())
generateChoiceButtons()

function generateChoiceButtons()
	{
	   for(var i=0; i<CHOICES.length; i++)
	   {
        var choice = CHOICES[i];
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class",'selection-button');
        btn.setAttribute("id",choice.name);
        btn.innerHTML = choice.icon;
        buttonsDiv.appendChild(btn);
    	}
    };
const selectionButtons = document.querySelectorAll('.selection-button');
selectionButtons.forEach(selection => {
    selection.addEventListener('click', (e) => game(e));
});
function isGameOver(roundsPlayed, roundsPerGame) {
    if (roundsPlayed > roundsPerGame) {
        return true;
    }
}

function getComputerSelection(CHOICES) {
    const index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index].name;
}

function getSymbol(selection) {
    for (const choice of CHOICES) {
        if (choice.name === selection) {
            return choice.icon;
        }
    }
    return null;
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

function isWinner(selectionOne, selectionTwo) {
    const selectionOneObj = CHOICES.find(choice => choice.name === selectionOne);
    const selectionTwoObj = CHOICES.find(choice => choice.name === selectionTwo);

    return selectionOneObj.beats === selectionTwoObj.name;
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
        resultDiv.innerText = `Tie!`
    } else {
        resultDiv.innerText = `${roundWinner.charAt(0).toUpperCase() + roundWinner.slice(1)} won!`
    }
}

function displaySelections(playerSelection, computerSelection) {
    playerSelectionIcon = document.createElement('div')
    playerSelectionIcon.innerText = getSymbol(playerSelection)
    if (isWinner(playerSelection, computerSelection)) {
        playerSelectionIcon.classList.add('winner')
    }
    playerSelectionDiv.prepend(playerSelectionIcon)

    computerSelectionIcon = document.createElement('div')
    computerSelectionIcon.innerText = getSymbol(computerSelection)
    if (isWinner(computerSelection, playerSelection)) {
        computerSelectionIcon.classList.add('winner')
    }
    computerSelectionDiv.prepend(computerSelectionIcon)
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
    resultDiv.innerHTML = ''
    clearDiv(computerScoreDiv)
    clearDiv(playerScoreDiv)
    clearDiv(playerSelectionDiv)
    clearDiv(computerSelectionDiv)

    document.querySelector('#reset-view').style.display = 'none';
    document.querySelector('#game-view').style.display = 'block';
}

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function displayGameWinner(playerScore, computerScore) {
    gameWinnerDiv = document.querySelector('.game-winner');
    document.querySelector('#reset-view').style.display = 'block';
    document.querySelector('#game-view').style.display = 'none';
    if (playerScore === computerScore) {
        gameWinnerDiv.innerText = `Its a tie`
    } else if (playerScore > computerScore) {
        gameWinnerDiv.innerText = `Yay, you won!`
    } else {
        gameWinnerDiv.innerText = `Ah, the computer won.`
    }
}