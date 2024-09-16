
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

// let length = 5;
// let pass = ""
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// if (true) str += "0123456789"
// if (true) str += "!@#$%^&*-_+=[]{}~`"

// for (let i = 1; i <= length; i++) {
//   let char = Math.floor(Math.random() * str.length + 1)
//   pass += str.charAt(char)
//   console.log(char);
// }
// console.log(pass);

// var name3 = 'Codecrumbs';
// const news = name3.split(',');
// console.log(news);


// let bikes = ["yamaha","Bajaj","Honda","TVS"];

// console.log(bikes.toString());

// console.log(bikes.join("_"));

// console.log(bikes.pop());

// console.log(bikes.push("Ducatti","Royal Enfield"));

// console.log(bikes);

// console.log(bikes.shift());

// console.log(bikes.unshift("BMW","Kawasaki"));

// delete bikes[1];
// console.log(bikes);
// console.log(bikes.length);

// let bikes = ["yamaha","Bajaj","Honda","TVS"];


// bikes.splice(2,0,'a','b','c');
// console.log(bikes);


// let num = 10;
// let str = "hello";
// let bool  = true;
// let obj = {};

// let func = function(){};

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof obj);
// console.log(typeof func);

// console.log(obj === Object(num));


// console.log(isNaN(undefined));
// console.log(Number(undefined));
// function counterFactory(){
// console.log(typeof undefined);
//     let count = 0;
//     return function(){
//         return ++count;
//     };
// }

// const counter = counterFactory();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createCounter(){
//     const state = {
//         count:0,
//     };
//     return{
//         increment:()=> ++state.count,
//         decrement:()=> --state.count,
//         getCount:()=>state.count,
//     }
// }

// const counter = createCounter();
// console.log(counter.getCount());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.getCount());

// function createCounter(){
//     let count = 0;
// while(true){
//      count ++;
// }
// return count;
// }

// const counter = createCounter();

// console.log(counter);

// function Animal(name){
//  this.name = name;
// }

// Animal.prototype.sound= function(){
//     return 'Sound';
// }

// // console.log(Animal.prototype);
// function Dog(name){
//     Animal.call(this,name);
// }
// // console.log(Dog());

// Dog.prototype = Object.create(Animal.prototype);

// console.log(Dog.prototype);

// class Singleton {
//     constructor(){
//         if(Singleton.instance){
//             return Singleton.instance;
//         }
//         Singleton.instance = this;
//     }
//     someMethod(){
//         console.log('Doing something....');
//     }
// }

// const instance1 = new Singleton();
// const instance2 = new Singleton();

// console.log(instance1);


// let str = ""

// for(let i = 0;i<5000;i++){
//     str +='Hello';
//     str += "+ ";
// }
// console.log(str);

// const arr = [2,8,15,4];
// console.log(Math.max(...arr));

// const power = Math.pow(2,3);
// console.log(power);

// const arr = [10,5,20,10,6,5,8,5,20];

// const uniqureArr = [...new Set(arr)];

// console.log(uniqureArr);

// const arr = [12,null,0,'xyz',-25,NaN,undefined,false];

// const filterArray = arr.filter(a=>a == Number);
// console.log(filterArray);

// (()=>{

//     let a = b = 10;
//     console.log(a,b);
// })();

// console.log('b',b);
// var a = b = 20;
// console.log(a,b);

// const arr = ['apple','banana','cadberry','date'];

// const [a,b,...g] = arr;
// console.log(g);

// const product = 'Laptop';
// const price = 40000;

// const obj= {product:product,price:price};
// console.log(obj);

// const obj1 = {product,price};
// console.log(obj1);

// if(value ===1 || value ==="one"|| value ===2|| ){

// }

// var x = 10;

// x = 0;

// setTimeout(()=>{
//     console.log(x);
// });
// console.log('Hello');
// x = x+2;

// setTimeout(function timeout() {
//     console.log('Timed out!');
//   }, 0);
// Promise.resolve(1).then(function resolve() {
//     console.log('Resolved!');
//   });

// console.trace();

// console.time('tx');
// console.log('dsfsdf');
// console.timeLog('tx');
// console.time('mytime');
// function funEx(){

// }

// function newFun(){
//     funEx()
// }
// newFun();
// console.timeEnd('mytime');



// console.log(NaN == NaN);
// console.log(NaN == NaN);
// console.log(NaN === NaN);


// console.log(1<2<3);
// console.log(3>2>1);




// const Obj = {};

// const set1 = new Set();
// const set2 = new Set();

// set1.add(Obj);
// set1.add(Obj);

// set2.add({});
// set2.add({});

// console.log(set1);
// console.log(set2);




// const arr = [1,2,3];

// arr[4] = 5;

// console.log(arr.length);
// script.js

// const toggleButton = document.querySelector('.toggle-button');
// const navbarLinks = document.querySelector('.navbar-links');

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// });


// const watch = document.getElementById('watch');
// console.log(watch);
// function sum(){
//     watch.innerHTML = new Date().toLocaleTimeString()

//     requestAnimationFrame(sum);
// }


// requestAnimationFrame(sum);
// 4400 0601 0576 7919
// 0127




// console.log(0 == false);
// console.log(0 ===false);
// (()=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//     },1000)
//     setTimeout(()=>{
//         console.log(3);
//     },0)
//     console.log(4);
// })();


// let a = [1,2,3,4,5];
// let b = [1,2,3,6,7];

// const c = a.concat(b).sort();
// // console.log(c);
// const d =[...new Set(c)];
// console.log(d);

// console.log('Start');

// function longRunningOperation() {
//   // Simulate a long-running operation
//   const start = Date.now();
//   while (Date.now() - start < 3000) {
//     // Blocking loop for 3 seconds
//   }
//   console.log('Long running operation finished');
// }

// longRunningOperation();
// console.log('End');


// console.log('Start');


// async function newName(){
//     console.log('Start 1');
//     const a = await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log("a",a);
// console.log('b');
// }

// newName();

// console.log('End');


// console.log('Start');

// function asyncOperation() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Asynchronous operation finished');
//       resolve();
//     }, 3000);

//     console.log('Start 1');
//   });
// }

// asyncOperation().then(() => {
//   console.log('Promise resolved');
// }).catch((err)=>console.log(err));

// console.log('End');


// Print A to Z characters

// const arr = [...new Array(26)];
// console.log(arr);
// const newarr = []
// let start = 65;
// arr.forEach((a,i) => {
//     newarr.push(String.fromCharCode(start++))
// });

// console.log(newarr);

// const rr = [2,3,4,5,5,,4,6,0][3,4,2];
// console.log(rr);
// const arr = [3,4,5,6,5,8]
// const newvalu = arr.reduce((a,c)=>a+c,0);
// console.log(newvalu);

// const newarr  = arr.splice(2,1,"8","9");
// console.log(arr);

// console.log(newarr);

// const arr1 = [175,50,25]
// const newvalues = arr1.reduceRight((total,num)=>total-num)
// console.log(newvalues);


//  x = 0;

// (()=>{
// console.log(x);

//     setTimeout(() => {
//         console.log(x);
//     }, 1000);

//     console.log(x);
// })()

// x = x+1;


// console.log(null === undefined);
// console.log(typeof undefined);
// console.log(typeof null );

// console.log(NaN == NaN);
// console.log(NaN === NaN);



// console.log([]==[]);

// const arr = []

// if(arr.length){
// console.log('dfd');
// }


// let str = 'Gandhi';


// function reverseString(str){
// return str.split('').reverse().join('');

// }

// console.log(reverseString(str));


// console.log(A-Z);

// const newarr = [...new Array(26)];
// let start = 65;
// newarr.forEach((e,i)=>{
//     console.log(String.fromCharCode(start++));
// })


// const myPromise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //   resolve("foo");
//     // }, 3000);
//     // resolve('this is errpe');
//   });
//   myPromise.then((e)=>console.log(e)).catch(e=>console.log('error',e));
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);


// console.log(myPromise);

// const obj = {};

// obj.extend('new','sdf')

// console.log(obj);

// function myCrsh(){
//     return      
// }


// const newPerson = {
//     adharCard :'12345678',
//     name:'sonu',
//     age:'45'
// }
// Object.defineProperty(newPerson, "adharCard", { configurable: false, writable: false });

// newPerson.adharCard = '87654321';

// newPerson.age = '78';
// console.log(newPerson);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const newrr = arr.map((e,index)=>index % 2 !==0? e*2:e);

// console.log(newrr);

// console.log(6%2);


// var a = [1,2,3];
// var b = [1,2,3];
// var c = "1,2,3";
// // console.log();
// console.log(a === c);  
// console.log(b === c);
// console.log(a === b)

// console.log(typeof c);



// console.log("first"); 
// abc();
// console.log("third");

// function abc(){
// setTimeout(function() {
//     console.log("second"); 
// },0);
// }


// var a = [1, 10,3, 5, 7]

// let b = [2, 4, 6, 8,...a]

// console.log(b.sort((a,b)=>a-b));
// for (let i = 0; i < b.length; i++) { a.push(b[i]) }
// console.log(a.sort())




// gretting = 'dsts';
// console.log(gretting);

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);





// class Foo {
//     constructor(name) {
//       this.name = name;
//     }
  
//     getNameSeparator() {
//       return '-';
//     }
//   }
  
//   class FooBar extends Foo {
//     constructor(name, index) {
//       super(name);
//       this.index = index;
//     }
  
//     getFullName() {
//       return this.name + super.getNameSeparator() + this.index;
//     }
//   }
  
//   const firstFooBar = new FooBar('foo', 1);
  
//   console.log(firstFooBar.name);
//   // Expected output: "foo"
  
//   console.log(firstFooBar.getFullName());
//   // Expected output: "foo-1"




// const source = {b:4,c:5};
// var target = {a:1,b:2};

// let newObj = Object.assign(target,source);

// var target = {x:3,Z:3};
// newObj = Object.assign(target,source)
// console.log(newObj);

// console.log(parseInt('Helllo'))

// console.log(Math.sqrt(-1));

// const url = new URL(window.location.href);
// console.log(url);


// const paramValue = url.searchParams.get("paramName");

// console.log(paramValue);

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getInfo(){
//         return(
//             `The name of the animal is ${this.name} and age is ${this.age}`
//         )
//     }
// }

// class Dog extends Animal{
//     constructor(name,age,breed){
//         super(name,age)
//         this.breed = breed
//     }
//     bark(){
//         return 'woof'
//     }
// }

// class Cat extends Animal{
//     constructor(name,age,weight){
//         super(name,age)
//         this.weight = weight
//     }
// }

// const mydog = new Dog('Rex',2,'German Sherpard')
// console.log(mydog.getInfo());
// console.log(mydog.breed);
// console.log(mydog.bark());

// const myCat = new Cat('Whiskers',5,'5kg');
// console.log(myCat.getInfo());
// console.log(myCat.weight);


// class Cat extends Animal{
//     #weight;
//     constructor(name,age,weight){
//         super(name,age)
//         this.#weight = weight
//     }

//     getWeight(){
//         return this.#weight
//     }
//     setWeight(weight){
//         this.#weight = weight
//     }
// }

// const myCat = new Cat('Whiskers',5,'5kg')
// console.log(myCat.getWeight());
// myCat.setWeight('6kg')
// console.log(myCat.getWeight());


// const sym1 = Symbol();
// const sym2 = Symbol("2");
// const sym3 = Symbol('2');
// console.log(sym2===sym3);

// let num = 10;

// let obj = {};
// console.log(num ===Object(num)); false
// console.log(obj === Object(obj)); true


// sayHello();
// function sayHello(){
//     console.log("HELLO<WOrld!");
    
// }




// function performTask(){
//     result = 100;
//     console.log(result);
//     var result;
    
// }
// performTask()

const obj = {}
console.log(obj.length);


