
        //  JAVASCRIPT FOLLOWS THE ORDER OF OPEARTION - ORDER OF PRECEDENCE

        // ARITHMETIC OPEARTORS

        // Assign the value of x and y

        let x = 5;
        let y = 10;
        let z = x + y; // unary negation

        let a = 5;
        let b = 10;
        let c = a * b;

        // display z(addition)
        document.write("The Sum of X and Y is: "+ z + "<br>");

        // Multiplication
        document.write("The Multiplication of X and Y is: "+ c + "<br>");

        let j = 12;
        let k = (20 + 15) * j;

        document.write(k + "<br>");

        // ARITHMETIC OPERATORS
        
        let p = 10;
        p +=10;  // p = p + 10

        document.write(p + "<br>");

        let f = 30;
        f/=10;

        document.write(f + "<br>");

        // Javascript Comparison Operators

        let text1 = "20";
        let text2 = "5";
        let result = text1 > text2;

        document.write("is 20 grater than 5? " + result + "<br>");

        // Javascript String Addition

        let text3 = "John";
        let text4 = "Doe";
        let text5 = text3 + " " + text4;

        document.write(text5 + "<br>");

        // add string using the assignment operator

        let text6 = "What a very";
        text6 += "nice Day";

        document.write(text6 + "<br>");

        // Adding Strings with Numbers
        let l = 5 + 5;
        let m = "5" + 5;
        let n = "Hello"+ 5;

        document.write(l + "<br>" + m + "<br>" + n + "<br>");

        // JAVASCRIPT REMAINDER

        let g = 5;
        let h = 3;
        let v = 5 % 3;

        document.write(v + "<br>"); // Remainder Operator

        // JAVASCRIPT SYNTAX

        document.write(5 * 10 + "<br>");

        var r = 10;

        document.write(r * 15 + "<br>");

        // JAVASCRIPT IS CASE SENSITIVE

        let lastName, lastname;
        lastName = "Doe";
        lastname = "Peterson";

        document.write(lastName + "<br>"); //doe wiil be printed out
        document.write(lastname + "<br>"); // peterson will be printed out

        // INCREMENTAL OPERATOR

        let e = 10;

        e++; // increment the value of e by 1

        let o = e;

        document.write("The Increment of the value o is: " + o + "<br>");

        // THE DECREMENTT OPERATOR

        let i = 20;
        
        i--; // decrement the value of i by 1

        let u = i;

        document.write("The Decrement of the value i is: " + i + "<br>");

        // EXPONENTIATION OPERATOR

        let d = 5;
        let q = d ** 2; // the exponentiation operator

        document.write("The Exponentiation of q is: " + q + "<br>");

        //   ADDITION ASSIGNMENT OPERATORS

        let w = 10;
        w += 5;

        document.write("The assignment operator is: " + w + "<br>");

        let text7 = "HELLO";
        text7 += " WORLD";

        document.write(text7 + "<br>");

        //  LEFT SHIFT ASSGNMENT OPERATOR
        let ls= -100;
        ls <<= 5;

        document.write("The value of ls is: " + ls + "<br>");

        // RIGHT  SHIFT ASSIGNMENT OPERATOR

        let rs = -100;
        rs >>= 5;

        document.write("The value of s rs: " + rs + "<br>");

        // THE UNSIGNED RIGHT SHIFT ASSGINMENT VARIABLE
        let urs =-100;
        urs >>>= 5;

        document.write("The Unsigned Right Shift Operator: " + urs + "<br>");

        // BITWISE AND ASSIGNMENT OPERATOR
        let BAA = 100;
        BAA &= 5;
        document.write("Value of BAA is: " + BAA + "<br>");

        // BITWISE OR ASSIGNMENT OPERATOR  
        let BOR= 100;
        BOR |= 5;
        document.write("Value of x is: " + BOR + "<br>");

        // BITWISE XOR ASSIGNMENT OPERATOR
        let XOR = 10;
        BOR ^= 5;
        document.write("The value of XOR is: " + XOR + "<br>");

        // LOGIC AND ASSIGNMENT OPERATOR
        let LA = 100;
        LA &&= 5;
        document.write("The value is: " + LA + "<br>");

        // LOGIC OR ASSIGNMENT OPERATOR
        let LO;
        LO ||= 5;
        document.write("the value of LO is: " + LO + "<br>");

        // Nullish coalescing assignment operator
        let NC;
        NC ??= 5;

        // basic opertaors - converting number si

        // unary and binary operators- converting strings to numbers and adding them together

        let oranges = "2";
        let apples = "3";

        document.write(oranges + apples + "<br>"); // 23 - string concatenation

        document.write(Number(oranges) + Number(apples) + "<br>"); // 5 - number addition

        // chaining assignments

        //Another interesting feature is the ability to chain assignments

        let x1, y1, z1;

        x1 = y1 = z1 = 5 + 5; // 5 + 5 = 10

        document.write(x1 + "<br>" + y1 + "<br>" + z1 + "<br>"); // 10, 10, 10

        // INCREMENT AND DECREMENT 

        let counter = 2;
        let counter2 = 2;

        counter++; // increment

        counter2--;

        document.write(counter + "<br>"); // 3
        document.write(counter2 + "<br>"); // 1

        // SUING THE PREFIX AND POSTFIX FORM

        // The “prefix form” is when the operator goes before the variable: ++counter.

        let counter3 = 1;
        ++counter3; // return the new value

        document.write("Prefix form: " +counter3 + "<br>"); // 2

        // postfix form is when the operator goes after the variable: counter++.

        //If we’d like to increment a value but use its previous value, we need the postfix form:

        let counter4 = 3;
        counter4++; // return the old value

        document.write("Postfix form: " + counter4 + "<br>"); // 4 - the value is incremented after the expression is evaluated

        // examples

        let counter5 = 1;
        document.write(( 2 * ++counter5 ) + "<br>"); // 4

        let counter6 = 1;
        document.write(( 2 * counter6++ ) + "<br>"); // 2

        let dr = prompt("First number?", 1);
        let dt = prompt("Second number?", 6);

        let dc= prompt("the answer is: " ,dr + dt);

        document.write(dr + dt + "<br>"); // 16 - string concatenation  

        // convert string into a number
        document.write(Number(dr) + Number(dt) + "<br>"); // 7 - number addition

    