const todoForm = document.querySelector('#newTodoForm');
const todoList = document.querySelector('#todoList');
const savedTodo = JSON.parse(localStorage.getItem('todos')) || [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newTodo = document.createElement('li');
    const inputValue = document.querySelector('#text').value;
    newTodo.innerText = inputValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    
    todoList.appendChild(newTodo);

    savedTodo.push({task: newTodo.iinerText, isCompleted: false});
    localStorage.setItem('todos', JSON.stringify(savedTodo));
})

todoList.addEventListener('click', function(e) {
    let completedTodo = e.target;
   
    if(!completedTodo.isCompleted) {
       completedTodo.style.textDecoration = 'line-through';
       completedTodo.isCompleted = true;
    }else {
       completedTodo.style.textDecoration = "none";
       completedTodo.isCompleted = false;
    }

})