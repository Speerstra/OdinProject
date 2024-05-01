
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

const aiPlayer = () => {

        const utility = (board) => {
                if (board.getWinner() == 'X') {
                        return 1;
                } if (board.getWinner() == 'O') {
                        return -1;
                } else {
                        return null;
                }
        }

        
        function minimax(board) {
                if (terminal(board)) {
                        return null;
                } else if (player(board) === 'X') {
                        const [_, bestAction] = maxPlayer(board);
                        return bestAction;
                } else {
                        const [_, bestAction] = minPlayer(board);
                        return bestAction;
                }
        }

        function maxPlayer(board) {
                if (terminal(board)) {
                    return [utility(board), null];
                }
            
                let scores = {};
                for (let action of actions(board)) {
                    let [score, _] = minPlayer(result(board, action));
                    scores[action] = score;
                }
            
                let bestAction = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
                let bestScore = Math.max(...Object.values(scores));
                return [bestScore, bestAction];
            }
            
            function minPlayer(board) {
                if (terminal(board)) {
                    return [utility(board), null];
                }
            
                let scores = {};
                for (let action of actions(board)) {
                    let [score, _] = maxPlayer(result(board, action));
                    scores[action] = score;
                }
            
                let bestAction = Object.keys(scores).reduce((a, b) => scores[a] < scores[b] ? a : b);
                let bestScore = Math.min(...Object.values(scores));
                return [bestScore, bestAction];
            }
        
}
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
                
                const winner = getWinner(board.getBoard());
                if (winner) {
                        display.setMessage(`${winner} won!`);
                        getActivePlayer().incrementScore();
                        display.updateScore()
                        resetGame();
                } 

                const emptyCells = board.getEmptyCells();
                if (emptyCells.length == 0) {
                        display.setMessage('Tie!');
                        return;
                }
            
                changeTurn();
        };

        const isTerminal = function() {
                if
        }
        const resetGame = function() {
                let activePlayer = players[0];
                board.resetBoard()
        }

        return {
                getPlayerScores,
                playRound,
                resetGame
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
                        cells[i].textContent = token;
                        cells[i].classList.add = token;
                }
        };

        const setMessage = (message) => {
                messageDiv.textContent = message
        }


        const updateScore = () => {
                const scores = game.getPlayerScores()
                scoreDivs.forEach((scoreDiv, index) => {
                        scoreDiv.textContent = `Player ${index + 1}: ${scores[index]}`;
                });

        }

        // Event listeners
        cells.forEach((cell)=>
        cell.addEventListener('click', (e) => {
                        cellIndex = parseInt(e.target.dataset.index);
                        game.playRound(cellIndex);
                        displayBoard();
                        updateScore();
                })
        );

        resetButton.addEventListener('click', () => {
                game.resetGame();
                displayBoard();
        });
        
        return {
                setMessage,
                updateScore
            };
})();

