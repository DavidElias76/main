
const regex = /freeCodeCamp/;
const match = 'freeCodeCamp is a nonprofit community that helps you learn to code for free.';
const result = match.match(regex); 
const replaced  = match.replace(regex, 'FCC'); // Replace 'freeCodeCamp' with 'FCC'
document.writeln(result ? `Match found: ${result}` + "<br>" : 'No match found.' ); // Output: Match found: freeCodeCamp
document.writeln(`Replaced text: ${replaced}` + "<br>"); // Output: Replaced text: FCC is a nonprofit community that helps you learn to code for free.
console.log(`Match found: ${result}`); // Log the match result
console.log(`Replaced text: ${replaced}`); // Log the replaced text

// matchAll() method and replaceAll() method

// they replace all occurrences of a pattern in a string without the need for a global flag (g) in the regular expression.  

// const pattern = /freecodecamp/;
// const text = 'freeCodeCamp is a nonprofit community that helps you learn to code for free. freeCodeCamp is great!';
// const matches = text.matchAll(pattern); // Find all matches
// const replacedAll = text.replaceAll(pattern, 'FCC'); // Replace all occurrences
// document.writeln(`match found: ${matches}` + "<br>") // Output: Matches found: freeCodeCamp, freeCodeCamp
// document.writeln(`Replaced text: ${replacedAll}` + "<br>"); // Output: Replaced text: FCC is a nonprofit community that helps you learn to code for free. FCC is great!


// passing a regular expression to a na Array.from()

const regexPattern = /freeCodeCamp/g; // Regular expression to match words
const textToMatch = 'freeCodeCamp is a nonprofit community. freeCodeCamp is great!';
const matchesArray = textToMatch.matchAll(regexPattern); // Find all matches
const resultArray = Array.from(matchesArray); // Convert matches to an array
document.writeln(`Matches found: ${resultArray}` + "<br>"); // Output: Matches found: freeCodeCamp, freeCodeCamp
console.log(`Matches found: ${resultArray}`); // Log the matches found  


// LOOKHEAD AND LOOKBEHIND ASSERTIONS  - look for patterns in the string without including them in the match

const regexLookahead = /free(?= code)/i; // Positive lookahead
const textLookahead = 'freeCodeCamp is a nonprofit community that helps you learn to code for free.';
const testLookahead = 'free code is a great resource for learning.';    
document.write("Testing using the positive lookahead"+ "<br>" +regexLookahead.test(testLookahead)+ "<br>"); // output: match false
document.writeln(regexLookahead.test(textLookahead) + "<br>"); // Output: Match found with lookahead: free
document.writeln(regexLookahead.test(textLookahead) + "<br>"); // Output: Match found with lookahead: free


const regexNegativeLookahead = /free(?! code)/i; // Negative lookahead  
const textLookahead2 = 'freeCodeCamp is a nonprofit community that helps you learn to code for free.';
const textLookahead3 = 'free code camp';
document.writeln("Testing using the negative lookahead :" +"<br>" +regexNegativeLookahead.test(textLookahead2) + "<br>"); // Output: Match found with negative lookahead: freeCodeCamp
document.writeln(regexNegativeLookahead.test(textLookahead2) + "<br>"); // Output: Match found with negative lookahead: freeCodeCamp
document.writeln(regexNegativeLookahead.test(textLookahead3) + "<br>"); // Output: Match found with negative lookahead: freeCodeCamp

// LLOKBEHIND ASSERTIONS - Match patterns that are preceded by a specific pattern

const regexBehind = /(?<=free )code/i; // Positive lookbehind
const textBehind = 'free code is a great resource for learning.';
document.writeln("Testing using the positive lookbehind :" + "<br>" + regexBehind.test(textBehind) + "<br>"); // Output: Match found with lookbehind: code

// QUANTIFIRES

const regexQuantifier = /^\d{1}$/; // Match one or two times
document.writeln(testQuantifier.test("1234")) + "<br>"; // Output: Match found with quantifier: true   


const regexQuantifier2 = /^\d{1,}$/; // Match one to three times: add a comma to match more than one digit
document.writeln(regexQuantifier2.test("123")) + "<br>"; // Output: Match found with quantifier: true


