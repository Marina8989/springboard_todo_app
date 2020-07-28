let form = document.querySelector('#newTodoForm');
const inputt = document.querySelector('#text');
const btnn = document.querySelector('#btn');
const ul = document.querySelector('#todoList');
const todo = JSON.parse(localStorage.getItem("todos")) || [];


for (let i = 0; i < todo.length; i++) {
    let li = document.createElement('li');
    li.innerText = todo[i].todoList;
    li.isCompleted = todo[i].isCompleted ? true : false;
    if (li.isCompleted) {
        li.style.textDecoration = 'line-through';
    }
    ul.appendChild(li);
}

btnn.addEventListener('click', function (e) {
    e.preventDefault();
    let li = document.createElement('li');
    let inputt = document.querySelector("#text").value;

    li.innerText = inputt;
    inputt.value = '';
    li.isCompleted = false;
    
    form.reset();
    ul.appendChild(li);
    
    todo.push({ todoList: li.innerText, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(todo));

});

ul.addEventListener('click', function (e) {
    let clickedListItem = e.target;

    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = 'line-through';
        clickedListItem.isCompleted = true;
    } else {
        clickedListItem.style.textDecoration = 'none';
        clickedListItem.isCompleted = false;
    }

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].todoList === clickedListItem.innerText) {
            todo[i].isCompleted = clickedListItem.isCompleted;
            localStorage.setItem('todoList', JSON.stringify(todo));
        }
    }
});



