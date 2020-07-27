// Part 1

// For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

// As a user, you should be able to:

// Add a new todo(by submitting a form)
// Mark a todo as completed (cross out the text of the todo)
// Remove a todo

const input = document.querySelector('#text');
const btn = document.querySelector('#btn');
const ol = document.createElement('ol');
console.log(input);
console.log(btn);

btn.addEventListener('click', function(e) {
    e.preventDefault();
   const li = document.createElement('li');
   const btnRemove = document.createElement('button');

   li.innerText = input.value;
   input.value = '';
   btnRemove.innerText = ' Remove';
   

   li.append(btnRemove);
   ol.append(li);

   document.body.append(ol);
});