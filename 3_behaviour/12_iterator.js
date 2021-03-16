//создаем класс у которого сможем поледовательно получать доступ до определенной информации
//https://learn.javascript.ru/iterable

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }
  //es6 Symbol - итератор
  [Symbol.iterator]() {
    return {
      //некст пишем через стрелку чтобы контекст оставался класс итератор
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return { done: true, value: void 0 };
        }
      },
    };
  }
}

const iterator = new MyIterator(["This", "is", "iterator"]);
for (const val of iterator) {
  console.log("Value: ", val);
}

//функция генератор https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Statements/function*
function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

const gen = generator(["This", "is", "iterator"]);
// for (const val of gen) {
//     console.log("Value: ", val);
//   }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); //undefined
