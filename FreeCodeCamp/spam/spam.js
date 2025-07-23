
const messageInput = document.getElementById("message-input").value;
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");


checkMessageButton.addEventListener("click", () =>{
    // check if the input is empty
    if(messageInput.value === "") {
        alert("Please input a value.");
        return;
    }
    
    // remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = messageInput.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");    
    
    // checks for two option: checkedInput is not a string and compares it to reversed 
    if((cleanedInput === reversedInput) && cleanedInput !== ""){
        result.textContent = `${messageInput} is a palindrome`;
    }else {
        result.textContent = `${messageInput} is not a palindrome`;
    }
});

// // check an input contains only the letter "A" and nothing else
// const regex= /^A+$/;
// if(regex.test(messageInput.value)){
//     result.textContent = "A is a palindrome.";
// }
//     // checks if the input contains the word _eye
//     const cleanedInput2 = messageInput.replace(/[^a-z0-9]/gi, "").toLowerCase();
//     const reversed2 = cleanedInput2.split("").reverse().join("");   

//     if((cleanedInput2 === reversed2) && cleanedInput2 !== ""){
//         result.textContent = `${messageInput} is a palindrome.`;
//     }   else {
//         result.textContent = `${messageInput} is not a palindrome.`;
//     }

//     // checks if the input contains the word "race car"

//     const regex2 = /race car/i;
//     if (regex2.test(messageInput)) {
//         result.textContent = `${messageInput} is a palindrome.`;
//     } else {
//         result.textContent = `${messageInput} is not a palindrome.`;    
//     }

//     // check for the text not in a palindrome
//     const cleanedInput3 = messageInput.replace(/[^a-z0-9]/gi, "").toLowerCase();
//     const reversed3 = cleanedInput3.split("").reverse().join("");   

//     if (cleanedInput3 !== reversed3 && cleanedInput3 !== "") {
//         result.textContent = `${messageInput} is not a palindrome.`;
//     }   else {
//         result.textContent = `${messageInput} is a palindrome.`;
//     }

//     // check for input that contains the words "hello world"

//     const cleanInput4 = messageInput.replace(/[^a-z0-9]/gi, "").toLowerCase();
//     const reversed4 = cleanInput4.split("").reverse().join("");

//     if (cleanInput4 === reversed4 && cleanInput !== "") {
//         result.textContent = `${messageInput} is a palindrome.`;
//     }   else {
//         result.textContent = `${messageInput} is not a palindrome.`;
//     }   
    


// checkMessageButton.addEventListener("click", () => {
//   if (messageInput.value === "") {
//     alert("Please enter a message.");
//     return;
//   }

//   result.textContent = isSpam(messageInput.value)
//     ? "Oh no! This looks like a spam message."
//     : "This message does not seem to contain any spam.";
//   messageInput.value = "";
// });

// const helpRegex = /please help|assist me/i;
// const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex];

// const isSpam = (msg) => denyList.some((regex) => regex.test(msg));







