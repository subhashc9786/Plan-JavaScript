// Create an array of given size in JavaScript

// let arr = new Array(5);
// console.log(arr.length);
// console.log(arr);


// crate array using apply and map


// let arr = Array.apply(null,Array(5)).map(function(){});

// console.log(arr.length);
// console.log(arr);


// Javscript Array.from() method

// let arr = Array.from(Array(5));
// console.log(arr.length);
// console.log(arr);



// Create Array using pass argument in form

// let arr = Array.from('tum yeh kar skte ho');
// console.log(arr);


// 19 

// function getAge(...args){
// console.log(typeof args);
// }

// getAge(21,"sonu",56);


// 20

// function getAge(){
//     // 'use strict';
//     age = 21;
//     console.log(age);
// }

// getAge();


// 21

// const sum = eval(10*10+5);
// console.log(sum);

// console.log(eval(40-4));

// 22
// document.sessionStorage.setItem('cool-secrect',123);


// 23

// var num = 8;
// var num  =10;
// console.log(num);


// 24


// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'),
// obj.hasOwnProperty(1),
// set.has('1'),
// set.has(1));

// 25

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);


// 26
// for (let i = 1; i < 5; i++) {

//    if (i===3)continue
    
//    console.log(i);
// }


// 27

// String.prototype.giveLydiaPizza = ()=>{
//     return 'Just give Lydia pizza already!';
// }

// const name = 'Lydia';
// console.log(name.giveLydiaPizza());


// 29
// const a= {};
// const b = {key:'b'};
// const c = {key:'c'};
// // console.log(a[b]);
// a[b]= 123;
// a[c]=456;
// // console.log(a[b]);
// console.log(a[b]);
// console.log(a);


// 30

// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();


// 33
// let abc = 'so456nu';

// String.prototype.sumLength = function() {
//     console.log(this);
//    return this.length;
// }

// console.log(abc.sumLength()); // Corrected to call the method on the instance


// let arr = ['sonu','monu','soda'];

// let abc = [[1,2],3,4];
// const newval = abc.reduce((ab,bc)=>
//    { console.log("ab",ab);
//     ab+bc},5);

// console.log(newval);


// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));



//   46
// 51
// 61
// 64
// 66
// 68
// 71
// 109
// 115
// 116

// let arr = [,3,4,,4];
// console.log(arr.toString());

