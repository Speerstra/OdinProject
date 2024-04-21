
const Gameboard = function() {

        const board = ['', '', '', '', '', '', '', '', '']

        const getBoard = () => board;

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

        const updateBoard = (action, token) => {
                board[action] = token;
                return board;
        };

        const getAvailableActions = function() {
                let actions = []
                for (let i = 0; i < board.length; i++) {
                        if (board[i] == '') {
                                actions.push(i)
                        }        
                }
                return actions;
        }

        return { 
                getBoard, 
                printBoard,
                updateBoard,
                getAvailableActions
        };
}

board = Gameboard()
board.updateBoard(3,'X')
board.updateBoard(2,'O')
board.printBoard()
console.log(board.getAvailableActions())
game = GameController()
game.playRound(8)
game.playRound(0)
game.playRound(7)
game.playRound(1)
game.playRound(6)
game.playRound(2)
game.playRound(3)

function Player(symbol) {
        const name = 'player';
        // const symbol = symbol;

        return {
                name, 
                symbol
        }

}

function GameController() {
        const board = Gameboard();
        const playerX = Player('X')
        const playerO = Player('O')

        const players = [
                {
                  name: playerX,
                  token: 'X'
                },
                {
                  name: playerO,
                  token: 'O'
                }
        ];

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

        let activePlayer = players[0];

        const changeTurn = () => {
                activePlayer = activePlayer === players[0] ? players[1] : players[0];
        };

        const getActivePlayer = () => activePlayer;

        const printNewRound = () => {
                board.printBoard();
                console.log(`${getActivePlayer().token}'s turn.`);
        };

        const playRound = (index) => {
                board.updateBoard(index, getActivePlayer().token);
                
                const winner = getWinner(board.getBoard());
                if (winner) {
                        console.log(`${winner} won!`)
                } 
            
                changeTurn();
                printNewRound();
        };
            
        printNewRound();
              
        return {
                playRound,
                getActivePlayer,
                getWinner
        };
}