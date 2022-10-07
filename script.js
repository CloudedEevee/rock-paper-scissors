// Play a round of Rock Paper Scissors

// Input a selection as the player
    let playerSelection = "Scissors";


// Assign a selection for the computer
    function getComputerChoice() {
        // get a random number
        let randomNumber = Math.floor(Math.random()*100);
                    // console.log(randomNumber)

        // assign random number to 'rock', 'paper', or 'scissors' for computer's selection
        if (randomNumber >= 0 && randomNumber < 33) {
            return computerSelection = "Rock"
        }
        else if (randomNumber >= 33 && randomNumber < 66) {
            return computerSelection = "Paper"
        }
        else if (randomNumber >= 66 && randomNumber <= 99) {
            return computerSelection = "Scissors"
        }
            else (console.log("H-how...? Uh.. Try again bc this shouldn't have been possible."))
    } 


//Evaluate the selections against each other to find the winner
    function playRound(playerSelection, computerSelection) {
        let computerSelection = getComputerChoice();
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")
            console.log("You win! Paper beats Rock.")
    }
        else (console.log("Try again."))


//Two errors rn, "Identifier 'computerSelection' has already been declared (at script.js:29:13)"
// and "ReferenceError: playRound is not defined"


//I need to figure out how to nest these functions and values to work together
