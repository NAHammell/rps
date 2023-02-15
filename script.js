function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors') {
        return 'Invalid input';
    }

    if (playerChoice.toLowerCase() === computerChoice) {
        return 'You tied.';
    } else if ((playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') || (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose...'
    }
}

function playGame() {
    for (let i = 0; i < 5; i ++) {
        console.log(playRound(prompt(), getComputerChoice()));
    }
}