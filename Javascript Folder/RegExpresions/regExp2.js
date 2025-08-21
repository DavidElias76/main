const regexPattern = document.querySelector("#pattern").value; // Get the pattern from the input field
const stringToTest = document.querySelector("#test-string").value; // Get the string to test from the input field
const testButton = document.querySelector("#test-btn"); // Get the test button
const testResult = document.querySelector("#result").value; // Get the text from the input field
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags(){

    let flags = "";
    // check if the i and g checkboxes are checked
    if(caseInsensitiveFlag.checked && globalFlag.checked) {
        flags += "ig"; // Both flags are checked
    }
    if(caseInsensitiveFlag.checked) {
        flags += "i"; // Only case-insensitive flag is checked
    }
    if(globalFlag.checked) {
        flags += "g"; // Only global flag is checked
    }
    
    return flags;
}

testButton.addEventListener("click", () =>{
    const pattern = regexPattern.value;
    const flags = getFlags(); // Get the flags based on the checkboxes
    const text = stringToTest.value;

    let regex;
    try{
        regex = new RegExp(pattern, flags);
    }catch(e){
        testResult.innerHtml = "invalid regular expression";
        return;
    }
    const result = text.match(regex); // Test the regex against the string
    // const result2 = text.match(regex);

    if(result){
        testResult.innerText = result.join(", "); // Display the result
        // replace each match with a span element with a class of highlight
        stringToTest.innerHtml =text.replace(regex, match => `<span class = "highlight">${match}</span>`);
    }else{
        testResult.innerText = "No match found"; // Display no match found
        stringToTest.innerHTML = text; // Reset the input field 
    }
});




