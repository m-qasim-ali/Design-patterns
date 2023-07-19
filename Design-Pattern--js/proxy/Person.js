let Person = {
  name: "Qasim",
  age: 23,
  nationality: "pakistani",
}

const proxyPerson = new Proxy(Person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`${prop} does not exist on person object`);
      return;
    }
    return obj[prop];
  },
  set: (obj, prop, value) => {
    if (prop == 'age' && typeof value !== "number") {
      console.log(`${prop} must be number!...`);
      return;
    }
    obj[prop] = value;
    return true;
  }
})

proxyPerson.age = 23;
console.log(proxyPerson.age);