//создает оболочку для различных интерфейсов чтобы использовать разные алгоритмы и интерфейсы для конкретной задачи
//определяет семейство некоторых алгоритмов которые наследуют обьекты в неизменяемом порядке

//Vehicle - транспортное средство
class Vehicle {
  trevelTime() {
    return this.timeTaken;
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

//Commute -  время на дорогу
class Commute {
  travel(transport) {
    return transport.trevelTime();
  }
}

const commute = new Commute();

console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
