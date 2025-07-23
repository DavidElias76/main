
// get the DOM elements
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryDropdown = document.getElementById("category-dropdown");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryNameText = document.querySelector(".category-name");
const categoryList = document.getElementById("category-list");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

// function to check local storage and array
const getBookmarks = () => {

    try{
        // get bookmarks array from locale storage using the bookmarks key
        const stored = localStorage.getItem("bookmarks");
        const bookmarksArr = JSON.parse(stored); // convert the bookmark array into the original format and not strings 
        
        if(Array.isArray(bookmarksArr) &&
         bookmarksArr.every(item => 
            typeof item === "object" &&
            item != null  &&
            "name" in item &&
            "category" in item &&
            "url" in item
          )
        ){
            return bookmarksArr; // return the array

          }else{
            return []; //return an empty array
          }
    }catch(e){
        return [];
    }
} 

// function to display or close the form section and main section
const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden"); // main section
    formSection.classList.toggle("hidden"); // form section
} 

// hide or display category
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// function to reset the values
const resetForm = () => {
    nameInput = "";
    urlInput = "";
}

// add event listener on the add bookmark button
addBookmarkButton.addEventListener("click", () => {
  categoryNameText.innerText = categoryDropdown.value; // add the text to the dropdown menu to the h2 element
  displayOrCloseForm(); // callback function
});

// add an event listener on the go back buttton
closeFormButton.addEventListener("click", () => {
    displayOrCloseForm();
})

// add a bookmark form
addBookmarkButtonForm.addEventListener("click", () => {
    const bookmarkObj = {
        name: nameInput.value,
        category: categoryDropdown.value,
        url:  urlInput.value
    }

    // callback the getBookmarks function
    const bookmarksArray = getBookmarks();
    bookmarksArray.push(bookmarkObj);

    // update the local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray)); // convert the values of the array into a strings
    
}) 

// view category button
viewCategoryButton.addEventListener("click", () => {
    const selectedDrodownValue = categoryDropdown.value; // get the value of the dropdown list 
    categoryNameText.innerText = selectedDrodownValue; // adds a text to the h2 element with selected category
    const bookmarksArray = getBookmarks(); // callback the array

    categoryList.innerHTML = ""; // clear the category list 
    const categoryBookmark = bookmarksArray.some(item => item.category === selectedDrodownValue);

    if(categoryBookmark){
        categoryList.innerHTML =  `<p>No Bookmarks found</p>`
    }else{
        bookmarksArray.map(bookmark => `
            <label><input type ="radio" id= "${bookmark.name}" value= "${bookmark.name}" name= "category-bookmark">${bookmark.name}</label>
            <label><a href ="${bookmark.url}">"${bookmark.name}</a></label>`).join("");
    }

    // callback the function to hide the main section and shows the bookmark section
    displayOrHideCategory();
})
 
closeListButton.addEventListener("click", () => {
    displayOrHideCategory();
})

// delete the bookmark fuction
deleteBookmarkButton.addEventListener("click", () => {
    const selectedRadio =  document.querySelectorAll('input[name="category-bookmark"]:checked'); // get the radio button selected

    // check if bookmark is not select and alert message is shown
    if(!selectedRadio){
        alert("Please select a bookmark to delete");
        return;
    }

    // get the selected radio value and selected category dropdown value
    const selectedName = selectedRadio.value;
    const selectedCategory = categoryDropdown.value;

    // METHEOD 1: USING THE FILTER METHOD
    const bookmarksArray= getBookmarks();
    const updatedBookmarks = bookmarksArray.filter(d => !(d.name === selectedName && d.category === selectedCategory)); // It filters out (removes) the bookmark object that matches both the selected name and category.

    // // METHOD 2: USING THE FINDINDEX() METHOD
    // const indexToRemove = bookmarksArray.findIndex(d => d.name === selectedName && d.category === selectedCategory); // find the index of the object with the same name and same category
    // // check if the index is not -1 (if the object is found)
    // if(indexToRemove !== -1){
    //     bookmarksArray.splice(indexToRemove, 1); // remove the object at the index found
    // }
    // // update the item to  local strorage
    // localStorage.setItem("bookmarks", JSON.stringify(indexToRemove)); // update the bookmarks array in local
    
    // update the local storage
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

     const matchingBookmarks = updatedBookmarks.filter(b => b.category === selectedCategory);
        categoryList.innerHTML = matchingBookmarks.length === 0
        ? '<p>No Bookmarks Found</p>'
        : matchingBookmarks.map(bookmark => `
            <label for="${bookmark.name}">
            <input 
                type="radio" 
                id="${bookmark.name}" 
                name="category-bookmark" 
                value="${bookmark.name}" />
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            </label>`
        ).join("");
});


