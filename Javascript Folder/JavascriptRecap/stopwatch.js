
const display = document.getElementById("display")
const startButton = document.getElementById("startBtn")
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn")
// const container = document.getElementById("container")

let startTime = 0;     // The time when the stopwatch starts
let elapsedTime = 0;   // Total time passed while running
let timer = null;      // Stores the setInterval ID
let isrunning = false; // Tracks if the stopwatch is running


// date.now () conuts the number of miliseconds since the apex time 1970 to the current milliseconds now  


startButton.addEventListener("click", ()=> {
    let now = Date.now(); // get the time in milliseconds since the january 1970 to now
    startTime = now - elapsedTime;
    timer = setInterval(update, 10); // call the update function every 10 millisecnds for smooth
    isrunning = true; 
})


stopButton.addEventListener("click", () => {
    if (isrunning) {
        clearInterval(timer); // Stop the setInterval from running the update() function
        elapsedTime = Date.now() - startTime; // Capture how long the stopwatch has been running and the elapsed time becomes the new startTime in the startbutton event listener
        isrunning = false; // Mark that the stopwatch is no longer running
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    startTime = 0;     
    elapsedTime = 0;   
    timer = null;      
    isrunning = false; 
})

function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // takes the current time after the stopwatch has runned and the start time in which the the stopwatch started

    let hours =  Math.floor(elapsedTime /  (1000 * 60 * 60));
    let minutes =  Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    // convert them to strings
    hours = String(hours).padStart(2,"0")
    minutes = String(minutes).padStart(2,"0")
    seconds = String(seconds).padStart(2,"0")
    milliseconds = String(milliseconds).padStart(2,"0")

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
    
}

// let hoursConverted = Date.now(); // start time

// setTimeout(() => {
//     let hoursConverted2 = Date.now(); // end time after 5 seconds

//     let now = hoursConverted2 - hoursConverted; // difference in ms

//     console.log("Start Time:", hoursConverted);
//     console.log("End Time:", hoursConverted2);
//     console.log("The difference is: " + now + " ms");
// }, 5000);
