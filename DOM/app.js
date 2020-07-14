// Change the title content:
const h1 = document.querySelector('h1');
// console.log(h1);
// h1.textContent = 'Manipulating the DOM';

// Grab the unordered-list element:
const li = document.getElementsByTagName('li');
console.log(li);

li[0].textContent = 'First child'; 
li[2].textContent = 'Last child'; 
  
// Grab from class:
const card = document.querySelector('ul').getElementsByTagName('li');
console.log(card);

// Transform the HTMLCollection into an array:
const cardArray = Array.from(card);
console.log(cardArray);
cardArray.forEach((li, index) => {
  console.log(li);
  li.textContent = `Child number ${index}`;
});




