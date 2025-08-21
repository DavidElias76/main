const square = document.getElementById("square");
const animation = square.animate(
    [
        {transform: 'translateX(0px)'}, 
        {transform: "translateX(100px)"}],
    {
        duration: 2000, // // duration are written in millisecods (2seconds) - makes animation last 2 seconds
        iterations: Infinity, // loop indefinetly
        easing: "ease-in-out", //  specifies the transition effect with slow start to end(smooth easing);
        direction:  "alternate"// animation is played forwards first then beckwards
    }
);

// using the addeventListener to add animation button

const newSquare = document.getElementById("square2");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const newAnimation  = newSquare.animate(
    // ketframes
    [
        {transform: 'translateX(0px)'},
        {transform: 'translateX(500px)'}
    ],
    // options
    {
        duration: 2000,
        direction: "alternate",
        easing: "ease-in-out"
    }
)
// set the onfinish property to alert the message when the animation ends
newAnimation.onfinish = () => {
    console.log("Your animation has finished");
}
// play animation when the play button is clicked
playBtn.addEventListener("click", ()=> {
    newAnimation.play();
    console.log("You have started the animation");
});
// pause the animation when the "pause" button is clicked
pauseBtn.addEventListener("click", () => {
    newAnimation.pause();
    console.log("You have stopped the animation");
});
