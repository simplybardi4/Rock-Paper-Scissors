// a function to get computer's random choice
        function getComputerChoice() {
            const random = Math.floor(Math.random() * 3)
            if (random == 0) {
                return "rock"
            } else if (random == 1) {
                return "paper"
            } else {
                return "scissor"
            }
        }
        // a function to get user's choice
        function getHumanChoice() {
            const answer = prompt("rock, paper or scissors?").toLowerCase()
            return answer
        }
        // created some variables to get the state of each round out of playRound function
        const roundWin = "win";
        const roundTie = "tie";
        const roundLose = "lose";
        // logic of playing the game and put out the results for each round
        function playRound(humanchoice, computerchoice) {
            if (humanchoice == "rock" && computerchoice == "rock") {
                console.log("It's a draw!")
                return roundTie;
            } else if (humanchoice == "rock" && computerchoice == "paper") {
                console.log("You lose, rock can't beat paper!")
                return roundLose;
            } else if (humanchoice == "rock" && computerchoice == "scissor") {
                console.log("You win, rock beat scissor!")
                return roundWin;
            } else if (humanchoice == "paper" && computerchoice == "rock") {
                console.log("You win, paper beat rock!")
                return roundWin;
            } else if (humanchoice == "paper" && computerchoice == "paper") {
                console.log("It's a draw!")
                return roundTie;
            } else if (humanchoice == "paper" && computerchoice == "scissor") {
                console.log("You lose, paper can't beat scissor!")
                return roundLose;
            } else if (humanchoice == "scissor" && computerchoice == "rock") {
                console.log("You lose, scissor can't beat rock!")
                return roundLose;
            } else if (humanchoice == "scissor" && computerchoice == "paper") {
                console.log("You win, scissor beat paper!")
                return roundWin;
            } else if (humanchoice == "scissor" && computerchoice == "scissor") {
                console.log("It's a draw!")
                return roundTie;
            }
        }
        

        // this is where each player get its score for wining at a round
        function playGame() {
            let humanScore = 0;
            let computerScore = 0;
            for (let i=0; i<5; i++) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                const roundEnd = playRound(humanSelection, computerSelection);
                if (roundEnd == roundWin) {
                    humanScore++;
                } else if (roundEnd == roundLose) {
                    computerScore++;
                }
            }
            if (humanScore > computerScore) {
            console.log("YOU, WIN!")
            } else if (computerScore > humanScore) {
            console.log("YOU, LOST!")
            } else if (humanScore == computerScore) {
            console.log("IT'S A DRAW!")
            }
        }
        
        console.log(playGame())