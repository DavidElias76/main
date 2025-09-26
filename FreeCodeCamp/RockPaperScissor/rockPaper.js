
const choicesPick = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay= document.getElementById("computerDisplay")
const resultDisplay= document.getElementById("resolveDisplay")
const choicesButtons = document.querySelectorAll("div button");
const text = document.getElementById("text");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

choicesButtons.forEach(button =>{

    button.addEventListener('click', (event) => {

         const playerChoice = button.dataset.choice; // Get value from data-choice
        // compuers choice
        const computerChoice = choicesPick[Math.floor(Math.random() * choicesPick.length)];

        console.log(computerChoice);
        console.log(playerChoice)

        if(playerChoice === computerChoice){
            playerDisplay.textContent = `Player Choice: ${playerChoice}`;  
            computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
            resultDisplay.textContent = "It's a tie";
        }else if(
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ){
            playerDisplay.textContent = `Player Choice: ${playerChoice}`;  
            computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
            resultDisplay.textContent = "Player wins";
        }else{
            playerDisplay.textContent = `Player Choice: ${playerChoice}`;  
            computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
            resultDisplay.textContent = "Computer wins";
        }

        // remove all the classes first
        resultDisplay.classList.remove("greenText", "redText", "blueText");

    switch(resultDisplay.textContent){
        case "Player wins":
            resultDisplay.classList.add("greenText");
            text.textContent = "Computer Loses";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Computer wins":
            resultDisplay.classList.add("redText");
            text.textContent = "Player Loses";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie":
            resultDisplay.classList.add("blueText");
            text.textContent = "It's a tie";
            break;
        }   
    })
})

// function to determine if the player or  the computer has won

// function hasPlayerWonTheRound(player, computer){
//     return (
//         (player === "Rock" && computer === "Scissors") ||
//         (player === "Scissors" && computer === "Paper") ||
//         (player === "Paper" && computer === "Rock")

//     );
// }