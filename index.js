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


// console.log(isNaN('hello'));

// function counterFactory(){

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

