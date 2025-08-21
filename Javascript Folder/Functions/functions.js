

        function myFunction(p1, p2){
            return (p1 * p2);  // used to stop javascript Function execution 
        }

        let result = myFunction(4, 3); // assigning result to my function

        document.write("The multiplication of p1 and p2 is: " + result + "<br>");


        // The () Operator

        function toCelcius(fahrenheit){
            return(5/9) * (fahrenheit -32);
        }
        let fahrenheit = toCelcius(77);

        document.write("The Celcius is: " + fahrenheit + "<br>");

        // Accessing the function without the () returns the function itself and not the result

        function Operator(f){
            return (5 /9) * (f-32);
        }
        // let f = Operator(); // produces NaN

        let f = Operator; // without assigning the value inside () it produces the return function itself

        document.write(f + "<br>");


        //  FUNCTION USED AS VARIABLES 

        function celcius(fr){
            return (5/9) * (fr -32);
        }
        
        let text =  "The temperature is: "  + celcius(77) + " Celcius";

        document.write(text + "<br>");


        // LOCAL VARIABLES

        let text1 = "Outside: " + typeof carName; // local variable not defined
        document.write(text1 + "<br>");

        // local variable defined

        function myFunction2(){
            let carName =  "VOLVO";
            let text2 = "Inside: " + typeof carName + " " + carName;
            document.write(typeof text2 + "<br>");
        }

        myFunction2();


        // CLOSURE FUNCTIONS 

        // The inner function can access the outer function's variable x, but not the other way around

        function outerFunction(x){
            let y = 10; // local variable

            function innerFunction(){
                document.writeln("The sum is: " + (x + y)); // accessing the local variable y from the outer function
            }
            return innerFunction;

        }

        let closure = outerFunction(5); // calling the outer function and assigning it to closure variable

        closure(); // calling the inner function through the closure variable



        // ANOTHER EXAMPLE

        function createCounter(){
            let counter = 0; // local variable

            return function (){
                counter++; // increment the counter
                return counter; // return the current value of the counter
            }
        };

        let counter = createCounter();
        document.write("Counter 1: " + counter() + "<br>"); // outputs 1
        document.write("Counter 2: " + counter() + "<br>"); // outputs 2    