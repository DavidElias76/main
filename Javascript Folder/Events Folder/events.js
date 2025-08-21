// Events

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("You have clicked a button");
});

// input event
const input = document.getElementById("input");
input.addEventListener("click", () => {
    console.log(input.value); // log the value into the console
});

// remove Event Listener

document.addEventListener("DOMContentLoaded", function(){

    const bodyEl = document.querySelector("body"); // selects the body element with the body style
    const para2 = document.getElementById("para2");
    const button2 = document.getElementById("btn2");
    
    let isBgColorGrey = true; // boolean value
    
    function toggleBgColor() {
        // bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey"; // checks the body background color
        // isBgColorGrey = !isBgColorGrey;
    
        if (!isBgColorGrey) {
            bodyEl.style.backgroundColor = "blue";
        }else {
            bodyEl.style.backgroundColor = "grey";
        }
        isBgColorGrey = !isBgColorGrey; // it becomes false
    }
    // adds the event listener when the button is clicked it should perform the function
    button2.addEventListener("click", toggleBgColor);
    // add an remove event listener to the paragraph element when the mouse is hovered over the paragraph
    para2.addEventListener("mouseover", ()=>{
        button2.removeEventListener("click", toggleBgColor); // specifying which event to be removed with their two arguments
    });

})

// Element.style and Element.classList

const button3 = document.getElementById("btn-color");
const changeColor = document.getElementById("paragragh");

// when the button is clicked it will add a class called highlight and the paragraph will change the color to yellow
button3.addEventListener("click", () => {
    changeColor.classList.add("highlight"); // add a class called highlight
});

// to add multiple class list to an element

// classList("class1", "class2", "class3");

// to remove a class from an element use the remove

// classList.remove("highlight");

const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    // toggle a class show and display on the browser
    menu.classList.toggle("show");// to toggle and display the menu
});


//  DOMCONTENTLOADED EVENT
// - is fired when everything in the html has been loaded and used
document.addEventListener("DOMContentLoaded", function (){
    console.log("DOM is laoded");
});

// update an image in the browser

function changeImage(){
    const img = document.getElementById("example-img");
    img.src = "../landing page/images folder/coffee image 6.jpg";
    img.style.width= "300px"
    img.style.height = "300px"
    console.log("image was just changed");
}
// checks if the document is stil loading and added an event listener that changes the image 
if(document.readyState = "loading"){
    document.addEventListener("DOMContentLoaded", changeImage);
}else{
    console.log("DOM has already fired up");
    changeImage();  // callback the function if the document has already loaded
}

// setTimeout() and setInterval() methods

// setTimeout() - lets you delay an action for a specified time. it takes two arguments the function and time in milliseconds
// -waits for a specified seconds for the function to be runned
setTimeout(() => {
    console.log("This will run 3 seconds");
}, 3000);

// setTimeout(function() {
//     console.log("This will run 3 seconds");
// }, 3000);

// setInterval() method - keeps repeating a function at a specified set of interval.
// it takes two interval function to be runned and the time in milliseconds btw each execution of that function
//- it runs after every specified function 


// setInterval(() =>{
//     console.log("This runs every 2 seconds")
// }, 2000);// this code will runevery 2 seconds

// clearInterval() method - STOPS THE SETINTERVAL METHOD

const intervalID = setInterval(() => {
    console.log("This is to stop after every 5 seconds");
}, 1000);

setTimeout(() => {
    clearInterval(intervalID);// this will stop the interval after a certain time 5 milliseconds
}, 5000);

// clearTimeout() method - used to stop the timeout method

let timeoutID = setTimeout(() => {
    console.log("This will not run");
}, 5000);
clearTimeout(timeoutID); // This will not run since it has been stopped by the clearTimeout() method


// requestAnimationFrame() method in events2.js

// console.log(rectangle.window.innerWidth);
