
        let x = 0.2 + 0.1;
        let y = (0.2 * 10 + 0.1 * 10) / 10 ; // you multiply by 10 and then divide by 10

        document.write("demo1: " + x + "<br>"); // outputs 0.30000000
        document.write("demo2: " + y + "<br>"); // outputs 0.3

        // Adding numbers and strings
        let z = 100;
        let u = "20";
        let l = 10;
        let result = z + l; // you have to assign a variable to calculate to numbers

        document.write("demo3: The result is: " + z + u + "<br>"); // prints out 1020 as string
        document.write("demo4: " + result + "<br>"); // prints out 30

        // NUMBER STRINGS
        let result2 = z * l;
        let result3 = z / l;
        let result4 = z - l;

        document.write("demo5: Multiplication will work: " + result2 + "<br>");
        document.write("demo6: Division will work: " + result3 + "<br>");
        document.write("demo7: Subtraction will work: " + result4 + "<br>");

        // NAN 
        let a = 100 /  "Apple";
        document.write("demo8: " + isNaN(a) + "<br>"); // checks is nan is not a number and returns true
        document.write("demo9: " + typeof a + "<br>"); // outputs number

        // INFINITY
        let number = 2;
        let text =  " ";

        // Execute until Infinity
        while (number != Infinity){
            number = number *  number;
        }
        text += number + "<br>";

        document.write("demo10: " + text); // output infinity

        let k = 2/0;
        document.write("demo11: " + k + "<br>"); // infinity
        document.write("demo12: " + typeof Infinity + "<br>");

        // HEXADECIMAL
        let myNumber = 32;
        document.write("demo13: Decimal 32 = <br><br>" + 
        "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
        "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
        "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
        "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
        "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
        "Octal (base 8): " + myNumber.toString(8) + "<br>" +
        "Binary (base 2): " + myNumber.toString(2) + "<br>");

        // JAVASCRIPT BIGINT NUMBERS
        let bigNumber = 9007199254740991n; // one way to declare te big int number
        document.write("demo14: " + bigNumber + "<br>");

        let bignumber2 = BigInt(9007199254740991); // another way to declare the big int number
        document.write("demo15: " + bignumber2 + "<br>");

        let bigNumber3 = BigInt("9007199254740991"); // another way to declare the big int number
        document.write("demo16: " + bigNumber3 + "<br>");

        // typeof BigInt
        document.write("demo17: " + typeof bigNumber + "<br>"); // to get the data type of the big int number

        // // OPERATORS IN BIGINT - multiplying two bigint numbers
        // let p = 9007199254740995n;
        // let m = 9007199254740995n;
        // let n = p * m;
        // document.write("demo18: " + n + "<br>");

        // MINIMUM AND MAXIMUM SAFE INTEGER
        // let g = MAX_SAFE_INTEGER;
        // let f = MIN_SAFE_INTEGER;
        // document.write("demo19: " + g + "<br>");
        // document.write("demo20: " + f + "<br>");

        // ISINTEGER() METHOD - TRUE OR FALSE
        // let number3 = 10;
        // let number4 = 10.5;
        document.write("demo21: " + Number.isInteger(10) + "<br>" + Number.isInteger(10.5) + "<br>");

        // ISSAFEINTEGER() METHOD  - RETURNS TRUE OR FALSE
        document.write("demo22: " + Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890) + "<br>");


        // JAVASCRIPT NUMBER METHODS
        
        // 1. tostring()
        let s1 = 123;
        document.write("demo23: " + s1.toString() + " - The number becomes a " + typeof s1.toString() + "<br>"); // returns a number as a string

        // 2. toExponential() notation - returns a string with a number rounded and written in exponential notation
        let s2 = 9.656;
        document.write("demo24: " +
            s2.toExponential() + "<br>" + 
            s2.toExponential(2) + "<br>" + 
            s2.toExponential(4) + "<br>" + 
            s2.toExponential(6) + "<br>");

        // 3.valueOf() Method - returns a number as a number
        let s3 = 123;
        document.write("demo25: The number is:" + s3.valueOf() + "<br>");

        // 4.toFixed() Method
        let s4 = 9.656;
        document.write("demo26: The number to two decimal places " + s4.toFixed(2) + "<br>");

        //  The number() Method
        let n1 = "10";
        let n2 = "John";
        document.write("demo27: " + Number(n1) + "<br>");
        document.write("demo28: " + Number(n2) + "<br>");  // outputs NaN
        document.write("demo29: " + Number(true) + "<br>" + Number(false) + "<br>"); // outputs 1 for true and 0 for false

        // number method can also be used to convert date to a number
        let n3 = new Date("1970-01-01");
        document.write("demo30: " + Number(n3) + "<br>"); // converting the date object to a number

        // The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
        document.write("demo31: " + Number(new Date("1970-01-02")) + "<br>"); // print out the millisecnds btw dates

        // PARSEINT() METHOD
        let p1 = "10"
        let p2 = "10.33";
        document.write("demo32: " + parseInt(p1) + "<br>" + parseInt(p2) + "<br>");

        // PARSEFLOAT() METHOD
        let p3 = "10";
        let p4 = "10.33";
        document.write("demo33: " + parseFloat(p3) + "<br>" + parseFloat(p4) + "<br>");

        // NUMBER.PARSEINT() METHOD AND NUMBER.PARSEFLOAT()
        document.write("demo34: " + Number.parseInt(p3) + "<br>");
        document.write("demo35: " + Number.parseFloat(p4) + "<br>");

        // JAVASCRIPT NUMBERS PROPERTIES * not running on web browser
        let n4 = Number.EPSILON;
        document.write("demo36: This is EPSILON: " + n4 + "<br>");

        let n5 = Number.MAX_VALUE;
        document.write("demo37: This is max value: " + n5 + "<br>");

        let n6 = Number.MIN_VALUE;
        document.write("demo38: This is min value: " + n6 + "<br>");

        // MAX_SAFE_INTEGER
        let msi = Number.MAX_SAFE_INTEGER;
        document.write("demo39: This is the max safe integer: " + msi + "<br>");

        let msi2 = Number.MIN_SAFE_INTEGER; // Fixed: Corrected property name
        document.write("demo40: This is the min safe integer: " + msi2 + "<br>");

        // POSITIVE INFINITY
        let f = Number.POSITIVE_INFINITY;
        document.write("demo41: This is positive infinity: " + f + "<br>");

        // NEGATIVE INFINITY
        let f2 = Number.NEGATIVE_INFINITY;
        document.write("demo42: This is negative infinity: " + f2 + "<br>");

        // NUMBER OBJECTS

        // NUMBER CONSTRUCTOR IS USED TO CREATE NUMBER OBJECTS
        const numObj = new Number(42); // Creates a Number object with the value 42 
        document.write("<p>Number Object: " + numObj + "</p>"); // Outputs the value of the Number object
        document.write("<p>Type of numObj: " + typeof numObj + "</p>"); // Outputs the type of the Number object

            
        const undefinedNum = Number(undefined); // Converts undefined to a number   
        const nullNum = Number(null); // Converts null to a number

        document.writeln("<p>Number(undefined): " + undefinedNum + "</p>"); // Outputs NaN
        document.writeln("<p>Number(null): " + nullNum + "</p>"); // Outputs 0
