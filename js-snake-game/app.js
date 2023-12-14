// general html elements 
const board = document.getElementById('board');
const  scoreBoard = document.getElementById('score-board');
const startBtn = document.getElementById('start');
const gameOvertAlert = document.getElementById('game-over');

// settings 
const boardSize = 10;
const gamingSpeed = 100;
const squareType = {
    empty: 0,
    snake: 1,
    food: 2
};

// movement 
const movementDirection = {
    up: -10,
    down: 10,
    right:1,
    left: -1
}

// game var 
let snake;
let score;
let direction;
let boardInfo; // boardSquares;
let emptySpace = [];
let movementInterval;

// functionality and events
const createBoard = () => {
    boardInfo.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            const squareValue = `${rowIndex}${columnIndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySpace.push(squareValue);
        });
    });
};

const createSnake = (square, type) => {
  
    const [ row, column ] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class', `square ${type}`);

    if(type === 'emptySquare') {
        emptySquares.push(square);
    } else {
        if(emptySquares.indexOf(square) !== -1) {
            emptySquares.splice(emptySquares.indexOf(square), 1);
        }
    }
}

const setGame = () => {
    snake = ['00', '01', '02','03'];
    score = snake.length;
    direction = 'right'
    boardInfo = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareType.empty));
    console.log(boardInfo) 
    board.innerHTML = '';
    emptySpace = [];
    createBoard()
}
const startGame = () => {
    setGame();
    gameOversign.style.display = 'none';
    startBtn.disabled = true;
    createSnake();
}

startBtn.addEventListener('click', startGame);


