let currentPlayer = 'X'; // The initial player is set to X
let gameActive = true; // Indicates if the game is responsive and is accepting moves
let gameState = ['', '', '', '', '', '', '', '', '',]; // Made an Array that keeps track of the board state
let scoreX = localStorage.getItem('scoreX') ? parseInt(localStorage.getItem('scoreX')) : 0; // Tracks the score form player X and retrieves it from local storage 
let scoreO = localStorage.getItem('scoreO') ? parseInt(localStorage.getItem('scoreO')) : 0; // Tracks the score form player O and retrieves it from local storage

const winningConditions = [
    [0, 1, 2], // Set the winning conditions for the top row
    [3, 4, 5], // Set the winning conditions for the middle row
    [6, 7, 8], // Set the winning conditions for the bottom row
    [0, 3, 6], // Set the winning conditions for the first column
    [1, 4, 7], // Set the winning conditions for the second column
    [2, 5, 8], // Set the winning conditions for the third column
    [0, 4, 8], // Set the winning conditions for the top left to bottom right diagonal
    [2, 4, 6], // Set the winning conditions for the top right to bottom left diagonal
];