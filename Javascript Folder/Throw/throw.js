// get reference
const inputValue = document.getElementById("testNumber");
const testBtn =document.getElementById("submit");
const result = document.getElementById("answer");

// add event listener
// testBtn.addEventListener("click", ()=> {
//     result.textContent = validateInput(Number(inputValue.value));
//     // if input is not a number, throw error
// });
// // function to validate input

// function validateInput(input){
//     if(typeof input !=="number"){
//         throw TypeError("Expected a number, but recieved " + typeof input);
//     }
//     return input *  3;
// }


// try... catch.... finally block

testBtn.addEventListener("click", ()=> {
    result.textContent = processInput(inputValue.value);
})
function processInput(input){
    if(typeof input !== "string"){
        throw new TypeError("Input must be a string");
    }
    return input.toUpperCase();
}
// try... catch block
try {
    console.log("Starting the process Input...");
    const result = processInput(9);
    console.log("Result:", result); 
}catch(error){
    console.error("An error occurred:", error.message); // log the erro message to the console and its type and property
}