
// // DOM Navigation

// // firstElementChild;

// const elementfirst = document.getElementById("fruits")
// const firstElement = elementfirst.firstElementChild;
// firstElement.style.backgroundColor = "yellow"
// console.log(firstElement); // the apples with be styled

// //iterate through and highlight all the first element in the all unordered list

// const allFirstElements = document.querySelectorAll("ul");

// allFirstElements.forEach(li => {
//     const firstCildElement = li.firstElementChild; //  get all the first child elements
//     firstCildElement.style.backgroundColor = "red";
// })

// // lastElementChild

// const lastElement = document.getElementById("fruits")
// const lastChildElement =  lastElement.lastElementChild;
// lastChildElement.style.backgroundColor = "yellow"

// allFirstElements.forEach(last => {
//     const lastChildElement =  last.lastElementChild; 
//     lastChildElement.style.backgroundColor = "green"
// })

// // nextElementSibling

// // add ids to all elements

// const siblingElement = document.getElementById("apples")
// const nextSibling = siblingElement.nextElementSibling; //get the next sibling which is the element after the firstElementChild
// console.log(nextSibling);


// previousElementSibling

// get the previous div element

// const selectPreviousSibling = document.getElementById("snacks");
// const previous = selectPreviousSibling.previousElementSibling;
// previous.style.backgroundColor = "yellow"

// gets the previous child element

// const elementPrevious = document.getElementById("potatoes")
// const previuosElement = elementPrevious.previousElementSibling;
// previuosElement.style.backgroundColor = "red";


// parentElement
// Returns the element/block element that contains the chiid element

const elementParent = document.getElementById("apples");
const parentElementget = elementParent.parentElement;
parentElementget.style.backgroundColor = "yellow";


// Children
// returns a HTML Collection of children elements
const elementChildren =document.getElementById("fruits");
const getChildrenElement =  elementChildren.children;
console.log(getChildrenElement); 

// convert the HTML COLLECTION into an array to use the forEach()
Array.from(getChildrenElement).forEach(child => {
    child.style.backgroundColor = "yellow";
});

// getChildrenElement[0]to acesss the value 


// ADD OR CHANGE THE ELEMENT

// Step 1:  CREATE THE ELEMENT

const newh1 = document.createElement("h1")

// Setp 2: ADD ATTRIBUTES AND PROPERTIES

newh1.textContent = "I like pizza";
newh1.style.color = "red";
newh1.id= "myH1";

// Step 3: APPEND ELEMENT TO THE DOM

// document.body.append(newh1);// will make the element last child
// document.body.prepend(newh1)

// add the h1 element at the bottom
document.getElementById("box1").append(newh1)
document.getElementById("box2").append(newh1)
// add the element at the top

document.getElementById("box3").prepend(newh1)
document.getElementById("box4").prepend(newh1)


// insertBefore(newElement, currentElement)
// used to insert a new element before another element

const box2 = document.getElementById("box2")
document.body.insertBefore(newh1, box2); // insert the h1 element before the box 2 element

// insert using the query Selector
// // select all Elements with the class box

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newh1, boxes[0])
// document.body.insertBefore(newh1, boxes[1])
// document.body.insertBefore(newh1, boxes[2])


// Step 4: REMOVE THE ELEMENT
// document.getElementById("box2").removeChild(newh1); // remove the element that is found in h1


// EXAMPLE2
// Add a new list item to the ordered list 

const foods = document.getElementById("foods");
console.log(foods);

// create a new list item

const newListItemCreate = document.createElement("li");
newListItemCreate.textContent = "Coconut";
newListItemCreate.id = "cocunut";
newListItemCreate.style.backgroundColor = "lightgreen";

// foods.appendChild(newListItemCreate);// add the list item in the bottom
// foods.prepend(newListItemCreate); // add the new list item at the top of the list 


// insertBefore();
// get the element you want to insert before
// const iceCream = document.getElementById("iceCream");
// foods.insertBefore(newListItemCreate, iceCream) // insert the new element before the ice cream


// using the query selector  
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("foods").insertBefore(newListItemCreate, listItems[3]); // insert the new list item before an item at specific index


// Remove the element the list 
document.getElementById("foods").removeChild(newListItemCreate); // Remove the element newlistItemCreate in the list


// HIDE OR SHOW HTML

const myButtonHide = document.getElementById("myButtonHide");
const img = document.getElementById("myImage");

// If we want to preserve the image space use the visibility property

myButtonHide.addEventListener("click", (event) => {
    
    if(img.style.visibility === "hidden"){
        img.style.visibility = "visible";
        myButtonHide.textContent = "Hide"

    }else{
        img.style.visibility = "hidden";
        myButtonHide.textContent = "Show"
    }
});




























