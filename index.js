const data = {
    score: 0,
    gameLenght: 5
};

function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection === 'rock' && computerSelection === 'scissors') || 
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You won ${playerSelection} beats ${computerSelection}`;
       } else {
           return `Computer won ${computerSelection} beats ${playerSelection}`;
       }
}

function game() {
    setup();
    while(data.gameLenght > 0) {
        playRound()
    }
}

function setup() {
    const playerSelection = prompt("Input your decision").toLowerCase();
    const computerSelection = computerPlay();
}
console.log(playRound(playerSelection,computerSelection))