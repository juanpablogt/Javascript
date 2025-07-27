const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    console.log(taskText);

});

// toma el valor del input y lo muestra en la consola