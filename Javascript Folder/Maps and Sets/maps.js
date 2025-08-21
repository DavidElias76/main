// MAPS - FREECODECAMP

const ballerina = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Ballerina"
}

const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly"
}

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale"
}

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote"
}

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem"
}

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
}


const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });


const getBallerina = JSON.stringify(catalog.get(ballerina)); // convert the obejct into a string to see the output as a sting

document.writeln(getBallerina + "<br>");// output as a string

console.log(catalog.get(ballerina)); // output as an object in the console

// document.writeln(catalog.get(ballerina.small));
// document.writeln(catalog.get(prettyPolly.medium));

// update the catalog small 

const getBallerina1 = catalog.get(ballerina); // get the ballerina object from the catalog

getBallerina1.small = 25; // update the small value of ballerina    

document.writeln(JSON.stringify(getBallerina1) + "<br>"); // output the updated ballerina object as a string


const sellPlants = (plant, size, potNo) => {
    const stock = catalog.get(plant); // get the stock of the plant from the catalog
    const name =`${plant.scientificName} '${plant.cultivar}'`; // get the scientific name and cultivar of the plant
    const available = stock[size]; // get the available stock of the plant for the given size   

    if(available < potNo) {
        return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left..`;
    } else {
        stock[size]= stock[size] - potNo; // update the stock of the plant for the given size
        return `Sold ${potNo} ${size} size pots of ${name}.`;   
    }
   
}

document.writeln(sellPlants(ballerina, "small", 25) + "<br>"); // sell 5 small pots of ballerina
document.writeln(sellPlants(prettyPolly, "medium", 10) + "<br>"); // sell 10 medium pots of prettyPolly
// document.writeln(sellPlants(willowVale, "large", 1) + "<br>"); // sell 1 large pots of willowVale


// function to delet the ballerina key value pair from the catalog

function removePlant(plant) {
    // check if the plant exists in the catalog
    if(catalog.has(plant)) {
        catalog.delete(plant); // delete the plant from the catalog
        return `Deleted Plant from the catalog.<br>`;
    }
}

document.writeln(removePlant(ballerina) + "<br>"); // delete the ballerina from the catalog 

// function using for of loop to display the catalog
// using keys()

function displayCatalog(){
    let text = " ";
    for(const key of catalog.keys()){

        text+= "The keys are: " + "<br>" +JSON.stringify(key) + "<br>"; // convert the key to a string to display it
    }
    return text; // return the text to be displayed
}
document.writeln(displayCatalog() + "<br>"); // display the catalog

// function using for of loop to display the catalog and entries() method

function displayCatalogEntries(){
    let text1 = "The catalog entries are: <br>";

    for(const [key, value] of catalog.entries()){
        
        text1+= `${key.scientificName} '${key.cultivar}' - Small: ${value.small}, Medium: ${value.medium}, Large: ${value.large}<br>`;
    }
    return text1; // return the text to be displayed
}

document.writeln(displayCatalogEntries() + "<br>"); // display the catalog entries  


// function usiing the for loop to print the values of the catalog

function displayCatalogValues() {
    let text2 = " The values of catalog are: <br>";

    for(const val of catalog.values()) {

        text2+= `Small: ${val.small}, Medium: ${val.medium}, Large: ${val.large}<br>`;
    } 
    return text2; // return the text to be displayed      
}

document.writeln(displayCatalogValues() + "<br>"); // display the catalog values


// function to display using the forEach method  

function displayCatalogEach(){

    let catalogString = " The catalog using the forEach function is: <br>";

    catalog.forEach((value, key) => {
        catalogString += `${key.scientificName} '${key.cultivar}' : Small: ${value.small}, Medium: ${value.medium}, Large: ${value.large}<br>`;
    });
    return catalogString; // return the catalog string to be displayed
}

 document.writeln(displayCatalogEach() + "<br>"); // display the catalog using forEach method
// function to display the catalog using the forEach method with arrow function


// sets

// function t display extact elements in the array 

const displaySet = () => {

    // delcare a array a empty array
    const array = []

    for(const key of catalog.keys()){

        array.push(key.commonName); // push the common name of the plant into the array 
    }

    const set = new Set(array); //  create a set from the array to remove duplicates

    return set;
}

document.writeln(displaySet() + "<br>"); // display the set of common names of the plants
// function to display the set of common names of the plants using forEach method

const result = Array.from(displaySet())
document.writeln("The common names of the plants are: " + "<br> "+ result.join(", ") + "<br>" + "<br>"); // display the common names of the plants as a string


// BUILDING A VOTING SYSTEM USING MAPS AND SETS
// This code creates a simple voting system using a Map to store options and a Set to track voters for each option.

const poll = new Map();

function addOption(option){
    // adding an empty option to the poll map
    if(!option){
        return `Option cannot be empty.`;   
    }  
    // check if the option already exists in the poll map
    if(poll.has(option)){
        return `Option ${option} already exists.`;
    }
    // add the option to the poll map with a value of a empty set

    poll.set(option, new Set());
    return `Option ${option} added to the poll.`;
}

// function to vote for an option in the poll

function vote(option, voterId){
    // check if optionn extists in the poll map 
    if(!poll.has(option)){
        return `Option ${option} does not exist in the poll.`;
    }

   const voters = poll.get(option); 
    if(voters.has(voterId)){
        return `Voter with ID ${voterId} has already voted for ${option}.`; // check if the voter has already voted for the option
    }
    voters.add(voterId); // add the voter ID to the set of voters for the option
    return `Voter with ID ${voterId} has voted for ${option}.`; // return a message that the voter has voted for the option
}

function displayResults(){
    let results = "Poll Results:<br>";
    for(const [option, voters] of poll.entries()){
        results += `${option}: ${voters.size} votes<br>`; // display the option and the number of votes it has received
    }
    return results; // return the results to be displayed

}

console.log(addOption("Egypt")); // add Egypt option to the poll
console.log(addOption("Morocco")); // add Morocco option to the poll    
console.log(addOption("Turkey")); // add turkey option to the poll

console.log(vote("Egypt", "voter1")); // voter1 votes for Egypt
console.log(vote("Morocco", "voter2")); // voter2 votes for Morocco
console.log(vote("Turkey", "voter3")); // voter3 votes for Turkey

document.writeln(displayResults() + "<br>"); // display the results of the poll
