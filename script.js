const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');

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

rockBtn.addEventListener('click', function () {
    const outcome = playRound('rock', getComputerChoice());

    switch (outcome) {
        case 0:
            alert('tie');
            break;
        case 1:
            playerScore.textContent = '1';
            break;
        case -1:
            cpuScore.textContent = '1';
            break;
    }
});

paperBtn.addEventListener('click', function () {
    alert('Paper');
});

scissorsBtn.addEventListener('click', function () {
    alert('Scissors');
});