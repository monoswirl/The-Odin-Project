function getComputerChoice() {
    let value = Math.random();

    if (value < 0.33) {
        return "rock";
    } else if (value > 0.33 && value < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    while (true) {
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }  
        choice = prompt("Invalid choice. Choose rock, paper, or scissors.").toLowerCase();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if (roundWinner == "computer") {
            computerScore += 1;
        } else if (roundWinner == "human") {
            humanScore += 1;
        } else {
            continue;
        }
    }

    if (humanScore > computerScore) {
        console.log("You win, " + humanScore + " to " + computerScore + ".")
    } else if (humanScore < computerScore) {
        console.log("You lose, " + humanScore + " to " + computerScore + ".")
    } else {
        console.log("You tied.")
    }

}

function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice);
    console.log("Your opponent chose: " + computerChoice);
   if (humanChoice == "rock" && computerChoice == "paper") {
        return "computer";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return "computer";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "computer";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "human";
    } else {
        return "tie";
    }
}

playGame();