
// JAVASCRIPT STRINGS

        let text = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
        document.write("demo1: The string has " + text.length + "<br>");

        // JAVASCRIPT STRINGS AS OBJECTS
        let x = "John";
        let y = new String ("David");
        document.write("demo2: This is a " + typeof x + "<br>This is a " + typeof y + "<br>");

        // JAVASCRIPT STRING METHODS
        let text2 = "HELLO WORLD";
        document.write("demo3: " + text2.charAt(0) + "<br>");  // USING THE charAt() METHOD
        document.write("demo4: " + text2.charCodeAt(0) + "<br>"); // USING charCodeAt()

        // THE NEW METHOD TO PRINT OUT CHARACTERS IN A STRING
        document.write("demo5: " + text2.at(2) + "<br>");

        // EXTRACTING STRING PARTS
        let text3 = "Apple, Banana, Orange" ;
        let part1 = text3.slice(7, 13)
        document.write("demo6: " + part1 + "<br>");
        let part2 = text3.slice(-12);
        document.write("demo7: " + part2 + "<br>");
        let part3 = text3.slice(-12, 7);
        document.write("demo8: " + part3 + "<br>");

        // SUBSTRING()
        let part4 = text3.substring(7, 13);
        document.write("demo9: " + part4 + "<br>");

        // SUBSTR()
        let part5 = text3.substr(7, 13);
        document.write("demo10: " + part5 + "<br>");
        let part6 = text3.substr(7);
        document.write("demo11: " + part6 + "<br>");
        let part7 = text3.substr(-14);
        document.write("demo12: " + part7 + "<br>");

        // CONVERTING UPPERCASE AND LOWERCASE
        let part8 = text3.toUpperCase();
        document.write("demo13: " + part8 + "<br>");
        let part9 = text3.toLowerCase();
        document.write("demo14: " + part9 + "<br>");

        // TRIM()  METHOD
        let text4 = "    HELLO WORLD!    "
        document.write("demo15: " + text4.trim() + "<br>");

        // STIRNG PADDING
        let text6 = "5";
        text6 = text6.padStart(4, "x");
        document.write("demo16: " + text6 + "<br>");
        let text7 = "7";
        text7 = text7.padEnd(4, "x");
        document.write("demo17: " + text7 + "<br>");

        // JAVASCRIPT STRING REPEAT
        let text8 = "HELLLO WORLD!";
        let result = text8.repeat(2);
        document.write("demo18: " + result + "<br>");

        // REPLACING THE STRING CONTENT
        let text9 = "Please visit Microsoft";
        let result2 = text9.replace("Microsoft", "W3Schools");
        document.write("demo19: " + result2 + "<br>");

        // regular expression
        let text10 = "Please visit the Microsoft and Microsoft";
        let result3 = text10.replace(/Microsoft/g, "Microsoft");
        document.write("demo20: " + result3 + "<br>");

        // JAVASCRIPT REPLACEALL() STRING
        let text11 = "I love cats. Cats are very easy to love. Cats are very popular";
        text11 = text11.replaceAll("cats", "Dogs");
        text11 = text11.replaceAll("Cats", "Dogs");
        document.write("demo21: " + text11 + "<br>");

        // regular expression
        let text12 = "I love cats. Cats are very easy to love. Cats are very popular";
        text12 = text12.replaceAll(/Cats/g,"Dogs");
        text12 = text12.replaceAll(/cats/g,"dogs");
        document.write("demo22: " + text12 + "<br>");

        // CONVERTING A STRING INTO AN ARRAY USING THE SPLIT() METHOD
        let text13 = "A,B,C,D,E";
        const myArray = text13.split(",");
        document.write("demo23: " + myArray[0] + "<br>");
        document.write("demo24: " + myArray[1] + "<br>");
        document.write("demo25: " + myArray[2] + "<br>");
        document.write("demo26: " + myArray[3] + "<br>");
        document.write("demo27: " + myArray[4] + "<br>");

        // JAVASCRIPT SEARCH METHODS
        let text14 = "Please locate where 'locate' occurs";
        let index = text14.indexOf("locate");
        document.write("demo28: " + index + "<br>");
        let index2 = text14.lastIndexOf("locate");
        document.write("demo29: " + index2 + "<br>");
        let index3 = text14.search("occurs");
        document.write("demo30: " + index3 + "<br>");

        // JAVASCRIPT STRING MATCH()
        let text15 = "The rain in SPAIN stays mainly in the plain";
        const myArr = text15.match("ain");
        document.write("demo31: " + (myArr ? myArr.length : 0) + " " + myArr + "<br>");

        // JAVASCRIPT INCLUDES()
        let text16 = "Hello world, welcome to the universe.";
        document.write("demo32: " + text16.includes("world") + "<br>");
        document.write("demo33: " + text16.includes("world", 12) + "<br>");

        // JAVASCRIPT STARTSWITH() METHOD
        document.write("demo34: " + text16.startsWith("hello") + "<br>");
        document.write("demo35: " + text16.startsWith("world", 5) + "<br>");

        // JAVASCRIPT WITH() ENDSMETHOD
        let text17 = "John Doe";
        document.write("demo36: The text ends with Doe and is: " + text17.endsWith("Doe") + "<br>");

        // JAVASCRIPT STRINGS TEMPLATES
        let firstName2 = "John";
        let lastName = "Doe";
        let text18 = ` Welcome ${firstName2}, ${lastName} `;
        document.write("demo37: " + text18 + "<br>");

        // Expression Substitution
        let price = 10;
        let VAT = 0.25;
        let total2 = ` Total : ${(price * (1 + VAT)).toFixed(2)}`;
        document.write("demo38: " + total2 + "<br>");

        // HTML TEMPLATES
        let header = "Template Strings";
        let tags = ["template strings", "javascript", "es6"];
        let html = `<h2>${header}</h2><ul>`;
        for (const x of tags) {
            html += `<li>${x}</li>`;
        }
        html += `</ul>`;
        document.write("demo39: " + html + "<br>");

        // MULTILINE STRINGS
        let line= `the quick brown
                    fox jumps over the
                    lazy dog`;
        document.write("demo40: " + line + "<br>");

        // JAVASCRIPT REGULAR EXPRESSIONS
        let search = "visit w3schools";
        let result10 = search.search(/w3schools/i);
        document.write("w3schools is in position: " + result10 + "<br>");

        // using the replace()
        let search2 = "visit Microsoft";
        let result11 = search2.replace(/microsoft/i, "W3Schools");
        document.write(result11 + "<br>");

        // USING THE REGULAR OBJECT
        // USING THE TEST() METHOD
        const pattern  = "The best things in life are free";
        const pattern2 = /e/;
        const result12= pattern2.test(pattern);
        document.write(result12 + "<br>");

        // USING THE EXEC() METHOD
        const obj = /e/.exec("The best things in life are free!");
        document.write("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input + "<br>");

        // STRING OBJECTS
        const str = new String("Hello World");
        document.write("String object: " + str + "<br>");
        document.write("String object type: " + typeof str + "<br>");
    