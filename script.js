const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');

const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');

let playerWins = 0;
let cpuWins = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = this.id;
    computerChoice = getComputerChoice();

    removeUserHighlight();
    this.classList.add('chosen');

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

function removeUserHighlight() {
    playerRock.classList.remove('chosen');
    playerPaper.classList.remove('chosen');
    playerScissors.classList.remove('chosen');
}

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);

