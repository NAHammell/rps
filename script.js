const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');

const cpuRock = document.querySelector('#cpu-rock');
const cpuPaper = document.querySelector('#cpu-paper');
const cpuScissors = document.querySelector('#cpu-scissors');

const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');
const results = document.querySelector('#results');

let playerWins = 0;
let cpuWins = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    if (playerWins < 5 && cpuWins < 5) {
        playerChoice = this.id;
        computerChoice = getComputerChoice();
    
        removeUserHighlight();
        removeCpuHighlight();
        cpuHighlight(computerChoice);
        this.classList.add('chosen');
    
        if (playerChoice === computerChoice) {
            results.textContent = `${playerChoice} vs ${computerChoice}, it's a tie.`;
        } else if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                results.textContent = `${computerChoice} beats ${playerChoice}, CPU won.`
                cpuWins += 1;
                cpuScore.textContent = cpuWins;
            } else {
                results.textContent = `${playerChoice} beats ${computerChoice}, you win.`;
                playerWins += 1;
                playerScore.textContent = playerWins;
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                results.textContent = `${computerChoice} beats ${playerChoice}, CPU won.`
                cpuWins += 1;
                cpuScore.textContent = cpuWins;
            } else {
                results.textContent = `${playerChoice} beats ${computerChoice}, you win.`;
                playerWins += 1;
                playerScore.textContent = playerWins;
            }
        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                results.textContent = `${computerChoice} beats ${playerChoice}, CPU won.`
                cpuWins += 1;
                cpuScore.textContent = cpuWins;
            } else {
                results.textContent = `${playerChoice} beats ${computerChoice}, you win.`;
                playerWins += 1;
                playerScore.textContent = playerWins;
            }
        }
    
        if (playerWins === 5) {
            results.textContent = 'You have 5 points, you win!';
        } else if (cpuWins === 5) {
            results.textContent = 'The CPU has 5 points, you lose...';
        }
    }
}

function removeUserHighlight() {
    playerRock.classList.remove('chosen');
    playerPaper.classList.remove('chosen');
    playerScissors.classList.remove('chosen');
}

function removeCpuHighlight() {
    cpuRock.classList.remove('cpu-chosen');
    cpuPaper.classList.remove('cpu-chosen');
    cpuScissors.classList.remove('cpu-chosen');
}

function cpuHighlight(cpuButton) {
    const cpuChoice = document.querySelector(`#cpu-${cpuButton}`);
    cpuChoice.classList.add('cpu-chosen');
}

playerRock.addEventListener('click', playRound);
playerPaper.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);

