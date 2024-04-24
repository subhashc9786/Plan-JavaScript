

// WAY TO CREATE OBJECT IN JAVASCRIPT

// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
// };


// CONSTRUCTOR FUNCTION

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const person = new Person('John', 30, 'male');




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


//Using Object.assign():

// const source = {
//     name:'John',
//     age:30
// }

// const target = {};

// Object.assign(target,source);
// console.log(target);




// function Person(name, age, gender) {
//     console.log(name);
//     this.name = '';
//     this.age = age;
//     this.gender = gender;
// }

// const person = new Person('John', 30, 'male');
// console.log(person);
// sum = 10;
// var sum = 20;
// var sum = 30;
// console.log(sum);

// class React {
//     constructor.
// }



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