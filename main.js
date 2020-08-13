const todoForm = document.querySelector('#newTodoForm');
const todoList = document.querySelector('#todoList');
const savedTodo = JSON.parse(localStorage.getItem('todos')) || [];

for(let i = 0; i < savedTodo.length; i++) {
     const newTodo = document.createElement('li');
     newTodo.innerText = savedTodo[i].task;
     newTodo.isCompleted = savedTodo[i].isCompleted ? true : false;

     if(newTodo.isCompleted) {
       newTodo.style.textDecoration = 'line-through';
     }
     todoList.appendChild(newTodo);
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newTodo = document.createElement('li');
    const inputValue = document.querySelector('#text').value;
    newTodo.innerText = inputValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    
    todoList.appendChild(newTodo);

    savedTodo.push({task: newTodo.innerText, isCompleted: false});
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

  for(let i = 0; i < savedTodo.length; i++) {
      if(savedTodo[i].task === completedTodo.innerText) {
         savedTodo[i].isCompleted = completedTodo.isCompleted;

         localStorage.setItem('todos', JSON.stringify(savedTodo));
      }
  }
})