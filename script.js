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
        return;
    }else if(playerScore === 5){
        winnerDiv.textContent = 'You are the Winner! Hit Restart to play again.';
        return;
    }

    
    // ----------------------------------------------------
    // values tracked by counter variable 
    // win = 1
    // loss = 2
    // tie = 3
    // ----------------------------------------------------
    // determines if player wins by returning counter value 
    if (playerSelection === 'rock') { 

        computerSelection === 'paper' ? result = (`YOU LOSE! Paper beats Rock`) :
        computerSelection === 'scissors' ? result = ('YOU WIN! Rock beats Scissors') :
        result = ('TIE! Rock and Rock');
        resultDiv.textContent = result;

        result === (`YOU LOSE! Paper beats Rock`) ? counter = 2 :
        result === ('YOU WIN! Rock beats Scissors') ? counter = 1 :
        counter = 3;
        winOrLoss(counter);

    } else if (playerSelection === 'paper') { 

        computerSelection === 'scissors' ? result = ('YOU LOSE! Scissors beat Paper') :
        computerSelection === 'rock' ? result = ('YOU WIN! Paper beats Rock') :
        result = ('TIE! Paper and Paper');
        resultDiv.textContent = result;

        result === ('YOU LOSE! Scissors beat Paper') ? counter = 2 :
        result === ('YOU WIN! Paper beats Rock') ? counter = 1 :
        counter = 3;
        winOrLoss(counter);

    } else if (playerSelection === ('scissors')) { // Scissors

        computerSelection === 'rock' ? result = ('YOU LOSE! Rock beats Scissors') :
        computerSelection === 'paper' ? result = ('YOU WIN! Scissors beat Paper') :
        result = ('TIE! Scissors and Scissors');
        resultDiv.textContent = result;

        result === ('YOU LOSE! Rock beats Scissors') ? counter = 2 :
        result === ('YOU WIN! Scissors beat Paper') ? counter = 1 :
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

// diplay the points respectively and announce a winner once either one hits 5 points 
//receive counter variable 
//if 1 add point to player, add 1 to round
//if 2 add point to computer, add 1 to round
//if 3 add point to none, add 1 to round 

function winOrLoss (counter) {

    if (counter === 1){
        playerScore++;
        playerScorePara.textContent = playerScore;
    } else if (counter === 2) {
        compScore++;
        compScorePara.textContent = compScore;
    } 
}

