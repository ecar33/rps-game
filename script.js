function getComputerChoice() {
    let num = random(0, 2); /* get random num between 0 and 2 inclusive*/

    switch (num) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function playRound(playerSelection, computerSelection) {

    let playerScoreValue = Number(playerScore.textContent);
    let computerScoreValue = Number(computerScore.textContent);
    playerChoiceIcon.src = playerSelection.src;
    computerChoiceIcon.src = computerSelection.src;

    toggleActive(menuContainer);
    toggleActive(roundContainer);

    if (playerSelection == computerSelection) {
        outcomeIcon.src = "./imgs/draw.png"
        return [playerScoreValue, computerScoreValue]

    } else if (playerSelection == rock && computerSelection == scissors ||
        playerSelection == paper && computerSelection == rock ||
        playerSelection == scissors && computerSelection == paper) {

        outcomeIcon.src = "./imgs/win.png"
        playerScoreValue += 1;
        playerScore.textContent = playerScoreValue;
        return [playerScoreValue, computerScoreValue]

    } else {

        outcomeIcon.src = "./imgs/lose.png"
        computerScoreValue += 1;
        computerScore.textContent = computerScoreValue;
        return [playerScoreValue, computerScoreValue]
    }
}

function toggleActive(element) {
    classList = Array.from(element.classList)
    if (classList.includes('active')) {
        element.classList.add("inactive");
        element.classList.remove("active");
    } else {
        element.classList.add("active");
        element.classList.remove("inactive");
    }
}

function playGame(event) {
    let computerSelection = getComputerChoice()
    let playerSelection = event.target;
    [playerScoreValue, computerScoreValue] = playRound(playerSelection, computerSelection);
    checkAndDisplayWinner(playerScoreValue, computerScoreValue);
}

function checkAndDisplayWinner(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        toggleActive(roundContainer)
        toggleActive(winnerContainer)
        if (playerScore === 5) {
            winnerIcon.src = "./imgs/player.png"
            winnerText.textContent = "Player wins! Congrats!"
        }
        else {
            winnerIcon.src = "./imgs/computer.svg"
            winnerText.textContent = "Computer wins! Oh well."
        }
    }
}



const rock = document.querySelector("[data-choice='rock']");
const paper = document.querySelector("[data-choice='paper']");
const scissors = document.querySelector("[data-choice='scissors']");

const playerScore = document.querySelector("#player-score-value");
const computerScore = document.querySelector("#computer-score-value");

const roundContainer = document.querySelector(".round-container");
const winnerContainer = document.querySelector(".winner-container")
const menuContainer = document.querySelector(".menu-container");
const menuButton = document.querySelector(".menu-button");
const newGameButton = document.querySelector(".new-game-button");

const playerChoiceIcon = document.querySelector(".player_choice_icon");
const computerChoiceIcon = document.querySelector(".computer_choice_icon");
const outcomeIcon = document.querySelector(".outcome_icon");
const winnerIcon = document.querySelector(".winner-icon");
const winnerText = document.querySelector(".winner-text")


rock.addEventListener("click", function (event) {
    playGame(event)
})

paper.addEventListener("click", function (event) {
    playGame(event)
})

scissors.addEventListener("click", function (event) {
    playGame(event)
})

menuButton.addEventListener("click", function () {
    toggleActive(menuContainer);
    toggleActive(roundContainer);
})

newGameButton.addEventListener("click", function () {
    toggleActive(winnerContainer)
    toggleActive(menuContainer)
    playerScore.textContent = 0;
    computerScore.textContent = 0;

})





