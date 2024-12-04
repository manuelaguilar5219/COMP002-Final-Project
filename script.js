let currentPlayer = 'X'; // The initial player is set to X
let gameActive = true; // Indicates if the game is responsive and is accepting moves
let gameState = ['', '', '', '', '', '', '', '', '',] // Made an Array that keeps track of the board state
let scoreX = localStorage.getItem('scoreX') ? parseInt(localStorage.getItem('scoreX')) : 0; // Tracks the score form player X and retrieves it from local storage 
let scoreO = localStorage.getItem('scoreO') ? parseInt(localStorage.getItem('scoreO')) : 0; // Tracks the score form player O and retrieves it from local storage