// // Name iterator:
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } : { done: true }
//     }
//   }
// }

// const namesArr = ['John', 'Jill', 'Jack'];
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// // Generators:
// function* sayName() {
//   yield 'John';
//   yield 'Jill';
//   yield 'Jack';
// }

// const names = sayName()
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

function* indexGenerator() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = indexGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());