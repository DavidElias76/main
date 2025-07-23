const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:"A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

// loop through each iteration of the library array

function displayBooksUsingFor(catalog) {
  let output = "This is using the forEach loop method : <br>";
  // loop each element in the arrary
  catalog.forEach((book) => {
    // concatenate the output string with the book details
    output += `{ title: ${book.title},<br> author: ${book.author}, <br> about: ${book.about}, <br> pages: ${book.pages}}` + "<br>"; // book represents the object in the array
  });
  return output + "<br>";
}
const display = displayBooksUsingFor(library);
// display the output in the browser
document.writeln(display);


//using the for in loop method

function displyBooksUsingForInLoop(catalog){
  let result = "This is using the for in loop method : <br>"; 
  // the for in loop to loop the elements in the array
  for(const key in catalog){
    result+= `{title: ${catalog[key].title},<br> author: ${catalog[key].author}, <br>  about: ${catalog[key].about}, <br> pages: ${catalog[key].pages}} <br>`;
  }
  return result + "<br>";
}
const displayUsingForIn = displyBooksUsingForInLoop(library);
document.writeln(displayUsingForIn);


// using the entries method to loop through the array
function displayBooksUsingEntries(catalog) {
  let output = "This is using the entries method : <br>";
  // loop through the array using the entries method
  for (const [index, book] of catalog.entries()) {
    output += `{ title: ${book.title},<br> author: ${book.author}, <br> about: ${book.about}, <br> pages: ${book.pages}} <br>`;
  }
  return output + "<br>";
}

document.writeln(displayBooksUsingEntries(library));

// using the map and filter high order functions

function displayUsingMapMethod(catalog){
  let output ="This is using the map method:  <br>";
  // using the map method to loop through the array
  catalog.map((book) => {
    output += `{ title: ${book.title},<br> author: ${book.author}, <br> about: ${book.about}, <br> pages: ${book.pages}} <br>`;
  });
  return output + "<br>";
}
document.writeln(displayUsingMapMethod(library));

// using the filter method to filter the books by author
function displayUsingFilterMethod(catalog){
  let output = "This is using the filter method: <br>";
  // filter the books by author 
  catalog.filter((book) => {
    // check if the author is Arvid Kahl
    // if the author is Arvid Kahl, then display the book details
    if (book.author === 'Arvid Kahl') {
      output += `{ title: ${book.title},<br> author: ${book.author}, <br> about: ${book.about}, <br> pages: ${book.pages}} <br>`;
    }
  });
  return output + "<br>";
}
document.writeln(displayUsingFilterMethod(library));

// using the reduce method to get the total number of pages in the library  
function displayUsingReduceMethod(catalog) {
  // book,pages get the value of the pages property in each book object
  let totalPages = catalog.reduce((acc, book) => acc + book.pages, 0);
  return `Total number of pages in the library: ${totalPages}`;
}

document.writeln(displayUsingReduceMethod(library));


// function displayBooks(catalog) {
//   let output = 'Books in the Library:\n';

//   catalog.forEach((book) => {
//     output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
//   });

//   return output;
// }

// function getBookSummaries(catalog) {
//   return catalog.map((book) => book.about);
// }

// function getBooksByAuthor(catalog, author) {
//   return catalog.filter((book) => book.author === author);
// }

// function getTotalPages(catalog) {
//   return catalog.reduce((acc, book) => acc + book.pages, 0);
// }