const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const todoList = document.querySelector('#todoList');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");

    if(input.value === '') {
      alert('Please add a todo first');
    }else {
       li.innerText = input.value;
       removeBtn.innerText = "Remove";
       input.value = "";

       li.appendChild(removeBtn);
       todoList.appendChild(li);

       li.addEventListener("click", function (e) {
         e.target.style.textDecoration = "line-through";
       });
    }
    removeBtn.addEventListener('click', function(e) {
         e.target.parentElement.remove();
    })
})