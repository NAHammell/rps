const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

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
}

rockBtn.addEventListener('click', function () {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', function () {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', function () {
    playRound('scissors', getComputerChoice());
});