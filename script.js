// //Play a round of RPS

//         function playRound2(playerSelection, computerSelection) {
//                 //Input playerSelection (+global variables)
//                     playerSelection = "rock";
//                     playerSelection = playerSelection.toLowerCase();
//                     computerSelection = getComputerChoice();


//                         //Input computerSelection (function declaration)
//                             function getComputerChoice() {
//                                         //create computerSelection
//                                             //get a random number
//                                         let randomNumber = Math.floor(Math.random()*100);

//                                             // assign random number to 'rock', 'paper', or 'scissors' for computer's selection
//                                         if (randomNumber >= 0 && randomNumber < 33) {
//                                             return result = "Rock"
//                                         }
//                                         else if (randomNumber >= 33 && randomNumber < 66) {
//                                             return result = "Paper"
//                                         }
//                                         else if (randomNumber >= 66 && randomNumber <= 99) {
//                                             return result = "Scissors"
//                                         }
//                                             else (console.log("H-how...? Uh.. Try again bc this shouldn't have been possible."))
//                                     }
                                    
//                 //Compare inputs, select winner, announce a winner (function declaration)                 
//                     if (playerSelection === "scissors" && computerSelection === "Rock") {
//                         return result = console.log("Oof, Rock beats Scissors.")
//                     }
//                     else if (playerSelection === "scissors" && computerSelection === "Scissors") {
//                         return result = console.log("Oops, S&S is a tie.")
//                     }
//                     else if (playerSelection === "scissors" && computerSelection === "Paper") {
//                         return result = console.log("Congrats! Scissors beats Paper.")
//                     }

//                     else if (playerSelection === "paper" && computerSelection === "Rock") {
//                         return result = console.log("Congrats! Paper beats Rock.")
//                     }
//                     else if (playerSelection === "paper" && computerSelection === "Scissors") {
//                         return result = console.log("Oof, Scissors beats Paper.")
//                     }
//                     else if (playerSelection === "paper" && computerSelection === "Paper") {
//                         return result = console.log("Oops, P&P is a tie.")
//                     }
//                     else if (playerSelection === "rock" && computerSelection === "Rock") {
//                         return result = console.log("Oops, R&R is a tie.")
//                     }
//                     else if (playerSelection === "rock" && computerSelection === "Scissors") {
//                         return result = console.log("Congrats! Paper beats Rock.")
//                     }
//                     else if (playerSelection === "rock" && computerSelection === "Paper") {
//                         return result = console.log("Oof, Rock beats Scissors.")
//                     }
//                     else (console.log("Gunna be honest, we don't know what happened. Maybe you spelled it wrong? Try again"))
//                 }


// playRound2();


  //Simplify the code for better readability
    
  let score = 0
                function playRound(playerSelection, computerSelection) {
                    playerSelection = prompt("Rock, Paper, or Scissors?", "");
                    playerSelection = playerSelection.toLowerCase();
                    computerSelection = getComputerChoice();
                    

                    function getComputerChoice() {
                        let randomNumber = Math.floor(Math.random()*100);

                        if (randomNumber >= 0 && randomNumber < 33) {
                            return result = "Rock"
                        }
                        else if (randomNumber >= 33 && randomNumber < 66) {
                            return result = "Paper"
                        }
                        else if (randomNumber >= 66 && randomNumber <= 99) {
                            return result = "Scissors"
                        }
                            else (console.log("H-how...? Uh.. Try again bc this shouldn't have been possible."))
                    }


                    if (
                    (playerSelection === "scissors" && computerSelection === "Rock") ||  
                    (playerSelection === "paper" && computerSelection === "Scissors") ||  
                    (playerSelection === "rock" && computerSelection === "Paper")) {
                          return result = console.log("Oof, computer beat ya.")
                    }

                    else if (
                    (playerSelection === "scissors" && computerSelection === "Scissors") || 
                    (playerSelection === "paper" && computerSelection === "Paper") || 
                    (playerSelection === "rock" && computerSelection === "Rock")) {
                          return result = console.log("Oops, looks like a tie.")
                        }

                    else if (
                    (playerSelection === "scissors" && computerSelection === "Paper") ||
                    (playerSelection === "paper" && computerSelection === "Rock") || 
                    (playerSelection === "rock" && computerSelection === "Scissors")) {
                        score++  
                        return result = console.log("Congrats! You win!")
                    }
                    else {
                        console.log(`Please enter "Rock", "Paper", or "Scissors" and ensure it's spelled correctly.`);
                        return result = 0
                    }
                }
// playRound();

function game() {

    for (let i = 0; i < 5; i++) {
        playRound();
                if (result === 0) { 
                    i--; 
                }
    }
    console.log(`Your score is ${score}!`)
}

game();
