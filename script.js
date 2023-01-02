const CHOICES = ['rock', 'paper', 'scissors'];

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
    }
    else {
        resultText = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
    }

    let result = document.querySelector('.result');
    result.textContent = resultText;
}

function game() {
    alert("Welcome to Rock Paper Scissors! You are about to play 5 rounds against the computer. Let's get started!");

    for (i = 1; i < 6; i++) {
        computerSelection = getComputerChoice();
        while (true) {
            playerSelection = prompt(`[ROUND ${i}] Choose between rock, paper and scissors`).toLowerCase();

            if (!CHOICES.includes(playerSelection)) {
                alert('Invalid choice! Please choose between rock, paper and scissors only.');
            }
            else break;
        }

        console.log(playRound(playerSelection, computerSelection));
    }
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const playerChoices = document.querySelectorAll('.choice');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playRound));