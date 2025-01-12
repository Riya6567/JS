/*const board = document.getElementById('board');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function createBoard() {
    gameBoard.forEach((index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-index',index);
        cellElement.addEventListener('click',handleCellClick);
        board.appendChild(cellElement);
    });
}

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] === '' || !gameActive){
        return;
    } 
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkResult();
}
function checkResult() {
    let roundWon = false;

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === '' || gameBoard[b] === '' || gameBoard[c] === '') {
            continue;
        }
        if (gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        message.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }
    if (!gameBoard.includes('')) {
        message.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameBoard = ['','','','','','','','',''];
    message.textContent = '';
    board.innerHTML = '';
    createBoard();
}
restartButton.addEventListener('click', restartGame);
createBoard();
*/
const board = document.getElementById('board');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart');

let boardState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function createBoard() {
    board.innerHTML = '';
    boardState = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    messageDisplay.textContent = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-cell-index', i);
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-cell-index');

    if (boardState[cellIndex] !== '' || !isGameActive) {
        return;
    }

    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] === '' || boardState[b] === '' || boardState[c] === '') {
            continue;
        }
        if (boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageDisplay.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
        return;
    }

    if (!boardState.includes('')) {
        messageDisplay.textContent = 'It\'s a draw!';
        isGameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
restartButton.addEventListener('click', createBoard);
createBoard();
