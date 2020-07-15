// // Change the title content:
// const h1 = document.querySelector('h1');
// // console.log(h1);
// // h1.textContent = 'Manipulating the DOM';

// // Grab the unordered-list element:
// const li = document.getElementsByTagName('li');
// // console.log(li);

// li[0].textContent = 'First child'; 
// li[2].textContent = 'Last child'; 
  
// // Grab from class:
// const card = document.querySelector('ul').getElementsByTagName('li');
// // console.log(card);

// // Transform the HTMLCollection into an array:
// const cardArray = Array.from(card);
// // console.log(cardArray);
// cardArray.forEach((li, index) => {
//   // console.log(li);
//   li.textContent = `Child number ${index}`;
// });

// Nodelist: (querySelectorAll return a nodelist)
const nodeList = document.querySelectorAll('ul li');
console.log(nodeList)

// ul.forEach((li,index) => {
//   li.style.color = 'blue';
//   console.log(li);
// })

const li = document.createElement('li');
// let text = 'Item #4';
// li.textContent = text;
li.appendChild(document.createTextNode('Item #4'));
console.log(li);

const ul = document.querySelector('ul');
console.log(ul)
ul.appendChild(li)

ul.removeChild(nodeList[2]);




