const CHOICES = ['rock', 'paper', 'scissors'];
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice() {    
    // Returns a random value between indexes 0 and 2
    return CHOICES[Math.floor(Math.random() * 3)]; 
}

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = this.id.toLowerCase();
    let resultText = '';

    // Handles cases where the html id values are edited by the user
    if (!CHOICES.includes(playerSelection)) {
        alert('Invalid choice! Please use the buttons properly.');
    }

    if (playerSelection === computerSelection) {
        resultText = "It's a tie!";
    }
    // Winning scenarios
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
        ) {
        resultText = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        PLAYER_SCORE++;
    }
    else {
        resultText = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
        COMPUTER_SCORE++;
    }

    let result = document.querySelector('.result');
    result.textContent = resultText;
    updateScore();
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateScore() {
    let playerScore = document.querySelector('.score .player');
    let computerScore = document.querySelector('.score .computer');
    
    playerScore.textContent = PLAYER_SCORE;
    computerScore.textContent = COMPUTER_SCORE;

    if (PLAYER_SCORE === 5 || COMPUTER_SCORE === 5) {
        displayWinner();
    }
}

function displayWinner() {
    let winner = document.querySelector('.winner');

    toggleModal();
    winner.textContent = PLAYER_SCORE === 5 ? 'You win!' : 'The Computer wins!';
}

function toggleModal() {
    const modal = document.querySelector('.gameover');
    modal.classList.toggle("show-modal");
}

function resetGame() {
    PLAYER_SCORE = 0;
    COMPUTER_SCORE = 0;
    let result = document.querySelector('.result');

    updateScore();
    result.textContent = 'Waiting for input';
    toggleModal();
}

const playerChoices = document.querySelectorAll('.choice');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playRound));

const resetButton = document.querySelector('.reset-game');
resetButton.addEventListener('click', resetGame);