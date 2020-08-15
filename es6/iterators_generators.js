// Name iterator:
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ?
        { value: names[nextIndex++], done: false } : { done: true }
    }
  }
}

const namesArr = ['John', 'Jill', 'Jack'];
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
