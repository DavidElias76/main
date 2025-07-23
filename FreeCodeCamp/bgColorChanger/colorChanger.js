const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];

// get random index on the array
function getRandomIndex(){
    const randomIndex = Math.floor(Math.random() * darkColorsArr.length);
    return randomIndex;
}
// get the button element and the body element
const bgColor = document.querySelector("body"); // get the body element
const bgHexCodeSpanElement= document.getElementById("bg-hex-code"); // get the button element  

// get random color
function  getRandomColor(){
    const color = darkColorsArr[getRandomIndex()]; // callback the function to get the random index
    bgColor.style.backgroundColor = color; // change the background color of the body element
    bgHexCodeSpanElement.textContent = color; // change the text content of the span element to the color
}
// get the button element
const btn = document.getElementById("btn");
btn.addEventListener("click", getRandomColor); // add an event listener to the button element to call the function when clicked