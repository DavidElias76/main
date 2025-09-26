
const slides =  document.querySelectorAll('#slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log(slides);

let startingIndex = 0; // starting point
let intervalId =  null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slides[startingIndex].classList.add("displaySlide");
}