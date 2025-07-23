// dialog- lets you display important information  or action to the user

// modal dialog
// - type of dialog that forces the user to interact with it before they can access the rest of the application webpage

// non-modal dialog
// - allows the user to ontinue interacting with the webpage or application even when the dialog is open

const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-btn");

openButton.addEventListener("click", () => {
    dialog.showModal();// foreces intercation with the use
    // dialog.show(); // doesnot prevent access to the rest of the content 
});

// the button should be inside the dialog box
closeButton.addEventListener("click", () => {
    dialog.close()// close the dialog box
});

// dialog to display sign up form

const dialogForm = document.getElementById("signUp-modal");
const buttonForm = document.getElementById("signUp");
const cancelButton = document.getElementById("cancel");

// show the dialog form
buttonForm.addEventListener("click", () => {
    dialogForm.showModal();
});
// close the dialogo form
cancelButton.addEventListener("click", () => {
    dialogForm.close();
});





