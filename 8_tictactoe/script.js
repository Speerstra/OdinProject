
function Gameboard() {
        let board = ['', '', '', '', '', '', '', '', ''];

        const getBoard = () => board;

        const resetBoard = () => {
                board = ['', '', '', '', '', '', '', '', ''];
        };

        const printBoard = function() {
                for (let i = 0; i < 3; i++) {
                        let row = `${i} |`;
                        for (let j = 0; j < 3; j++) {
                            let index = i * 3 + j;
                            row += ` ${board[index] || ' '} |`;
                        }
                        console.log(row);
                    }
        }

        const updateBoard = (index, token) => {
                board[index] = token;
                return board;
        };

        const getEmptyCells = function() {
                let actions = []
                for (let i = 0; i < board.length; i++) {
                        if (board[i] == '') {
                                actions.push(i)
                        }        
                }
                return actions;
        }

        return { 
                resetBoard,
                getBoard, 
                printBoard,
                updateBoard,
                getEmptyCells
        };
}


// board = Gameboard()
// board.resetBoard()
game = GameController()
game.startGame()


function Player(token) {

        const getToken = () => token;

        let score = 0;
        const increaseScore = () => ++score;
        const getScore = () => score;
        const resetScore = () => (score = 0);

        return {
                getToken,
                increaseScore,
                getScore,
                resetScore
        }

}

function GameController() {
        const board = Gameboard();

        const playerOne = Player('X');
        const playerTwo = Player('O');
    
        const players = [playerOne, playerTwo];

        let activePlayer = players[0];

        const changeTurn = () => {
                activePlayer = activePlayer === players[0] ? players[1] : players[0];
        };

        const getActivePlayer = () => activePlayer;

        function getWinner(board) {
                const lines = [
                    [0,1,2], [3,4,5], [6,7,8], //horizontals
                    [0,3,6], [1,4,7], [2,5,8], //verticals
                    [0,4,8], [2,4,6] //diagonals
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

        const printRound = () => {
                board.printBoard();
                console.log(`${getActivePlayer().getToken()}'s turn.`);
        };

        const playRound = (index) => {
                
                let emptyCells = board.getEmptyCells()

                if (!emptyCells.includes(index)) {
                        console.log('Invalid move, try again!')
                        return;
                } 

                board.updateBoard(index, getActivePlayer().getToken());
                
                const winner = getWinner(board.getBoard());
                if (winner) {
                        board.printBoard();
                        console.log(`${winner} won!`)
                        getActivePlayer().increaseScore();
                        console.log(`${getActivePlayer().getScore()}`);
                        board.resetBoard();
                } 

                if (emptyCells.length == 0) {
                        console.log('Tie!')
                        return;
                }
            
                changeTurn();
                printRound();
        };
        const startGame = function() {
                printRound();
        }  
        return {
                startGame,
                playRound
        };
}

function UiController() {
        
}