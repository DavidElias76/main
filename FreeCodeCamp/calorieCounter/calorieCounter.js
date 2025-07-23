// get the reference to the HTML elements
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// function to check for specific regex pattern
function  cleanInputString(input){
    const regex = /[+-\s]/g; // check for +, -, or whitespace in global scope
    returnstr.replace(regex, ''); // replace with empty string
}

// check for invalid input
function invalidInput(input){
    const regex = /\d+e\d+/i; // check for scientific notation or exponenetial notation
    return regex.match(input); // match of the  regex return the array-like object also called a nodelist
}
// a NodeList is an array-like obejct that contains a list of nodes that can be accessed by bracket notations

// terget the entrydropdown value withnthe matching fieldset id
function addEntry(){
    // get the value of the dropdoowwn, add the # symbol and target the container with the same fielset ID as the enrtryDropdown value
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
    // target the input field with type text within the container and get the length of the input field
    const entryNumber = targetInputContainer.querySelectorAll('input[type="number"]').length + 1; // increment the entry number by 1 and start counting from 1
    // create the input text and number field 
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name">
        
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" min="0">
    `;   

        //now insert the html and append it to the target input container
        targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
     // beforeend means insert the HTML before the end of the target input container
    // the html string contains the label and input fields for the entry name and calories
}

// function to get the total calories
function getCaloriesFromInputs(list) {
    let calories = 0; // initialize calories to 0
    // use the for in loop to iterate through the inputs
    for(const item of list){
        // get the vlaue inside the input field
        const currVar = cleanInputString(item.value); // youu can also use the textContent property to get the value of the input field
        const invalidInputMatch = invalidInput(currVar); // check for invalid input and return true or false boolean value

        if(invalidInputMatch){
            alert(`Invalid input: ${invalidInputMatch[0]}. Please enter a valid number.`);
            isError = true; // set the error flag to true
            return null; // return null if there is an error
        }
        // if the input is valid, convert the input to a number and add it to the calories variable
        calories += Number(currVar); // convert the input to a number and add it to the
    }
    return calories; // return the total calories
}

// function to calculate the calories and display the output
function calculateCalories(e) {
    // prevent submission on the form
    e.preventDefault();
    isError = false; // reset the error flag

    // target the container with the relevant id and get the values of the input type number
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
    // pass the inputs to the getCaloriesFromInputs function to get the total calories
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    // get also the budget 
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    // check if there is an error in the input
    if(isError){
        return;
    }

    // calculat the total consumed calories and the remainig calories
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories; // calculate the consumed calories
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories; // calculate the remaining calories

    // check for suplus of deficit
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit'; // if the remaining calories are less than 0, then it is a surplus, otherwise it is a deficit

    // output the result to the output element. use the Math.abs() function to get the absolute value of the remaining calories
    output.innerHTML=`
    <span class=" ${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    // remove the class hide from the div element
    output.classList.remove('hide'); // remove the hide class from the output element to display the output
}

// function to clear the form
function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll('.input-container')); // get all the input containers and returns an array of all elements with the class input-container
    // loop through the input containers and remove all the input fields
    for(const container of inputContainers){
        container.innerHTML = ''; // clear the inner HTML of the container
    }
    budgetNumberInput.value = ''; // clear the budget input field
    output,innerHTML = ''; // clear the output element
    output.classList.add('hide'); // add the hide class to the output element to hide

}

// add an event listener to the add entry button
addEntryButton.addEventListener("click", addEntry); // when the add entry button is
calorieCounter.addEventListener("submit", calculateCalories); // when the form is submitted, call the calculateCalories function
clearButton.addEventListener("click", clearForm); // when the clear button is clicked