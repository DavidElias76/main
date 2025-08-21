
// generate a guessing game
const min = 50;
const max = 100;
// generate random number
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let guess;
let running = true;


while(running){
    // prompt the user to enter a number
    guess = Number(window.prompt(`Guess the number between ${min} and ${max}`));

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < min || guess > max){
        window.alert("Please enter a number btw the specified range");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW TRY AGAIN!")
        }else if(guess > answer){
            window.alert("TOO HIGH TRY AGAIN!")
        }else{
            window.alert(`CORRCT! The answer was ${answer}. It took you ${attempts}`)
            running = false;
        }
    }
}