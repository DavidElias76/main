// get the reference
const textInput= document.getElementById("text-input");
const paraText = document.getElementById("char-count");

textInput.addEventListener("input", ()=>  {
    let inputValue = textInput.value;

    // restrit number of characters
    if(inputValue.length > 50){
        textInput.value = inputValue.substring(0, 50); // used to extact a text of a specific index
        inputValue = textInput.value;
    }

    let lengthInput = inputValue.length;
    paraText.textContent = `Character Count: ${lengthInput}/50`;

    //display a red text when the text reaches a certain number of characters 
    if(lengthInput === 50){
        paraText.style.color = "red";
    }else{
        paraText.style.color = "black";
    }
});

// // write it as a function and then callback the function using the event listener
// function updateText(){
//     let inputValue = textInput.value;

//     // restrict the number of characters
//     if(inputValue.length > 50){
//         textInput.value = inputValue.substring(0, 50);
//         inputValue = textInput.value;
//     }

//     //count the number of characters
//     const lengthInput = inputValue.length;
//     paraText.textContent = `Character Count: ${lengthInput}/50`;

//     // display the red text if the number of characters exceed the required number
//     if(lengthInput === 50){
//         paraText.style.color = "red";
//     }else{
//         paraText.style.columnRule = "black";
//     }
// }

// textInput.addEventListener("input", updateText); // callbck the function with the function name in the event listener