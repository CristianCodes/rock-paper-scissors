function getComputerChoice () { // generates random computer selection 

    let choice = Math.floor(Math.random() * 3); 

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
    
}

let rounds = 0;
let compScore = 0;
let playerScore = 0;
const playerScorePara= document.querySelector('.playerScore');
const compScorePara= document.querySelector('.compScore');
const winnerDiv= document.querySelector('.winner');
const roundsDiv = document.querySelector('.rounds');
const resultDiv = document.querySelector('.results');


function playRound (playerSelection, computerSelection) { 
    let result = '';
    let counter = 0;

    if (compScore === 5){
        winnerDiv.textContent = 'The Computer is the Winner! Hit Restart to play again.';
        winnerDiv.style.color = 'red';
        return;
    }else if(playerScore === 5){
        winnerDiv.textContent = 'You are the Winner! Hit Restart to play again.';
        winnerDiv.style.color = 'green';
        return;
    }

    
    // ----------------------------------------------------
    // values tracked by counter variable 
    // win = 1
    // loss = 2
    // tie = 3
    // ----------------------------------------------------
    // determines if player wins by returning counter value and outputting result 
    if (playerSelection === 'rock') { 

        computerSelection === 'paper' ? result = (`ROUND LOST! Paper beats Rock`) :
        computerSelection === 'scissors' ? result = ('ROUND WON! Rock beats Scissors') :
        result = ('TIE! Rock and Rock');
        resultDiv.textContent = result;

        result === (`ROUND LOST! Paper beats Rock`) ? counter = 2 :
        result === ('ROUND WON! Rock beats Scissors') ? counter = 1 :
        counter = 3;
        winOrLoss(counter);

    } else if (playerSelection === 'paper') { 

        computerSelection === 'scissors' ? result = ('ROUND LOST! Scissors beat Paper') :
        computerSelection === 'rock' ? result = ('ROUND WON! Paper beats Rock') :
        result = ('TIE! Paper and Paper');
        resultDiv.textContent = result;

        result === ('ROUND LOST! Scissors beat Paper') ? counter = 2 :
        result === ('ROUND WON! Paper beats Rock') ? counter = 1 :
        counter = 3;
        winOrLoss(counter);

    } else if (playerSelection === ('scissors')) { // Scissors

        computerSelection === 'rock' ? result = ('ROUND LOST! Rock beats Scissors') :
        computerSelection === 'paper' ? result = ('ROUND WON! Scissors beat Paper') :
        result = ('TIE! Scissors and Scissors');
        resultDiv.textContent = result;

        result === ('ROUND LOST! Rock beats Scissors') ? counter = 2 :
        result === ('ROUND WON! Scissors beat Paper') ? counter = 1 :
        counter = 3;
        winOrLoss(counter);

    } else {
        alert('That is not an option... neither side gets points...');
    }

    rounds++;
    roundsDiv.textContent = rounds;


} // end playRound --------------------------------------------------------------

// ROCK button code 

const rockBtn = document.querySelector('#ROCK');

rockBtn.addEventListener('click', () => {
    playRound('rock',getComputerChoice());
})

// PAPER button code 

const paperBtn = document.querySelector('#PAPER');

paperBtn.addEventListener('click', () => {
    playRound('paper',getComputerChoice());
})


// SCISSORS button code 

const scissorsBtn = document.querySelector('#SCISSORS');

scissorsBtn.addEventListener('click',() =>{
    playRound('scissors', getComputerChoice());
})

//RESTART button code 
const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click',restartGame);


// diplay the points respectively and announce a winner once either one hits 5 points 
//receive counter variable 
//if 1 add point to player, add 1 to round
//if 2 add point to computer, add 1 to round
//if 3 add point to none, add 1 to round 

function winOrLoss (counter) {

    if (counter === 1){
        playerScore++;
        playerScorePara.textContent = playerScore;
        playerScorePara.style.color = 'green';
    } else if (counter === 2) {
        compScore++;
        compScorePara.textContent = compScore;
        compScorePara.style.color = 'red';

    } 
}

function restartGame() {
    playerScore = 0;
    playerScorePara.textContent = playerScore;
    compScore = 0;
    compScorePara.textContent = compScore;
    rounds = 0;
    roundsDiv.textContent = rounds;
    winnerDiv.textContent = '';
    resultDiv.textContent = '';
    compScorePara.style.color = 'white';
    playerScorePara.style.color = 'white';
}