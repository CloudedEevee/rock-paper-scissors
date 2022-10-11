//Play a round of RPS

        function playRound(playerSelection, computerSelection) {
                //Input playerSelection (+global variables)
                    playerSelection = "Scissors";
                    computerSelection = getComputerChoice();


                        //Input computerSelection (function declaration)
                            function getComputerChoice() {
                                        //create computerSelection
                                            //get a random number
                                        let randomNumber = Math.floor(Math.random()*100);

                                            // assign random number to 'rock', 'paper', or 'scissors' for computer's selection
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
                                    
                //Compare inputs, select winner, announce a winner (function declaration)                 
                    if (playerSelection === "Scissors" && computerSelection === "Rock") {
                        return result = console.log("Congrats! Scissors beats Rock.")
                    }
                    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                        return result = console.log("Oops, S&S is a tie.")
                    }
                    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                        return result = console.log("Oof, Paper beats Scissors.")
                    }
                    else (console.log("Sorry, no dice. Try again."))
                }


playRound();
