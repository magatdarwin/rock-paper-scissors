function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    
    // Returns a random value between indexes 0 and 2
    return choices[Math.floor(Math.random() * 3)]; 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
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

}