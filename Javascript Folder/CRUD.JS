
// CRUD OPERATIONS - refers to Create, Read, Update and Delete

import { use } from "react";

// create an array
let items= [];
// Create - creating a new data
function createItem(item){
    items.push(item);
}
// read- operation where data is retrieved form the database
function readItems(){
    return items;
}
// Update - involves modifying existing database
function updateItems(index, newItem){
    items[index] = newItem;
}
// delete - deleting from the database
function deleteItem(index){
    items.splice(index, 1);
}
// callback the functions
createItem("Book");
console.log(readItems());
updateItems(0, "Margazine");
console.log(updateItems());
deleteItem(0);
console.log(readItems())

// WEB API WEB STORAGE API
// store key-value pairs within allows developers to store information.

// localStorage methods
//  setItem() - set item to locaele storage
localStorage.setItem('username', 'JaneDoe');
// getItem() - get item from localestorage
let username = localStorage.getItem("username");
console.log(username);
// localeStorage() - remove item from locale storage
localStorage.removeItem("username");
// localeStorage.clear() - to clear all item in locale storage
localStorage.clear();


// EXAMPLE: TO STORE USERS THEME PREFERENCE

// to store users theme preferences
localStorage.setItem('theme', 'dark');

// Retrieve the stored theme preferences
const userTheme = localStorage.getItem('theme');
console.log(userTheme); // 'dark'

// remove the theme preferences
localStorage.removeItem("theme");

// clear all local storage
localStorage.clear();


// sessiom storage
// session storage is similar to local storage but it is cleared when the user closes the browser.

// storing data insession storage
sessionStorage.setItem('currentUser', 'JohnDoe');

// retrieve date in session storage
const user = sessionStorage.getItem('currentUser');
console.log(user)
// remove specific key from session storage
sessionStorage.removeItem("currentUser");

// call all sessionstorage data
sessionStorage.clear();

