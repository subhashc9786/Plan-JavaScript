// function pairsum(array, target) {
//     const pairs = [];
//     const hashmap = {}

//     for (let i = 0; i < array.length; i++) {
//         const comp = target - array[i];
//         if (hashmap[comp] !== undefined) {
//             pairs.push(comp, array[i])
//         }
//         hashmap[array[i]]= i;
//         console.log(hashmap);
//     }
//     return pairs

// }

// const array = [1, 4, 2, 3, 6, 5, 7];
// const target = 6;

// console.log(pairsum(array, target));

// Write Polyfill for map;

// const arr = [1,2,3,4,5,6];

// Array.prototype.myMap = function(cb){
//     const result = [];

//     this.forEach(function(e,i){
//         const newElemen = cb(e,i);
//         result.push(newElemen);
//     })
//     return result;
// }

// const newArray = arr.myMap(function(e,i){
//     return e*i;
// })

// console.log(newArray);

// const arr = [1,2,[3,4,5],[6,7,8,9],10]

// function flatten (arr) {
//       var newArr = [];
//       for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           newArr = newArr.concat(flatten(arr[i]));
//         } else {
//           newArr.push(arr[i]);
//         }
//       }
//       return newArr;
//     }

//     console.log("Flattened Array: ", flatten(arr))

// const a = [a,b,c,d,e,f];
// const b = [1,2,3,4,5,6];

// output = a1bc23def456

// function mergeArrays(arr1, arr2) {
//     let result = '';
//     let maxLength = Math.max(arr1.length / 2, arr2.length / 2);
//     // console.log(maxLength);
//     let x = 0;
//     let y = 1;
//     for (let i = 0; i < maxLength; i++) {
//             if (arr1[i] !== undefined) {
//                 result += arr1.slice(x,y);
//             }
//             if (arr2[i] !== undefined) {
//                 result += arr2.slice(x,y);
//             }
//             x+=1;
//             y+=2;
//     }
//     return result;
// }

// const a = ['a', 'b', 'c', 'd', 'e', 'f'];
// const b = [1, 2, 3, 4, 5, 6];
// const output = mergeArrays(a, b);
// console.log( output); // Output: a1bc23def456

// function runLoopForDuration(duration) {
//     let startTime = Date.now();
//     let count = 0;

//     function loop() {
//         // Check the elapsed time
//         if (Date.now() - startTime < duration) {
//             // Run a portion of the loop
//             for (let i = 0; i < 100; i++) {
//                 // Your loop code goes here
//                 console.log(`Iteration ${count++}`);
//             }
//             // Schedule the next chunk
//             setTimeout(loop, 0);
//         } else {
//             console.log('Loop completed');
//         }
//     }

//     // Start the loop
//     loop();
// }

// // Run the loop for 2 seconds (2000 milliseconds)
// runLoopForDuration(2000);

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
//   }

//   console.log(isPalindrome('tut'))

// function reverseString(str){
// return str.split('').reverse().join('');
// }

// console.log(reverseString('funny'));

// function filterEvenNumbers(numbers){
//     return numbers.filter(num=> num%2 ===0);

// }

// console.log(filterEvenNumbers([1,2,3,4]));

// Calculate the factorial a given Number;

// function factorial(number){

//     if(number===0 || number ===1){
//         return 1;
//     } else{
//         return number*factorial(number-1);
//     }
// }

// console.log(factorial(3));

// function isPrime(num) {

//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;

//   }

//   console.log(isPrime(9,2,3,4,));

// Custom Flat array function

// function flatten(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             newArr = newArr.concat(flatten(arr[i]))

//         } else {
//           newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// var arr = [1,[2,3,4,[5,6,7,[8,9,10],11,12],13,15],16];
// var arnew = flatten(arr)
// console.log(arnew);

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   console.log(randomInteger(1,5));
//   console.log(randomInteger(1,5));
//   console.log(randomInteger(1,5));
//   console.log(randomInteger(1,5));
//   console.log(randomInteger(1,5));
//   console.log(randomInteger(1,5));

// find the logest substring in any string

// const str = 'javascript is using for frontend as well backenddevelopment';

// function MaxStrLen(str){
// let newArr = str.split(" ");
// const ans = newArr.sort((a,b)=>b.length-a.length);

// // return ans[0]
// return newArr.reduce((acc,cur)=>acc.length >cur.length?acc:cur,"");
// }

// console.log(MaxStrLen(str));

// generate String according to output

// input : my name is subhash
// output:#MyNameIsSubhash

// const generateHash =(str)=>{
// if(str.length>280 || str.trim().length ===0){
//     return false;
// }

// str = str.split(" ");
// str = str.map((curElem)=>
//     // curElem.replace(curElem[0],curElem[0].toUpperCase())
// curElem.charAt(0).toUpperCase() + curElem.slice(1));

// str = `#${str.join("")}`;

// return str;
// }

// console.log(generateHash("my name is subhash"));

// find total given charactor total repeatation

// const countChar = (word,char)=>{
//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     totalCount = word.split("").reduce((accum,curChar)=>{
//         if(curChar === char){
//             accum++;
//         }
//         return accum;
//     },0)
//     return totalCount;
// }

// console.log(countChar('MissIssippi',"I"));

// Write a functions checkTriangleType that takes threee parameters

// function countSubstring(str){
// const newarr = str.split(" ");
// let obj = {};

//  newarr.map((word)=>{
//     if (obj[word]) {
//         obj[word]++;
//       } else {
//         obj[word] = 1;
//       }
// })
// return obj;
// }
// const str  = 'this is a dog this is a hen';
// console.log(countSubstring(str));

// Pascak's trangle

// for(let i = 1; i<=5;i++){
//     let line = "";
//     for(let l = 5;l>=i;l--){
//         line += "";

//     }
//     let k = 1;
//     for(let j = 1;j<=i;j++){
//         line += " "+k;
//         k = (k*(i-j))/j;
//     }
//     console.log(line);

// }

// let n1 = 0;
// let n2 = 1;
// var nextTerm;

// for(let i = 1; i<=10;i++){
//     console.log(n1);
//     nextTerm = n1+n1;
//     n1 = n2;
//     n2 = nextTerm;

// }

// function indianHacker(a,b,...arr){
// console.log(typeof this);

//     console.log(a,b,...arr);

// }

// const arr  = ["sum","plus","duplex","simplex"]

// indianHacker("sum","b","c","d","f");

// var navigatpor;
// console.log(Element.style);

// function shuffleArray(array){
//     return array.sort(()=> Math.random()-0.5)
// }

// console.log(shuffleArray([1,2,3,4,5]));

// console.log(3%2);

// 👉👉// call() ,appy(),bind() in javascript

// function sayHello(greeting){
//     console.log(greeting+' '+this.name);

// }
// const person = {name:'Jhon'};
// sayHello.call(person,"Hello");
// sayHello.apply(person,['Hello Shubhash'])

// const sayHelloToJohn = sayHello.bind(person);
// sayHelloToJohn('Hello');

// 👉👉Prototypes in JavaScript?

// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function(){
//     console.log("Hello,my name is"+ this.name);

// }
// const person1  = new Person("Alice");
// const person2 = new Person("Bob");
// person1.greet();
// person2.greet();

// var add = function(a,b){
//     // console.log(a+b);
//     return a+b;
// }

// console.log(add(1,4));
console.log("first");

setTimeout(() => {
  console.log(`This will be executed after 1000 milliseconds`);
}, 1000);

console.log("DD");

setImmediate(() => {
  console.log(`This is Immediate`);
});

console.log("final");
