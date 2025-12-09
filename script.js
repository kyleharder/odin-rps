let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let computerSelection = null;
let result = null;
let matchText = null;
let matchScore = null;
let isWinner = false;
let winnerText = null;
const gameText = document.querySelector("#gameText");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const buttonElement = document.querySelector("#buttons");
const reloadButton = document.querySelector("#reloadButton");
const rldBtn = document.querySelector("#rldBtn");
rldBtn.style.display = "none";

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }
    else {
        if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                console.log("Computer Wins");
                return "computerwin";
            }
            else if (computerChoice === "Scissors") {
                console.log("Human Wins");
                return "humanwin";
            }
        }
        else if (humanChoice === "Paper"){
            if (computerChoice === "Rock") {
                console.log("Human Wins");
                return "humanwin";
            }
            else if (computerChoice === "Scissors") {
                console.log("Computer Wins");
                return "computerwin";
            }
        }
        else if (humanChoice === "Scissors") {
            if (computerChoice === "Rock") {
                console.log("Computer Wins");
                return "computerwin";
            }
            else if(computerChoice === "Paper") {
                console.log("Human Wins");
                return "humanwin";
            }
        }
    }
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
    else {
        return false;
    }
}

function endGame () {
    if (humanScore > computerScore) {
        winnerText = "You Win!";
    }
    else if (computerScore > humanScore) {
        winnerText = "Computer Wins!";
    }
    matchText = "Game Over! " + winnerText;
    matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
    statusText.textContent = matchText;
    statusTextTwo.textContent = matchScore;
    buttonElement.style.display = "none";
    rldBtn.style.display = "block";
}

function playRock() {
    result = playRound("Rock", getComputerChoice());
    if (result === "humanwin") {
        humanScore++;
        matchText = "You Win! You picked Rock and the computer picked Scissors!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "computerwin") {
        computerScore++;
        matchText = "You Lose! You picked Rock and the computer picked Paper!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "tie") {
        matchText = "Tie! You both picked Rock!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
}

function playPaper() {
    result = playRound("Paper", getComputerChoice());
    if (result === "humanwin") {
        humanScore++;
        matchText = "You Win! You picked Paper and the computer picked Rock!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "computerwin") {
        computerScore++;
        matchText = "You Lose! You picked Paper and the computer picked Scissors!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "tie") {
        matchText = "Tie! You both picked Paper!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
}

function playScissors() {
    result = playRound("Scissors", getComputerChoice());
    if (result === "humanwin") {
        humanScore++;
        matchText = "You Win! You picked Scissors and the computer picked Paper!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "computerwin") {
        computerScore++;
        matchText = "You Lose! You picked Scissors and the computer picked Rock!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
    else if (result === "tie") {
        matchText = "Tie! You both picked Scissors!";
        matchScore = "Score: You - " + humanScore + " || Computer - " + computerScore;
        statusText.textContent = matchText;
        statusTextTwo.textContent = matchScore;
        checkWinner();
    }
}

const statusText = document.createElement("div");
const statusTextTwo = document.createElement("div");
statusText.classList.add("statusText");
statusTextTwo.classList.add("statusText");
statusText.textContent = "Welcome to Rock Paper Scissors! Make a selection to begin the game!";
statusTextTwo.textContent = "Score: You - 0 || Computer - 0";
gameText.appendChild(statusText);  
gameText.appendChild(statusTextTwo);

btnRock.addEventListener("click", () => {
    playRock();
})

btnPaper.addEventListener("click", () => {
    playPaper();
})

btnScissors.addEventListener("click", () => {
    playScissors();
})

rldBtn.addEventListener("click", () => {
    window.location.reload();
})

