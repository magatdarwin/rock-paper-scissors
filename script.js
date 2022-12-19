const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {    
    // Returns a random value between indexes 0 and 2
    return CHOICES[Math.floor(Math.random() * 3)]; 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (!CHOICES.includes(playerSelection)) {
        return 'Invalid choice! Please choose between rock, paper and scissors only.';
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    // Winning scenarios
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
        ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

}

function game() {
    alert("Welcome to Rock Paper Scissors! You are about to play 5 rounds against the computer. Let's get started!");

    for (i = 1; i < 6; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt(`[ROUND ${i}] Choose between rock, paper and scissors`);
      
        console.log(playRound(playerSelection, computerSelection));
    }
}