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

        
        // check answer 
        if (playerSelection === ('Rock') || playerSelection === ('Paper') || playerSelection === ('Scissors')) {

            break;

        } else {

            alert('Wrong input try again...')
        }
    } 

}

playGame();

// get an answer from player
// check if correct answer is provided
// if incorrect answer display message
// if correct answer break loop and continue 



