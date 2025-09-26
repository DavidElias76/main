
// eval() function takes an expression like (1+2+3) and evaluates it
// its like a built in calculator

// calculate program
const display = document.getElementById("display")


// Using the Onclick Function 

// function appendToDsiplay(input){
//     display.value += input;
// }

// function clearDsiplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value)
//     }catch(error){
//         display.value = "Error";
//     }
// }


// Using the Event Listener

// clear the input field

function clearDisplay() {
    display.value = "";
}

// calculate function using the eval()
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

const keysButtons = document.querySelectorAll("#keys button");
console.log(keysButtons);

keysButtons.forEach((btn) => {

    btn.addEventListener("click", (event) => {

        const value = event.target.textContent;

        if (value === "=") {
            calculate(); // Only calculate when "=" is pressed
        } else if (value === "C") {
            clearDisplay(); // Clear display when "C" is pressed
        } else {
            display.value += value; // Append button value to display
        }
    });
});

