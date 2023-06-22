// script.js
// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');



// Event listener for the button click
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task to the list
function addTask(){
    // Get the value from the input field
    const taskText = taskInput.value;

    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

     // Append the new item to the task list
     taskList.appendChild(taskItem);

     // Clear the input field
     taskInput.value = '';

     // Create a delete button for the task
     const deleteBtn = document.createElement('button');
     deleteBtn.innerText = 'Delete';

     // Event listener for the delete button click
     deleteBtn.addEventListener('click', deleteTask);

     // appends the deletBtn to the taskItem
     taskItem.appendChild(deleteBtn);

     // Create a checkbox for the task
     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';


     // Event listener for the checkbox change
     checkbox.addEventListener('change', toggleTaskCompleted);

     // Append the checkbox to the task item
     taskItem.appendChild(checkbox);


}
// Function to delete a task from the list
function deleteTask(){
    // Get the task item associated with the delete button
    const taskItem = event.target.parentElement;

    // Remove the task item from the list
    taskList.removeChild(taskItem);



}

// Function to toggle task completion
function toggleTaskCompleted(){
    const checkbox = event.target;
    const taskItem = checkbox.parentNode;
    

    if(checkbox.checked){
        taskItem.classList.add('completed');

    } 
    else{
        taskItem.classList.remove('completed');
    }
}