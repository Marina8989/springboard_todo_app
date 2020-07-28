const input = document.querySelector('#text');
const btn = document.querySelector('#btn');
const ol = document.createElement('ol');

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
 
  
   btnRemove.addEventListener('click', function(e) {
     if(e.target.tagName === 'BUTTON') {
       btnRemove.parentElement.remove();
     }
   });

    document.body.append(ol);
});




