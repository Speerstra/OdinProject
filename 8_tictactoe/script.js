
const player = (token) => {

        const getToken = () => token;

        let score = 0;
        const incrementScore = () => ++score;
        const getScore = () => score;
        const resetScore = () => (score = 0);

        return {
                getToken,
                incrementScore,
                getScore,
                resetScore
        }
};

const board = (() => {

        let board = ['', '', '', '', '', '', '', '', ''];

        const getBoard = () => board;

        const resetBoard = () => {
                board = ['', '', '', '', '', '', '', '', ''];
        };

        const getCell = (index) => {
                return board[index];
        }

        const setCell = (index, token) => {
                board[index] = token;
                return board;
        };

        const isEmptyCell = (index) => {
                return board[index] == '';
        };

        const getEmptyCells = function() {
                let emptyCells = [];
                for (let i = 0; i < board.length; i++) {
                        if (board[i] == '') {
                                emptyCells.push(i)
                        }   
                }
                return emptyCells;
        };

        return { 
                getBoard, 
                resetBoard,
                getCell,
                setCell,
                isEmptyCell,
                getEmptyCells
        };
})();


const game = (() => {
    
        const players = [player('X'), player('O')];

        let activePlayer = players[0];

        const changeTurn = () => {
                activePlayer = activePlayer === players[0] ? players[1] : players[0];
        };

        const getActivePlayer = () => activePlayer;

        const getPlayerScores = () => [players[0].getScore(), players[1].getScore()]

        const getWinner = function(board) {
                const lines = [
                    [0,1,2], [3,4,5], [6,7,8],  //horizontals
                    [0,3,6], [1,4,7], [2,5,8],  //verticals
                    [0,4,8], [2,4,6]            //diagonals
                ];
            
                for (const line of lines) {
                        if (board[line[0]] === '') {
                                continue;
                        }
                        if (board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
                                return board[line[0]]; //return winner
                        }
                }
                return null; 
        }

        const playRound = function(index) {
                if (!board.isEmptyCell(index)) {
                        console.log('Invalid move, try again!')
                        return;
                } 

                board.setCell(index, getActivePlayer().getToken());
                display.displayBoard();
                
                const handleEndGame = function() {
                        display.updateScore();
                        display.disableCellSelection();
                        display.showResetButton();
                }

                const winner = getWinner(board.getBoard());
                if (winner) {
                        display.setMessage(winner);
                        getActivePlayer().incrementScore();
                        handleEndGame();
                } 

                const emptyCells = board.getEmptyCells();
                if (emptyCells.length == 0) {
                        display.setMessage(winner);
                        handleEndGame();
                        return;
                }
            
                changeTurn();
        };

        const resetRound = function() {
                activePlayer = players[0];
                board.resetBoard();
                display.clearBoard();
                display.enableCellSelection();
                display.hideResetButton();
                display.hideMessage();
        }

        return {
                getPlayerScores,
                playRound,
                resetRound
        };
})();


const display = (()=>{

        // Selectors
        const cells = document.querySelectorAll('.cell')
        const resetButton = document.querySelector('.reset-button')
        const messageDiv = document.querySelector('.message')
        const scoreDivs = document.querySelectorAll('.score')

        // Functions
        const displayBoard = () => {
                for (let i = 0; i < cells.length; i++) {
                        token = board.getCell(i)
                        if (token) {
                                cells[i].textContent = token;
                                cells[i].classList.add(token);
                        }
                }
        };

        const clearBoard = () => {
                for (let i = 0; i < cells.length; i++) {
                        cells[i].textContent = '';
                        cells[i].classList = 'cell'; 
                }
        }

        const setMessage = (winner) => {
                if (winner) {
                        messageDiv.textContent = (`${winner} won!`)
                        messageDiv.classList.add(winner);
                } 
                showMesasge();
        }

        const handleCellSelection = (event) => {
                cellIndex = parseInt(event.target.dataset.index);
                game.playRound(cellIndex);
                displayBoard();
                updateScore();
        }

        const enableCellSelection = () => {
                cells.forEach((cell) => {
                        cell.disabled = false;
                });
        };

        const disableCellSelection = () => {
                cells.forEach((cell) => {
                        cell.disabled = true; 
                });
        };

        const updateScore = () => {
                const scores = game.getPlayerScores()
                scoreDivs.forEach((scoreDiv, index) => {
                        scoreDiv.textContent = `${scores[index]}`;
                });

        }

        const showResetButton = () => {
                resetButton.style.display = 'block';
                console.log('handled')
        }

        const hideResetButton = () => {
                resetButton.style.display = 'none';
        }

        const showMesasge = () => {
                messageDiv.style.display = 'block';
        }

        const hideMessage = () => {
                messageDiv.style.display = 'none';
        }

        // Event listeners
        cells.forEach((cell)=>
                cell.addEventListener('click', (e) => {handleCellSelection(e)})
        );

        resetButton.addEventListener('click', () => {
                game.resetRound();
                displayBoard();
        });
        
        return {
                setMessage,
                updateScore,
                displayBoard,
                clearBoard,
                disableCellSelection,
                enableCellSelection,
                showResetButton,
                hideResetButton,
                hideMessage
            };
})();

