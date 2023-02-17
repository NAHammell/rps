const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

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

    if (score > 1) {
        return 'You won the game!';
    } else if (score < 0) {
        return 'You lost the game...';
    } else {
        return 'You tied the game.';
    }
}

rockBtn.addEventListener('click', function () {
    alert('Rock');
});

paperBtn.addEventListener('click', function () {
    alert('Paper');
});

scissorsBtn.addEventListener('click', function () {
    alert('Scissors');
});