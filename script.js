function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3); 

    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
    
}

function playGame(playerSelection, computerSelection = getComputerChoice()) {
    

    while (playerSelection !== ('Rock') || playerSelection !== ('Paper') || playerSelection !== ('Scissors')) {


        playerSelection = prompt('Type in Rock, Paper or Scissors');

        
        // check for appropriate answer 
        if (playerSelection === ('Rock') || playerSelection === ('Paper') || playerSelection === ('Scissors')) {

            // continue game

            //check for a tie, win, or loss
            
            if (playerSelection === computerSelection) {

                alert(`${playerSelection} and ${computerSelection} it\'s a tie!!`);

                // outcomes for ROCK playerChoice 

            } else if (playerSelection === 'Rock' ) {

                computerSelection === ('Scissors') ? alert(`${playerSelection} beats ${computerSelection} you Win!`) :
                alert(`${playerSelection} is beaten by ${computerSelection} you Lose!`);
    

                // outcomes for SCISSORS playerChoice
             } else if (playerSelection === 'Scissors') {

                computerSelection === ('Paper') ? alert(`${playerSelection} beats ${computerSelection} you Win!`) :
                alert(`${playerSelection} is beaten by ${computerSelection} you Lose!`);


                // outcomes for PAPER playerChoice
             } else {

                computerSelection === ('Rock') ? alert(`${playerSelection} beats ${computerSelection} you Win!`) :
                alert(`${playerSelection} is beaten by ${computerSelection} you Lose!`);

             }

             let restart = prompt('Play again?  "Y" for Yes');

             if (restart === ('Y')  || restart === ('y')) {

                continue;

             } else {

                break;
             }

        } else {

            // notify of wrong answer, try again

            alert('Wrong input try again...')
        }
    } 

}

playGame();

// get an answer from player
// check if correct answer is provided
// if incorrect answer display message
// if correct answer break loop and continue 



// rock - scissors 
// rock < paper 

// scissors > paper
// scissors < rock

// paper > scissors
// paper < rock 