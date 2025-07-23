const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// an array to hold the data
const taskData = JSON.parse(localStorage.getItem("data")) || []; // array or the local storage 
// object to hold the current task
let currentTask ={};

//event listener to open the taskform and enter the inputs values
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden") //
);

// function to remove special characters in the title value
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '');
}

// function to addorupdateTaskForm update
const addOrUpdateTask = () => {
    // checks if the titleInput value has a value or empty
    if(!titleInput.value.trim()){
        alert("Please provide a title")
    }
    // checks if the task already exist in the array
    const dataArrIndex = taskData.findIndex(item => item.id === currentTask.id);

    // the task  
    const taskObj = {
        id: removeSpecialChars(`${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`), // give the id name a unique name
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    }

    // add the task inside the array
    if(dataArrIndex === -1){
        taskData.unshift(taskObj); // at the begining of the array
    }else{
        taskData[dataArrIndex] = taskObj; // assign the task to the task 
    }
    // set the data to local storage and convert it into a string
    localStorage.setItem("data", JSON.stringify(taskData))

    updateTaskContainer(); // callback the function
    reset(); // callback the reset function to reset the inputs after the input values have beeen added and updated to the updateTaskFunction
}

// function to update the div container
const updateTaskContainer = () =>  {
    tasksContainer.textContent = ""; // makes sure that the task container is empty
    
    taskData.forEach(({id, title, date, description})=> {
        tasksContainer.innerHTML = 
         `<div class="task" id="${id}">
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Date: </strong>${date}</p>
            <p><strong>Description: </strong>${description}</p>
            <button type ="button" class="btn" onclick="editTask(this)">Edit</button>
            <button type ="button" class= "btn" onclick="deleteTask(this)">Delete</button>
         </div>`
    });
} 

// function to edit the task
const editTask = (buttonEl) => {
    // this looks for the task that is the same as the buttonEl.parentElement.id which is the div element
    const dataArrIndex = taskData.findIndex(item => item.id === buttonEl.parentElement.id);

    // assign the value to the current task object
    currentTask = taskData[dataArrIndex];
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    taskForm.classList.toggle("hidden");
    addOrUpdateTaskBtn.innerText = "Update Task";
}

// function to delete a task
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(item => item.id === buttonEl.parentElement.id)

    buttonEl.parentElement.remove(); // remove the parent element which is the dvi element
    taskData.splice(dataArrIndex, 1); // removes the element inside the array
}

// the reset function to reset the input fields and the object
const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};

    // check the length of the array
    if (taskData.length) {
        updateTaskContainer();
    }
}

// add event listeners on the close button
closeTaskFormBtn.addEventListener("click", ()=> {
    // checks if the input contains value
    const formInputsContainsValues = titleInput.value || dateInput.value || descriptionInput.value;
    // checks if form input are updated
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    if(formInputsContainsValues && formInputValuesUpdated){
        confirmCloseDialog.showModal(); // open the dialog box message 
    }else{
        reset(); // callback the reset function
    }
});

// discard and cancel event listener to close the dialog box message
discardBtn.addEventListener("click", ()=> {
    confirmCloseDialog.close();
    reset();
});
// cancel button to close the dialog box message
cancelBtn.addEventListener("click", ()=> {
    confirmCloseDialog.close();
});

// add event listener to prevent default submission of the document
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask(); // callback the function 
});


