function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3); 

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
    
}

function playRound (playerSelection, computerSelection) {

    // let computerInput = getComputerChoice();
    // computerSelection = computerInput.toLowerCase();

    // let playerInput = prompt(' Choose Rock , Paper , or Scissors...');

    playerSelection = playerSelection.toLowerCase();
    let result = '';
    console.log(computerSelection);
    console.log(playerSelection);

    if (playerSelection === 'rock') { 

        computerSelection === 'paper' ? result = (`YOU LOSE! Paper beats Rock`) :
        computerSelection === 'scissors' ? result = ('YOU WIN! Rock beats Scissors') :
        result = ('TIE! Rock and Rock');

    } else if (playerSelection === 'paper') { 

        computerSelection === 'scissors' ? result = ('YOU LOSE! Scissors beat Paper') :
        computerSelection === 'rock' ? result = ('YOU WIN! Paper beats Rock') :
        result = ('TIE! Paper and Paper');

    } else if (playerSelection === ('scissors')) { // Scissors

        computerSelection === 'rock' ? result = ('YOU LOSE! Rock beats Scissors') :
        computerSelection === 'paper' ? result = ('YOU WIN! Scissors beat Paper') :
        result = ('TIE! Scissors and Scissors');

    } else {

        result = 'Thats not a valid entry....';

    }

    return result;
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));





// rock - scissors 
// rock < paper 

// scissors > paper
// scissors < rock

// paper > scissors
// paper < rock 