const fullNameInput = document.getElementById("full-name");    
const emailInput = document.getElementById("email");    
const orderNoInput= document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");  
// checkbox inputs  
const checkBoxInputs = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const otherCheckBoxInput = document.getElementById("other-complaint");
// radio button inputs
const radioButtonInputs = document.querySelectorAll('#solutions-group input[type="radio"]');
const otherRadioButtonInput = document.getElementById("other-solution");
// textarea inputs
const complaintDescription = document.getElementById("complaint-description");
const solutionDescription = document.getElementById("solution-description");

// function to validate the form and returns an object with the validation results
function validateForm(){
    // valid fullname
    const validFullName = fullNameInput.value.trim() !== "";
    // valid email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const validEmail = emailRegex.test(emailInput.value.trim());
    // valid order number
    const orderNoRegex = /^2024\d{6}$/;
    const validOrderNo = orderNoRegex.test(orderNoInput.value.trim());
    // valid product code
    const productRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
    const validPorductCode = productRegex.test(productCodeInput.value.trim());
    // valid quantity
    const validQuantity  = Number(quantityInput.value.trim());
    const validQuantityNumber = Number.isInteger(validQuantity) && validQuantity > 0;
    // valid checkboxes
    const validCheckbox  = Array.from(checkBoxInputs).some(checkbox => checkbox.checked); // converts NodeList to array and checks if at least one checkbox is checked using the some method 
    // check if the other checkbox is checked and if so, validate the textarea
    const complaintDescValid = otherCheckBoxInput.checked
    ? complaintDescription.value.trim().length >= 20: true;
    // valid radio buttons
    const validRadioButton = Array.from(radioButtonInputs).some(radio => radio.checked); // converts NodeList to array and checks if at least one radio button is checked using the some method
    // check if the other radio button is checked and if so, validate the textarea
    const solutionDescValid = otherRadioButtonInput.checked
    ? solutionDescription.value.trim().length >= 20: true;

    return{

        "full-name"            : validFullName,
        "email"                : validEmail,
        "order-no"             : validOrderNo,
        "product-code"         : validPorductCode,
        "quantity"             : validQuantityNumber,
        "complaints-group"     : validCheckbox,
        "complaint-description": complaintDescValid,
        "solutions-group"      : validRadioButton,
        "solution-description" : solutionDescValid

    }
}
// function to check if the form is valid
function isValid(obj){
    // check if all the values in the object are true by accepting the object as a parameter
    return Object.values(obj).every(value => value === true);   
}

// add event listener on the input element
fullNameInput.addEventListener("change", ()=> {
    const isValidFullName = validateForm()["full-name"];
    if(isValidFullName){
        fullNameInput.style.border = "4px solid green"; 
    }else{
        fullNameInput.style.border = "4px solid red"; 
    }
})

// add event listener of the email element
emailInput.addEventListener("change", (e)=> {
    const isValidEmail =  validateForm()["email"];
    if(isValidEmail){
        emailInput.style.border = "4px solid green"; 
    }else{
        emailInput.style.border = "4px solid red"; 
    }
});

// add event listener of the order 
orderNoInput.addEventListener("change", (e)=> {
    const isValidOrderNo =  validateForm()["order-no"];
    if(isValidOrderNo){
        orderNoInput.style.border = "4px solid green"; 
    }else{
        orderNoInput.style.border = "4px solid red"; 
    }
});
// event listener on the product code
productCodeInput.addEventListener("change", (e)=> {
    const isValidProductCode =  validateForm()["product-code"];
    if(isValidProductCode){
        productCodeInput.style.border = "4px solid green"; 
    }else{
        productCodeInput.style.border = "4px solid red"; 
    }
});
// event listener on the quantity
quantityInput.addEventListener("change", (e)=> {
    const isValidQuantity =  validateForm()["quantity"];
    if(isValidQuantity){
        quantityInput.style.border = "4px solid green"; 
    }else{
        quantityInput.style.border = "4px solid red"; 
    }
});

//event complaint group
const fieldsetCheckBoxGroup = document.getElementById("complaints-group"); // the fieldset and change the color of the fieldset 
fieldsetCheckBoxGroup.addEventListener("change", ()=> {
    const isvalidCheckGroup = validateForm()["complaints-group"];
    if(isvalidCheckGroup){
        fieldsetCheckBoxGroup.style.border = "4px solid green"; 
    }else{
        fieldsetCheckBoxGroup.style.border = "4px solid red"; 
    }
})

// event description group
otherCheckBoxInput .addEventListener("change", ()=> {
    const isOtherValid= validateForm()["complaint-description"];
    if(isOtherValid){
        complaintDescription.style.border = "4px solid green";
    }else{
        complaintDescription.style.border = "4px solid red";
    }
});

// input event listener of the textarea
complaintDescription.addEventListener("input", ()=> {
  const isDescriptionValid = validateForm()["complaint-description"];
  if(isDescriptionValid) {
    complaintDescription.style.border = "6px solid green";
  }else{
    complaintDescription.style.border = "6px solid red";
  }
});

// radio buttons
const fieldsetRadioButtonGroup = document.getElementById("solutions-group");
fieldsetRadioButtonGroup.addEventListener("change", ()=> {
    const RadioValid= validateForm()["solutions-group"];
    if(RadioValid){
        fieldsetRadioButtonGroup.style.border = "4px solid green";
    }else{
        fieldsetRadioButtonGroup.style.border = "4px solid red";
    }
});

// other radio button event
otherRadioButtonInput.addEventListener("change", ()=> {
    const isOtherRadioValid= validateForm()["solution-description"];
    if(isOtherRadioValid){
        solutionDescription.style.border = "4px solid green";
    }else{
        solutionDescription.style.border = "4px solid red";
    }
});
// check the solution description events
solutionDescription.addEventListener("input", ()=> {
    const isSolutionDescValid= validateForm()["solution-description"];
    if(isSolutionDescValid){
        solutionDescription.style.border = "4px solid green";
    }else{
        solutionDescription.style.border = "4px solid red";
    }
});

// submit form
const submitForm = document.getElementById("submit-btn");

submitForm.addEventListener("submit", (e)=> {
     e.preventDefault(); // prevent default submission
     
     const objResults = validateForm(); // call the validateForm function and store the results in an object
     const isFormValid = isValid(objResults);

     console.log(objResults); // for debugging
     console.log("Form is valid : " + isFormValid);

     if(isFormValid){
        alert("Form submited successfully!");
     }else{
        alert("Please complete the highlighted areas!");
     }
})

console.log("The form will be submitted in the browser URL!");

    // / **suggestion ** not completed needs to be redone again /
    
    // add event listeners to the text, number and email inputs
    // const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"]');// select all the text, number and email inputs
    // const arrayInputs = Array.from(inputs); // convert the NodeList to an array or use the spread syntax const inputArray = [...nodeList];
    // arrayInputs.forEach(element=> {
    //     element.addEventListener("change", ()=> {
    //         const requiredKeys = ["full-name", "email", "order-no", "product-code", "quantity"]; // get the keys and put them in an array
    //         const formValidation = validateForm(); // callback the validateForm function and assgn the results to a variable
    //         const allValid = requiredKeys.every(key => formValidation[key]);// use every method to check if all the required keys are valid
    
    //         if(allValid){
    //             element.style.border = "3px solid green"; // change the border color to green if the input is valid
    //         }else{
    //             element.style.border = "3px solid red"; // change the border color to red if the input is invalid
    //         }
    //     })
    // })