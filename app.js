const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const todoList = document.querySelector('#todoList');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const li = document.createElement('li');
    const removeBtn = document.createElement('button');

    li.innerText = input.value;
    removeBtn.innerText = 'Remove';
    input.value = '';

    li.appendChild(removeBtn);
    todoList.appendChild(li);
})