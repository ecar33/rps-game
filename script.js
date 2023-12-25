function getComputerChoice() {
    let num = random(0, 2); /* get random num between 0 and 2 inclusive*/

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie! Another game will be played.")
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return 2;
    }
}

function getPlayerSelection() {
    let choice = prompt(`Select a move for this game: 
    Rock = 0
    Paper = 1
    Scissors = 2`)

    choice = parseInt(choice)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Incorrect input, try again")
            return 0;
    }
}

let playerScore = 0;
let computerScore = 0;

while (playerScore < 3 && computerScore < 3) {
    let roundOutcome = 0;
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    roundOutcome = parseInt(playRound(playerSelection, computerSelection));
    if (roundOutcome == 0) {
        continue;
    } else if (roundOutcome == 1) {
        playerScore++;
    }
    else if (roundOutcome == 2) {
        computerScore++;
    }
}

if (playerScore > computerScore) {
    console.log("Congratulations, you won!");
} else {
    console.log("Sorry, the computer won.");
}

console.log("Thanks for playing.");
