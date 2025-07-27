const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
// Cargar tareas desde Local Storage al iniciar
loadTasksFromLocalStorage();

// Modo oscuro
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

//Se evita el comportamiento por defecto del formulario
//se toma el valor del input de la tarea
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    taskList.append(createTaskElement(taskText));
    storeTasksLocalStorage(taskText);
    taskInput.value = '';
  }
});

// Se agrega el elemento de la tarea al DOM
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // Crear botones
  li.appendChild(createButton('X', 'delete-btn'));
  li.appendChild(createButton('✎', 'edit-btn'));

  return li;
}

function createButton(text, className) {
  const btn = document.createElement('span');
  btn.className = className;
  btn.textContent = text;
  return btn;
}
// Eliminar tarea
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
   deleteTask(event.target.parentElement);
  } else if (event.target.classList.contains('edit-btn')) {
    editTask(event.target.parentElement);
    
  }
});

function deleteTask(taskItem) {
  if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
    taskItem.remove();
  }
} 
// Editar tarea
function editTask(taskItem) {
  const newTask = prompt('Edita tu tarea:', taskItem.firstChild.textContent);
  if (newTask != null)  {
    taskItem.firstChild.textContent = newTask;
    editTaskInLocalStorage();
  }
}

// Guardar tareas en Local Storage
function storeTasksLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Cargar tareas desde Local Storage al iniciar
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    taskList.appendChild(createTaskElement(task));
  });
}

// editar tarea en local storage

function editTaskInLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll('li')).map ((li) =>
    li.firstChild.textContent
  );
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(tasks);
}