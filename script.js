function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoiceInt = getRandomInt(3);
    switch (computerChoiceInt) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            console.log("Error: Random Int returned invalid response");
            break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    }
    else {
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }
    else {
        if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                return "computerwin";
            }
            else if (computerChoice === "Scissors") {
                return "humanwin";
            }
        }
        else if (humanChoice === "Paper"){
            if (computerChoice === "Rock") {
                return "humanwin";
            }
            else if (computerChoice === "Scissors") {
                return "computerwin";
            }
        }
        else if (humanChoice === "Scissors") {
            if (computerChoice === "Rock") {
                return "computerwin";
            }
            else if(computerChoice === "Paper") {
                return "humanwin";
            }
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let humanSelection = null;
    let computerSelection = null;
    let result = null;
    for (let round = 1; round < 6; round++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if (result === "tie") {
            console.log("Round " + round + " result: It was a Tie! You both picked " + humanSelection + "!");
            tieScore++;
        }
        else if (result === "humanwin") {
            console.log("Round " + round + " result: You win! " + humanSelection + " beats " + computerSelection + "!");
            humanScore++;
        }
        else if(result === "computerwin") {
            console.log("Round " + round + " result: You lose! " + computerSelection + " beats " + humanSelection + "!");
            computerScore++;
        }
    }
    console.log("Final result...");
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + " - " + computerScore + ". You tied " + tieScore + " time!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose! " + humanScore + " - " + computerScore) + ". You tied " + tieScore + " time!";
    }
    else if (humanScore === computerScore) {
        console.log("It was a tie! You both scored " + humanScore + "!");
    }
    else {
        console.log("I have no idea what happened but the scores are:");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        console.log("Tied: " + tieScore);
    }
}

playGame();

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound (humanSelection, computerSelection);