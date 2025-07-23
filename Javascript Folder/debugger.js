 
 // set the results in the console after clicking the play debugger button in the console
let firstNumber = 10;
let secondNumber = 20;
debugger; // This will pause the execution of the code when the debugger is open
let result = firstNumber + secondNumber;
console.log("The result is:", result);  

// You can use the debugger statement to pause the execution of your code at a specific point.
// This is useful for debugging purposes, allowing you to inspect variables and the call stack at that

function calculateTotalPrice(price, discountPercentage){

    debugger; // Pause execution to inspect the values of price and discountPercentage
    
    if (typeof price !== 'number' || typeof discountPercentage !== 'number') {
        throw new TypeError("Both price and discountPercentage must be numbers");
    }

    let discountAmount = (price * discountPercentage) / 100;
    let totalPrice = price - discountAmount;

    console.log(`Original Price: ${price}`);
    console.log(`Discount Percentage: ${discountPercentage}`);
    console.log("Total Price after discount:", totalPrice);

    return totalPrice;
}

let price = 100;
let discountPercentage = 15;    

let  finalPrice = calculateTotalPrice(price, discountPercentage);
console.log(`Final Price: ${finalPrice}`); // This will log the final price after the discount