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

document.getElementById('scoreboard-x').innerText = scoreX; // Displays the score for X
document.getElementById('scoreboard-o').innerText = scoreO; // Displays the score for O

function handleCellClick(event) { // Added function that handles the event of a cell being clicked
    const clickedCell = event.target; // The event of the cell being clicked
    const clickedCellIndex = parseInt(clickedCell.getAttribute('id').split('-')[1]); // Identifies which cell is being clicked

    if (gameState[clickedCellIndex] !== '' || !gameActive) { // Checks if the cell that is being clicked has already been clicked before
        return; // Ignores the click if the cell has already been filled
    }

    gameState[clickedCellIndex] = currentPlayer; // Updates the gameState
    clickedCell.innerText = currentPlayer; // Displays the symbol for the current player

    checkResult(); // Is used to Check to see if the game is won or tied
    if (gameActive) { // Will only switch players if the game is still currently active
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switches from player X to O 
        document.getElementById('turn').innerText = currentPlayer; // Displays the current turn
    }
}

function checkResult() { // Added function that Checks the results
    let roundWon = false; // roundWon variable tracks if a round is won
    for (let i = 0; i < winningConditions.length; i++) { // Loop of all possible win conditions
        const winCondition = winningConditions[i]; // Retrieves the current winning conditions
        let a = gameState[winCondition[0]]; // sets the first cell in the win condition
        let b = gameState[winCondition[1]]; // sets the second cell in the win condition
        let c = gameState[winCondition[2]]; // sets the third cell in the win condition
        if (a === '' || b === '' || c === '') { // Moves on to the next condition if any cell in the winning condition is empty
            continue; // Skip the rest of the loop if any cell in the current win condition is empty
        }
        if (a === b && b === c) { // Checks if all cells match the win condition
            roundWon = true; // If all cells match the round is won
            break; // Exits the loop once the round is won
        }
    }

    if (roundWon) { // 
        gameActive = false; // 
        document.getElementById('turn').innerText = `${currentPlayer} Wins!`; //
        if (currentPlayer === 'X') { //
            scoreX++; //
            localStorage.setItem('scoreX', scoreX); //
        } else { //
            scoreO++; //
            localStorage.setItem('scoreO', scoreO); //
        }
        updateScoreboard(); //
        return; //
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        gameActive = false;
        document.getElementById('turn').innerText = 'Tie!';
        return;
    }
}

function updateScoreboard() { // Function that updates the scoreboard
    document.getElementById('scoreboard-x').innerText = scoreX; // Player X's score is updated
    document.getElementById('scoreboard-o').innerText = scoreO; // Player O's score is updated
}

function handleRestartGame() { // Function that restarts he game
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('turn').innerText = currentPlayer;
    document.querySelectorAll('.game-square').forEach(cell => cell.innerText = '');
}

document.querySelectorAll('.game-square').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('button-play-again').addEventListener('click', handleRestartGame);

document.getElementById('turn').innerText = currentPlayer;