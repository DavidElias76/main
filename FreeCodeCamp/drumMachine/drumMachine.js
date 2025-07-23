// get the button reference which will return a nodelist
const playButton = document.querySelectorAll("button");
const displayText = document.getElementById("display") // get the paragraph element

// loop through the nodelist
playButton.forEach(songBtn => {
    songBtn.addEventListener("click", ()=> {
        // get the audio element inside the button element
        const audioPlay = songBtn.querySelector("audio");
        audioPlay.currentTime = 0;
        audioPlay.play();
    });
});

// add a key event
document.addEventListener("keydown", (e)=> {
    const key = e.key.toUpperCase();
    const btn = document.getElementById(key);
    // click logic
    btn.click();
})