// d
// e

// const age = 60;
// let random = "random-value";
// const person = {
//   name: "john",
//   age: 25,
//   married: true,
//   siblings: ["anna", "bobo"],
//   greet: function (name) {
//     console.log(`hello i'm ${name}`);
//   },
//   sayhello(name) {
//     console.log(`hello i'm ${name}`);
//   },
//   job: {
//     title: "developer",
//     conpany: {
//       name: "gill",
//       lastname: {
//         kam: age,
//       },
//     },
//   },
//   "random-value": "random",
// };
// console.log(person);
// console.log(person.job.conpany.name);
// console.log(person.job.conpany.lastname.kam);
// console.log(person["random-value"]);
// console.log(person[random]);

// this
// points to the left of dot

// const john = {
//   firstname: "john",
//   lastname: "boboe",
//   fullname: function () {
//     console.log(
//       `my full name is ${this.firstname} ${this.lastname} `
//     );
//     console.log(this);
//   },
// };
// const boboboy = {
//   firstname: "boboboy5",
//   lastname: "bobo6",
//   fullname: function () {
//       console.log(this);
//     console.log(`my full name is ${this.firstname} ${this.lastname}  `);
//   },
// };

// john.fullname();
// boboboy.fullname();

// second "this"

// console.log(this);

// const john = {
//   name: "john",
//   lastname: "boboe",
//   fullname: function () {
//     console.log(`my full name is ${this.firstname} ${this.lastname}  `);
//   },
// };
// const bobo = {
//   name: "bobo",
//   lastname: "ram",
//   fullname: function () {
//     console.log(`my full name is ${this.firstname} ${this.lastname}  `);
//   },
// };

// const johnr = new Person("johnr", "deoe");
// johnr.fullname();
// const johnrxx = new Person("johnxx", "deoexx");
// johnrxx.fullname();

// function createperson(firstname, lastname) {
//   return {
//     firstname: firstname,
//     lastname: lastname,
//     fullname: function () {
//       console.log(`my full name is ${this.firstname} ${this.lastname}  `);
//     },
//   };
// }

// const john = createperson("john", "ram");
// john.fullname();
// const johnb = createperson("johedn", "wderam");
// johnb.fullname();

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.fullname = function () {
//     console.log(
//       `my full name is ${this.firstname} ${this.lastname} i love react  `
//     );
//   };
// }

// const john= new Person('john','bobo')
// // console.log(john.constructor);

// const bob = {};
// console.log(bob.constructor);

// const list = [];
// console.log(list.constructor);
// const sayhi = function () {};
// console.log(sayhi.constructor);

// const susu = new john.constructor("susu", "bo");
// susu.fullname();

// function account(name, initialbalance) {
//   this.name = name;
//   this.balance = initialbalance;
// //   this.bank='bank of amrica'
// }

// const john = new account("john", 200);
// const bob = new account("bob", 2500);

// account.prototype.bank = "chase";
// account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`hello ${this.name}, your balance is $${this.balance}`);
// };

// // console.log(john.bank);
// console.log(bob);
// console.log({});
// console.log([]);

// class account {
//   constructor(name, initialbalance) {
//     this.name = name;
//     this.balance = initialbalance;
//   }
//   bank='rraammaann'
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`hello ${this.name}, your balance is $${this.balance}`);
//   }
// }

// const john = new account("john", 50);
// console.log(john);
// console.log(john.name);
// john.deposit(500);
// console.log(john.bank);

// const john = {
//   name: "john",
//   age: 1350,
// };
// const susan = {
//   name: "susan",
//   age: 550,
// };

// function greet(city ,country) {
//   console.log(this);
//   console.log(` hello, i'm ${this.name} and i'm ${this.age} years old and i live in ${city},${country}`);
// }

// // // greet.call(john,'sanfran','us');
// // // greet.call(susan, "sanfran", "us");
// // // greet.call({ name: "peter", age: 55 }, "sanfran", "us");

// // greet.apply(john,['san-fran','u-s']);
// // greet.apply(susan);
// // greet.apply({ name: "peter", age: 55 });

// // asign,call it laetr
// const susangreet=greet.bind(susan,'cali','colu')
// susangreet()

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".incriment");
// btn.addEventListener('click',counter.increment)

// maybe
// btn.addEventListener('click',counter.increment.bind(counter))

// for sure
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
