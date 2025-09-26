
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// fetch data
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) =>  res.json())
    .then((data) => {
        authorDataArr =  data; //assign the data array 
        // call the function and pass the array 
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex))
 })

// display authors
const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += 
        `<div class= "user-card" id=${index}>
            <h2>${author}</h2>
            <img class="user-img" src="${image}" alt="${author} avatar">
            <div class="purple-divider"></div>s
             <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
             <a class="author-link" href="${url}" target="_blank">${author} author page</a>
        </div>`
    });
}

// fetch more values
const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex)); // call the function to fetch other data using new startingIndex and endingIndex

    // change the cursor and text content of the loadMorebuttons 
    if (authorDataArr.length <= endingIndex) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No more data to load";
        loadMoreBtn.style.cursor = "not-allowed"; // change the cursor style
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'No more data to load';
  }
}

loadMoreBtn.addEventListener('click', fetchMoreAuthors);