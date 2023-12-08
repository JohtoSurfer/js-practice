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
let boardInfo;
let emptySpace;
let movementInterval;

// functionality and events 
const setGame = () => {
    snake = ['00', '01', '02','03'];
    score = snake.length;
    direction = 'right'
    boardInfo = Array.from(Array(boardSize), () => new Array(boardSize).fill.squareType.empty) 
}
const startGame = () => {
    setGame();
}

startBtn.addEventListener('click', startGame);


