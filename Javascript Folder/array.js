
    // creating a new array

    const cars = ["Saab", "Volvo", "BMW"];

    document.write("demo1: " + cars[0] + "<br>");
    document.write("demo2: " + cars[1] + "<br>");
    document.write("demo3: " + cars[2] + "<br>");

    // changing an array

    cars[0] = "Audi"; // changed saab to Audi

    document.write("demo4: " + cars + "<br>"); // print out the array

    // CONVERTING AN ARRAY TO A STRING

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.write("demo5: " + fruits.toString() + "<br>");// returns array as strings

    // ARRAY LENGTH

    document.write("demo6: The number of elements in an array: " + fruits.length + "<br>");

    // ACCESSING THE LAST ARRAY ELEMENT

    document.write("demo7: The last element is: " + fruits[fruits.length - 1] + "<br>");

    // LOOP AN ARRAY

    let lgth = fruits.length; // Length of the array
    let text = ""; // Initialize text

    for (let i = 0; i < lgth; i++) {
        text += fruits[i] + "<br>";
    }
    document.write("demo8: " + text);

    // LOOP ARRAY ELEMENTS IN UNORDERED LIST

    let l = fruits.length;
    let text2 = "<ul>";
    for (let i = 0; i < l; i++) {
        text2 += "<li>" + fruits[i] + "</li>";
    }
    text2 += "</ul>";
    document.write("demo8 (ul): " + text2);

    // LOOP ELEMENTS IN ORDERED LIST

    let k = fruits.length;
    let text3 = "<ol>";
    for (let i = 0; i < k; i++) {
        text3 += "<li>" + fruits[i] + "</li>";
    }
    text3 += "</ol>";
    document.write("demo9: " + text3);

    // forEach() function

    let text4 = "<ul>";
    fruits.forEach(function(value){
        text4 += "<li>" + value + "</li>";
    });
    text4 += "</ul>";
    document.write("demo10: " + text4);

    // ADDING ARRAY FUNCTION

    fruits.push("lemon");
    document.write("demo11: " + fruits + "<br>");

    // HOW TO RECOGNIZE AN ARRAY

    document.write("demo12: " + Array.isArray(fruits) + "<br>");
    document.write("demo13: " + (fruits instanceof Array) + "<br>");

    // NESTED ARRAY AND OBJECTS

    let x = "";
    const myObj = {
        name: "John",
        age: 30,
        cars: [
            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }
    for (let i in myObj.cars){
        x+= "<h2>" + myObj.cars[i].name + "</h2>";
        for (let j in myObj.cars[i].models){
            x+=myObj.cars[i].models[j] + "<br>";
        }
    }
    document.write("demo14: " + x);

    // ARRAY METHODS

    document.write("demo15: " + fruits.toString() + "<br>");
    document.write("demo16: " + fruits.at(2) + "<br>");
    document.write("demo17: " + fruits.join(" * ") + "<br>");

    // POPPING AND PUSHING

    document.write("demo18: " + fruits.pop() + "<br>" + fruits + "<br>");
    document.write("demo19: " + fruits.push("Kiwi") + "<br>");
    document.write("demo20: " + fruits + "<br>");

    // SHIFTING ELEMENTS

    document.write("demo21: " + fruits.shift() + "<br>");
    document.write("demo20: " + fruits + "<br>");
    document.write("demo21: This is unshift: " + fruits.unshift("lemon") + "<br>");
    document.write("demo22: " + fruits + "<br>");

    // CHANGING ELEMENTS

    fruits[fruits.length] = "Pears";
    document.write("demo23: " + fruits[fruits.length - 1] + "<br>");
    document.write("demo24: " + fruits + "<br>");

    // MERGING TWO ARRAYS TOGETHER

    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys);
    document.write("demo25: " + myChildren + "<br>");

    const arr3 = ["Robin", "Morgan"];
    const myChildren2 = myGirls.concat(myBoys, arr3);
    document.write("demo26: " + myChildren2 + "<br>");

    const myChildren3 = arr3.concat("Peter");
    document.write("demo27: " + myChildren3 + "<br>");

    // ARRAY COPYWITHIN()
    document.write("demo28: " + fruits.copyWithin(2, 0) + "<br>");

    // FLATTENING AN ARRAY

    const myArr = [[1,2], [3,4], [5,6]];
    const newArr = myArr.flat();
    document.write("demo29: " + newArr + "<br>");

    // SPLICING AND SLICING

    fruits.splice(2,0,"Banana", "Kiwi");
    document.write("demo30: The array after sliced are: " + fruits + "<br>");

    const citrus = fruits.slice(1);
    document.write("demo32: " + citrus + "<br>");

    const citrus2 = fruits.slice(1, 3);
    document.write("demo33: Array after sliced is: " + citrus2 + "<br>");

    // JAVASCRIPT ARRAY SEARCH

    document.write("demo34: The array is: " + fruits + "<br>");
    let position1 = fruits.indexOf("Apple");
    document.write("demo35: Apple is in index: " + position1 + "<br>");
    let position2 = fruits.lastIndexOf("Apple");
    document.write("demo36: Apple is in last indexof: " + position2 + "<br>");

    const temp = [27, 28, 30, 40, 42, 35, 30];
    let first = temp.find(function(value){ return value > 18; });
    document.write("demo37: The temp is greater than 18 is: " + first + "<br>");
    let first2 = temp.findIndex(function(value){ return value > 18; });
    document.write("demo38: The index of temp is greater than 18 is: " + first2 + "<br>");
    let high = temp.findLast(x => x > 40);
    document.write("demo39: The temp value from the last: " + high + "<br>");
    let high2 = temp.findLastIndex(x => x > 40);
    document.write("demo40: The temp value from the last: " + high2 + "<br>");

    // JAVASCRIPT SORTING ARRAYS

    fruits.sort();
    document.write("demo41: The array is sorted: " + fruits + "<br>");
    fruits.reverse();
    document.write("demo42: The array is reversed: " + fruits + "<br>");
    fruits.toSorted();
    document.write("demo43: The array is tosorted: " + fruits + "<br>");
    fruits.toReversed();
    document.write("demo44: The array is to reversed: " + fruits + "<br>");

    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    document.write("demo45: Sorting numeric array in ascending order: " + points + "<br>");
    points.sort(function(a, b){return b - a});
    document.write("demo46: Sorting numeric array in descending order: " + points + "<br>");

    // SORTINNG ALPHABETICALLY 
    function myFunction1() {
        points.sort();
        document.write("demo47: " + points + "<br>");
    }

    // display the original array
    document.write("demo50: " + points + "<br>");
    function myFunction4(){
        points.sort(function(){return 0.5 - Math.random()});
        document.write("demo50: The points at random are: " + points + "<br>");
    }

    // FIND THE LOWEST AND THE HIGHEST VALUE USING THE COMPARATIVE FUNCTION

    points.sort(function(a, b){return a - b });
    document.write("demo51: The lowest value is: " + points[0] + "<br>");
    points.sort(function(a, b){return b - a});
    document.write("demo52: The highest value is: " + points[0] + "<br>");

    // USING MATH.MIN() ON AN ARRAY
    document.write("demo53: The lowest value using math min is: " + Math.min.apply(null, points) + "<br>");
    document.write("demo54: The highest value using math max is: " + Math.max.apply(null, points) + "<br>");

    // JAVASCRIPT ARRAY MINIMUM METHOD
    function myArrayMin(arr) {
        let len = arr.length;
        let min = Infinity;
        while (len--) {
            if (arr[len] < min) {
                min = arr[len];
            }
        }
        return min;
    }
    document.write("demo55: The lowest value using minimum method: " + myArrayMin(points) + "<br>");

    // JAVASCRIPT ARRAY MAXIMUM METHOD
    function myArrayMax(arr) {
        let len = arr.length;
        let max = -Infinity;
        while (len--) {
            if (arr[len] > max) {
                max = arr[len];
            }
        }
        return max;
    }
    document.write("demo56: The highest value using the maximum method: " + myArrayMax(points) + "<br>");

    // SORTING OBJECT ARRAYS
    const vehicles = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
    ];

    vehicles.sort(function(a, b){
        return a.year - b.year;
    });
    document.write("demo57: Arranging in ascending order<br>" +
        vehicles[0].type + " " + vehicles[0].year + "<br>" +
        vehicles[1].type + " " + vehicles[1].year + "<br>" +
        vehicles[2].type + " " + vehicles[2].year + "<br>");

    vehicles.sort(function(a ,b){
        return b.year - a.year;
    });
    document.write("demo58: Arranging in descending order<br>" +
        vehicles[0].type + " " + vehicles[0].year + "<br>" +
        vehicles[1].type + " " + vehicles[1].year + "<br>" +
        vehicles[2].type + " " + vehicles[2].year + "<br>");

    vehicles.sort(function(a, b){return a.type.localeCompare(b.type)});
    vehicles.sort(function(a, b){return b.type.localeCompare(a.type)});
    document.write("demo59: Arranging in descending order<br>" +
        vehicles[0].type + " " + vehicles[0].year + "<br>" +
        vehicles[1].type + " " + vehicles[1].year + "<br>" +
        vehicles[2].type + " " + vehicles[2].year + "<br>");

    vehicles.sort((p1, p2) => {
        if (p1.year < p2.year) return -1;
        if (p1.year > p2.year) return 1;
        return 0;
    });
    let txt = "";
    vehicles.forEach(function(value) {
        txt += value.type + " " + value.year + "<br>"; 
    });
    document.write("demo60: " + txt);

    vehicles.sort((a, b) => a.year - b.year);
    document.write("demo61: " + vehicles.map(v => v.type + " " + v.year).join(", ") + "<br>");

