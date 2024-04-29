
const player = (token) => {

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

        const isEmptyCell = function(index) {
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


const gameController = (() => {
    
        const players = [player('X'), player('O')];

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

        const playRound = (index) => {

                if (!board.isEmptyCell(index)) {
                        console.log('Invalid move, try again!')
                        return;
                } 

                board.setCell(index, getActivePlayer().getToken());
                
                const winner = getWinner(board.getBoard());
                if (winner) {
                        console.log(`${winner} won!`)
                        getActivePlayer().increaseScore();
                        console.log(`${getActivePlayer().getScore()}`);
                        board.resetBoard();
                } 

                const emptyCells = board.getEmptyCells();
                if (emptyCells.length == 0) {
                        console.log('Tie!')
                        return;
                }
            
                changeTurn();
        };

        return {
                playRound
        };
})();


const displayController = (()=>{

        const cells = document.querySelectorAll('.cell')
        const quitButton = document.querySelector('.quit-button')
        
        cells.forEach((cell)=>
                cell.addEventListener('click', (e)=>{
                        cellIndex = parseInt(e.target.dataset.index);
                        gameController.playRound(cellIndex);
                        displayBoard();
                })
        );

        

        const displayBoard = () => {
                for (let i = 0; i < cells.length; i++) {
                        token = board.getCell(i)
                        cells[i].textContent = token;
                        cells[i].classList.add = token;
                }
        };

        const clearBoard = () => {
                for (let i = 0; i < cells.length; i++) {
                        board.resetBoard()
                        cells[i].textContent = ''; 
                        cells[i].className = 'cell';
                }
        }
        quitButton.addEventListener('click', clearBoard)

})();

