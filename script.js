var taskCount = 0;

var todoFooterPending = document.querySelector('.todo-footer__pending');
var addTodoButton = document.getElementById('add-task');
var clearAllButton = document.querySelector('.todo-footer__clearall');
var todoItemsList = document.querySelector('.todo-list__items');
var todoTextField = document.getElementById('add-button');

addTodoButton.addEventListener('click', () => {
  console.log('add todo clicked');
  console.log('added task is  - ' + todoTextField.value);
  if (todoTextField.value && todoTextField.value !== '') {
    taskCount++;
    addTaskToTaskList();
    updateTaskCountInFooter();
    todoTextField.value = '';
  }
});

clearAllButton.addEventListener('click', () => {
  console.log('clear all clicked');
  taskCount = 0;
  removeAllTasks();
  updateTaskCountInFooter();
});

const updateTaskCountInFooter = () => {
  todoFooterPending.innerHTML = `You have ${taskCount} pending tasks`;
};

const addTaskToTaskList = () => {
  const list = document.createElement('li');
  list.innerHTML = todoTextField.value;
  list.classList.add('todo-list__item');
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.classList.add('todo-delete');
  list.appendChild(deleteButton);
  todoItemsList.appendChild(list);
};

const removeAllTasks = () => {
  todoItemsList.innerHTML = '';
};

updateTaskCountInFooter();
