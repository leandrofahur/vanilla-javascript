// UI vars:
const task = document.getElementById('task');                        
const addTaskBtn = document.getElementById('add-task-btn');          
const taskFilter = document.getElementById('task-filter');           
const deleteTaskBtn = document.getElementById('delete-task-btn');    
const taskList = document.querySelector('.collection');              



// Load all events listeners:
const loadAllEventsListeners = () => {
  // Click on btn ( Add Task ):
  addTaskBtn.addEventListener('click', onAddTaskBtnClick);
}

// Handle the ( Add Task ) button:
const onAddTaskBtnClick = () => {
  // Check if there is something in the field:
  if(task.value === '') {
    alert('Add a new task');
  } else {
    // console.log(task.value);
    
  }
}


loadAllEventsListeners();








