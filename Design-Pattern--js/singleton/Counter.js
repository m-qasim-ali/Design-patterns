let count = 0;

class Counter {
  getInstance() {
    return this;
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

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance());