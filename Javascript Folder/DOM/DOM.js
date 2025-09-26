// const listItems = document.querySelectorAll('ul > li');
// let results = "";
// listItems.forEach((item) =>{
//     results+= item.textContent;
// });
// document.writeln(results);

// // CONVERTING A NODE LIST TO AN ARRAY

// // create a new array fro the list items to use the map method
// const listItems2 = document.querySelectorAll('#myList li');
// const results2 = Array.from(listItems2).map(item => item.textContent);// conver tje list item into an array and map the text content of each item   
// document.writeln(results2.join('<br>'));// join the array into a string with line breaks

// // filter method to filter list items
// const result3 = Array.from(listItems2).filter((item) => item.textContent.includes('flour'));// filter the list items that contain the letter 'a'
// document.writeln(result3.join('<br>'));// join the array into a string with line breaks
// // filter method to filter list items with a condition


// innerhtml
// used when you want to display text in an html document
const element = document.getElementById('id');
element.innerHTML = "Hello World";

// createElement() method

const image = document.createElement("img");// create an element with the image tag

// innerText()
// it is used to get the text or the value inside an element 

const container = document.getElementById('container');
const newText = container.innerText = 'Javascript is awesome';// replaces the text and adds a line break <br>
document.writeln(container.innerText);
// document.writeln(newText.innerText);


// textContent() method- recommended
// - return plain text content of an element including all the text within its descendants regardles of its hidden attribute
const container3 = document.getElementById("container2");
document.writeln(container3.textContent);

// adds the text in the html document
const plain = document.getElementById("plain-text");
plain.textContent = "hello world, i am john";
document.writeln(plain.textContent);

// appendChild()method
// - to add a node to the DOM

const dessertList = document.getElementById("desserts");
const listItem3 = document.createElement("li"); // create a new element with an empty tag
listItem3.textContent = "Cookies"; // add text to the tag
// add node to the list of children in the ul
dessertList.appendChild(listItem3);

// removeChild() method
// - to remove a node from the DOM
const removeList = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type"); // select the last paragraph in a #example-section and removes it 
removeList.removeChild(lastParagraph);

// Add Attributes

// get the id
const para = document.getElementById("para");
para.setAttribute("class", "my-class");

// change or update the class of the div element
const divEl = document.querySelector(".my-class");
divEl.setAttribute("class", "example");

// Events

// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//     alert("You have clicked a button");
// });


// input event
// const input = document.getElementById("input");
// input.addEventListener("click", () => {
//     console.log(input.value); // log the value into the console
// });

// remove Event Listener

const bodyEl = document.querySelector("body");
const para2 = document.getElementById("para2");
const button2 = document.getElementById("btn2");

let isBgColorGrey = true; // boolena value

function toggleBgColor() {
    // bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey"; // checks the body background color
    // isBgColorGrey = !isBgColorGrey;

    if (isBgColorGrey) {
        bodyEl.style.backgroundColor = "blue";
    }else {
        bodyEl.style.backgroundColor = "grey";
    }
    isBgColorGrey = !isBgColorGrey; // it becomes false
}

// button2.addEventListener("click", toggleBgColor);
// // add an remove event listener to the paragraph element when the mouse is hovered over the paragraph
// para2.addEventListener("mouseover", () => {
//     button2.removeEventListener("click", toggleBgColor); // specifying which event to be removed with their two arguments
// });


// fruits

const fruitsDom = document.getElementsByClassName("fruits")
console.log(fruitsDom);

// // change one of the elements
// fruitsDom[0].style.backgroundColor = "yellow";
// fruitsDom[1].style.backgroundColor = "red";
// fruitsDom[2].style.backgroundColor = "green";

// iterate through the elements using the for each method

// for(let fruit of fruitsDom){
//     fruitsDom.style.backgroundColor = "yellow";
// }

// convert the HTML collection to an array to use the forEach() method to loop through the elements

Array.from(fruitsDom).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

// Get the Elements by tagName

const h3Elements = document.getElementsByTagName("h3")
console.log(h3Elements);

// acess the text of the element

// h4Element[0].style.backgroundColor = "yellow"

// iterate through the element using the for loop method

for(let h3Element of h3Elements){
    h3Element.style.backgroundColor = "yellow";
}

const liElements = document.getElementsByTagName("li"); // get all li elements

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}

// convert the elements to an array using the array.from() method
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor =  "lightblue";
})

















