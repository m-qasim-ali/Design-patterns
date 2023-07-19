// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application, which makes Singletons
//  great for managing global state in an application.


// let count = 0;

// class Counter {
//   getInstance() {
//     return this;
//   }

//   getCount() {
//     return count;
//   }

//   increment() {
//     return ++count;
//   }

//   decrement() {
//     return --count();
//   }

// }

// const counter1 = new Counter();
// const counter2 = new Counter();

// console.log(counter1.getInstance() === counter2.getInstance());









let count = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can create only one instance!...")
    }
    instance = this;
  }

  getCount() {
    return count;
  }

  increment() {
    return ++count;
  }

  decrement() {
    return --count();
  }
}


// const counter1 = new Counter();
// counter1.name = "counter1"; // As properties can be added on the counter1 which violate the properties of the singleton pattern
// const counter2 = new Counter();

// we have to freeze the object so no one can add or modify the properties of the object
const counter1 = Object.freeze(new Counter);
counter1.name = 'Ali'
console.log(counter1.name);