const todoForm = document.querySelector('#newTodoForm');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newTodo = document.createElement('li');
    const inputValue = document.querySelector('#text').value;
    newTodo.innerText = inputValue;
    todoForm.reset();

    todoList.appendChild(newTodo);
})