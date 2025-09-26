
// NODELISTS

// sttstic collection of html elements by the id, classes and the element
// can be craeated using te querySelectorAll()
// nodelist wont update automatically to reflect the changes

let buttons= document.querySelectorAll(".myButtons")

console.log(buttons)

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "Btn"
});
// click event

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "tomato";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "hsl(240, 100%, 40%)";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "hsl(240, 100%, 60%)";
    })
})

// create a new button

const newButton = document.createElement("button");

// add any attributes

newButton.textContent = "New Button";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

// TO MANUALLY ADD A ELEMENT TO A NODELIST
// you have to redeclare button and get the element using the query selector

// buttons.document.querySelectorAll(".myButtons"); 
// console.log(buttons);

// REMOVE ALL ELEMENTS IN A NODELISTS
// add the remove method and then redeclare the buttons by getting the querySelector

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons")
        console.log(buttons);
    })
})

// CLASSLISTS

// Element property in javascript that is used to interact with the an element list of classes (CSS classes)
// Allows you to make reusable code  for many element across the webpage

const myButtonClass = document.getElementById("myNewButton");

// myButtonClass.classList.add("enabled");
// myButtonClass.classList.remove("enebled");

// myButtonClass.addEventListener("mouseover" , event => {

//     event.target.classList.add("hover");
// })

// myButtonClass.addEventListener("mouseout" , event => {

//     event.target.classList.remove("hover");
// })

// myButtonClass.addEventListener("mouseover" , event => {

//     event.target.classList.toggle("hover");
// })

// myButtonClass.addEventListener("mouseout" , event => {

//     event.target.classList.toggle("hover");
// })


// replace(oldClass, newClass)

myButtonClass.classList.add("enabled");

// add an event listerner that when the button is clicked it should replace the old class with the new class

myButtonClass.addEventListener('click', event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "Remove disabled class"   
    }else{
        event.target.classList.replace("enabled", "disabled")
    }
});
// reuse the classes with other elements
const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");


let buttonsNewOnes = document.querySelectorAll(".myNewButtons");
buttonsNewOnes.forEach(button => {
    button.classList.add("enabled")
});

buttonsNewOnes.forEach(button => {
    button.addEventListener('click', event => {
        event.target.classList.toggle("hover");
    })
})

// replace the enebled class with the disbled class
buttonsNewOnes.forEach(button => {
    button.addEventListener('click', event => {
        event.target.classList.replace("enabled", "disabled");
    })
})













