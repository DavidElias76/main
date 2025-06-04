
// JAVASCRIPT ERRORS

try{
    addlert("Welcome Guest");
}
catch(err){
    
    document.writeln(err.message + "<br>" + "<br>");
}

// HTMLL INPUT VALIDATION


function myFunction(){

    let message = document.getElementById("p01");

    message = "";

    let x = document.getElementById("demo").value;

    try{

        if(x.trim() === "") throw "Empty"; // check if the text input is empty
         
        if(isNaN(x)) throw "Not a Number"; // checks if x ia not a number and returns true

        x= Number(x);  // converts x into a number from a string

        if(x < 5) throw "too low";

        if(x > 10 ) throw "too high";
    }
    catch(err){

        document.writeln("The input is " + err);
    }
}



// The finally Statement

// The finally statement lets you execute code, after try and catch, regardless of the result:

function myFunction(){

    let message = document.getElementById("p02");
    
    message = "";

    let x1 = document.getElementById("demo2").value;

    try{
        if(x.trim() === "") throw "Empty enter value"; //
        if(isNaN(x1)) throw "Not a number";

        x1 = Number(x1);

        if(x < 5) throw "Too low";
        if(x > 10) throw "Too High";

    } 
    catch(err){

        document.writeln("The input is: " + err);
    }
    finally{

        document.getElementById("demo").value = "";
    }
}

// ERROR OBJECT - Provides useful information when an error occurs

// RANGE ERROR - an error that occurs when a number passes a range of values

let num = 1;

try{

    num.toPrecision(500);
}
catch(err){

    document.writeln(err.name + "<br>"); // range error 
}

// REFERNCE ERRORS
// - use fo a variable that not been declared

let z = 1;

try{
    x = c + 1; y // y cannot be used(referenced)

}
catch(err){
    document.writeln(err.name + "<br>");
}


// SYNTAX ERROR - error shown when you eveluate you code with syntax error

try{

    eval("alert('Hello)");
}
catch(err){

    document.writeln(err.name + "<br>");
}


// TYPE ERROR

// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.


let num2 = 1;

try{
    num2.toUpperCase();
}
catch(err){
    document.writeln(err.name + "<br>");
}


// URI (Uniform Resource Identifier) Error
 // A URIError is thrown if you use illegal characters in a URI function:


try{

    decodeURI("%%%");
}
catch(err){
    document.writeln(err.name + "<br>");


}


// JAVASCRIPT STRICT MODE

// PURPOSE OF STRICT MODE IS TO SOLVE SOME PROBLEMS IN JAVASCRIPT LIKE USING UNDECLARED VARIABLES, USING RESERVED KEYWORDS, ETC. 

// To enable strict mode, you can add "use strict"; at the beginning of your script or function.

// Activate debugging in your browser (F12) to see the error report.

"use strict";
x = 3.14; // This will cause an error because x is not declared

document.writeln(x); // This line will not execute because of the error above


// TAKE A LOOK AT THE NOT ALLOWED IN STRICT MODE IN THE NOTES  













