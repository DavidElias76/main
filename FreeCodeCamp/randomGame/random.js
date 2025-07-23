
// get the reference
// create an array
const options = ["Rock", "Paper", "Scissors"];

// computer function to return a random choice
function getRandomComputerResult(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
// console.log(getRandomComputerResult()); // to  check the random value

// function to determine if the player has won
function hasPlayerWonTheRound(player, computer){
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")

    );
}

// create and initialize the playerscore and computerscore
let playerScore = 0;
let computerScore = 0;

// get the round results 
function getRoundResults(userOption){
    const computerResult = getRandomComputerResult(); // callback the function and assign the value to a varible

    if(userOption === computerResult){
        return `Its a tie. You both choose ${userOption}`;
        
    }else if(hasPlayerWonTheRound(userOption, computerResult)){
      // playerScore = playerScore + 1; 
      playerScore++
      return `Player wins! ${userOption} beats ${computerResult}`;
    }else{
        // computerResult = computerScore + 1;
         computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`
    };
}

// changing the player score
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
// update the wiiner message and option container
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer =  document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// showresults
function showResults(userOption){
    // update the message element and the span element with the computerscore and the playerscore
    roundResultsMsg.textContent = getRoundResults(userOption);
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent= computerScore;

    // limit the number of trials and the maximum is 3
    if(playerScore === 3){
        winnerMsgElement.textContent = "Player has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
    if(computerScore === 3){
        winnerMsgElement.textContent = "Computer has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

}

//  get the buttons and assign them to the variables 
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

// add an eventlistener to the buttons to callback the function showResults
rockBtn.addEventListener("click", ()=> {
    showResults("Rock");
});
paperBtn.addEventListener("click", ()=> {
    showResults("Paper");
});
scissorsBtn.addEventListener("click", () => {
    showResults("Scissors");
});

// add eventlistener to the resetgame button to reset the game to play again
resetGameBtn.addEventListener("click", resetGame); // vallbacks the function reset game

// reset game function
function resetGame(){
    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Update UI score elements
    playerScoreSpanElement.textContent = 0;
    computerScoreSpanElement.textContent = 0;

    // Hide reset game button
    resetGameBtn.style.display = "none";

    // Clear winner message
    optionsContainer.style.display = "block";

    // Clear winner message
    winnerMsgElement.textContent =  "";

    // Clear round result message
    roundResultsMsg.textContent = "";
}