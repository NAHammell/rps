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
        return 0;
    } else if ((playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') || (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 1;
    } else {
        return -1;
    }
}

function playGame() {
    let score = 0;

    for (let i = 0; i < 5; i ++) {
        let outcome = playRound(prompt(), getComputerChoice());
        if (outcome === 1) {
            score++;
            console.log('You won!');
        } else if (outcome === -1) {
            score--;
            console.log('You lost...');
        } else {
            console.log('You tied.');
        }
    }

    if (score > 1) {
        return 'You won the game!';
    } else {
        return 'You lost the game...';
    }
}