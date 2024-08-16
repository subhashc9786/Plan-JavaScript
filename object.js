

// WAY TO CREATE OBJECT IN JAVASCRIPT

// 1
// Object literls

// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
// };

// 2
// CONSTRUCTOR FUNCTION

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const person = new Person('John', 30, 'male');
// console.log(person);



// 3

//Object.create():

// const personPrototype = {
//     greeting: function() {
//         return `Hello, my name is ${this.name}.`;
//     }
// };

// const person = Object.create(personPrototype);
// person.name = 'John';
// person.age = 30;
// person.gender = 'male';
// console.log(person.greeting());


// 4

// USING ES6 CLASSES

// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}.`;
//     }
// }

// const person = new Person('John', 30, 'male');

// console.log(person.greeting());

// 5

//Using Object.assign():

// const source = {
//     name:'John',
//     age:30
// }


// Expected output: true

// const target = {};

// Object.assign( target,source);
// console.log(target);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);


// 6
// new Object method

// const person = new Object();
// person.name = 'John';
// person.age = 30;
// person.isEmployed = true;

// console.log(person);      




// console.log(Math.PI );
// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI',{ value: 8675309,writable:true});
// descriptor.writable = true;
// descriptor.value='5';
// console.log(descriptor.value,descriptor.writable);
// descriptor.value ='64';
// Math.PI = 5;
// console.log(Math.PI,descriptor.value);
// const oje = {
//     firstName:'sonu'
// }
// for (const iterator of object) {
    
// }

// const person = {
//     fullName:function (location,rollNo){
//         return `${this.firstName} ${this.lastName}
//         from ${location},RollNo ${rollNo}`;
//     }
// };

// const person1 ={
//     firstName:"Arjun",
//     lastName:"Mavnoor"
// }

// const person2 = {
//     firstName:"CodeBustler",
//     lastName:"XYZ"
// }

// console.log(person.fullName.call(person1,"banglore",32));




//Freeze  Specfic Property of Object


// const person = {
//     name: 'Alice',
//     age: 30
// };

// // Freeze the 'age' property
// Object.defineProperty(person, 'age', {
//     writable: false,
//     configurable: false
// });

// //
// person.age = 35;
// console.log(person.age); // Output: 30


// delete person.age;
// console.log(person.age);


// person.name = 'Bob';
// console.log(person.name);


let newobj = {fullname:'subhash',lastname:{lastname:"sonu"}};

const deepcopy = JSON.parse(JSON.stringify(newobj))
console.log(deepcopy);

newobj.fullname = 'gsdfsfd';
console.log(newobj);

