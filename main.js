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
   li.classList.add('marg');
   input.value = '';
   btnRemove.innerText = ' Remove';
   btnRemove.classList.add('marg');
   
   li.append(btnRemove);
   ol.append(li);

   li.addEventListener('click', function(e) {
       if(e.target.tagName === 'LI') {
           li.classList.toggle('done');
       }
       
   });

   document.body.append(ol);
});