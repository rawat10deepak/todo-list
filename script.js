var taskCount = 0;

var todoFooterPending = document.querySelector('.todo-footer__pending');
var addTodoButton = document.getElementById('add-button');
var clearAllButton = document.querySelector('.todo-footer__clearall');
var todoItemsList = document.querySelector('.todo-list__items');
var todoTextField = document.getElementById('add-field');
var todoFooter = document.querySelector('.todo-footer');

addTodoButton.addEventListener('click', () => {
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
  todoFooterPending.innerHTML = `You have ${taskCount} pending tasks!!`;
  taskCount === 0
    ? ((clearAllButton.style.display = 'none'),
      (todoFooter.style.textAlign = 'center'),
      (todoItemsList.style.border = 'none'))
    : ((clearAllButton.style.display = 'block'),
      (todoFooter.style.textAlign = 'start'),
      (todoItemsList.style.borderTop = '1px solid #ccc'));
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
  button.addEventListener('click', () => {
    button.parentElement.remove();
    taskCount--;
    updateTaskCountInFooter();
  });
};

const removeAllTasks = () => {
  todoItemsList.innerHTML = '';
};

updateTaskCountInFooter();
