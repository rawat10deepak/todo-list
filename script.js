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
  list.id = `todo-list-item-${taskCount}`;
  list.classList.add('todo-list__item');
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.id = `todo-delete-${taskCount}`;
  deleteButton.classList.add('todo-delete');
  deleteTask(deleteButton);
  list.appendChild(deleteButton);
  todoItemsList.appendChild(list);
};

const deleteTask = (button) => {
  button.addEventListener('click', (event) => {
    console.log('deleteButton clicked');
    const deletedId = event.target.id;
    console.log(deletedId);
    const todoToBeDeleted = document.getElementById(
      `todo-list-item-${deletedId.split('-')[2]}`
    );
    todoToBeDeleted.remove();
    console.dir(event.target.id);
    taskCount--;
    updateTaskCountInFooter();
  });
};

const removeAllTasks = () => {
  todoItemsList.innerHTML = '';
};

updateTaskCountInFooter();
