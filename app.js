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
