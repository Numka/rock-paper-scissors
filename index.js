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
           data.score += 1;
            return `You won! ${playerSelection} beats ${computerSelection}.`;
       } else 

       if(playerSelection === computerSelection) {
            return "It's a draw.";
       } else 
       
       {
            return `Computer won! ${computerSelection} beats ${playerSelection}.`;
       }
}

function setup() {
    let playerSelection;
    while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("Input rock, paper or scissors").toLowerCase();
    };
    let computerSelection = computerPlay();

    return [playerSelection, computerSelection];
}

function game() {
    do {
        data.gameLenght = prompt("Input desired amount of rounds. (positive integer)");
    } while (Number.isInteger(data.gameLenght));
    while(data.gameLenght > 0) {
        let [x,y] = setup();
        console.log(playRound(x,y), `Your score is ${data.score}`);
        data.gameLenght -= 1;
    }
}
