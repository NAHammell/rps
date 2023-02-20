const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const playerChoiceIcon = document.querySelector('#player-choice');
const cpuChoiceIcon = document.querySelector('#cpu-choice');

const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');
const result = document.querySelector('#result');

let playerWins = 0;
let cpuWins = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {

    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            cpuWins += 1;
            cpuScore.textContent = cpuWins;
        } else {
            playerWins += 1;
            playerScore.textContent = playerWins;
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            cpuWins += 1;
            cpuScore.textContent = cpuWins;
        } else {
            playerWins += 1;
            playerScore.textContent = playerWins;
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            cpuWins += 1;
            cpuScore.textContent = cpuWins;
        } else {
            playerWins += 1;
            playerScore.textContent = playerWins;
        }
    }

    if (playerWins === 5) {
        result.textContent = 'You have 5 points, you win!';
    } else if (cpuWins === 5) {
        result.textContent = 'The CPU has 5 points, you lose...';
    }
}

rockBtn.addEventListener('click', function () {
    if (playerWins < 5 && cpuWins < 5) {
        cpuChoice = getComputerChoice();

        playerChoiceIcon.src = './assets/rock.png';
        cpuChoiceIcon.src = `./assets/${cpuChoice}.png`;

        playRound('rock', cpuChoice);
    }
});

paperBtn.addEventListener('click', function () {
    if (playerWins < 5 && cpuWins < 5) {
        cpuChoice = getComputerChoice();

        playerChoiceIcon.src = './assets/paper.png';
        cpuChoiceIcon.src = `./assets/${cpuChoice}.png`;

        playRound('paper', cpuChoice);
    }
});

scissorsBtn.addEventListener('click', function () {
    if (playerWins < 5 && cpuWins < 5) {
        cpuChoice = getComputerChoice();

        playerChoiceIcon.src = './assets/scissors.png';
        cpuChoiceIcon.src = `./assets/${cpuChoice}.png`;

        playRound('scissors', cpuChoice);
    }
});