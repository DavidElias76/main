const input= document.getElementById("email");

// input.addEventListener("input", (e) => {
//     console.log(e.target.checkValidity()); // false if invalid, true if valid

// });

// input.addEventListener("input", (e)=> {
//     if(!e.target.checkValidity()){
//         e.target.reportValidity(); // Show validation message and still using the default browser validation message  
//     }
// });

input.addEventListener("input", (e)=> {
    if(!e.target.checkValidity()){
        e.target.setCustomValidity(
            "You must use the company email address that ends with @sampleCompany.com"
        ); // Clear custom validity message
    }
});

// .PREVENTDEFAULT()- step the behaviour of the events

//  keydown event is used to listen for key presses or characters typed in the keyboard
//  keyup event is used to listen for key releases or characters released from the keyboard

const inputValue = document.getElementById("text-input");
const output = document.getElementById("output");   

inputValue.addEventListener("keydown", (e)=> {
    e.preventDefault(); // Prevent the default action of the keydown event
    output.textContent = `You pressed the ${e.key}`;
})

// preventDefault() is used to prevent the form from being submitted

const form = document.querySelector("form");
form.addEventListener("submit", (e)=> {
    e.preventDefault(); // Prevent the default action of the form submission
});

