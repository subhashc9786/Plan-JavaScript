// let arr = ['shift','splice','filter','opo'];

// for(let i =0;i<arr.length;i++){
//     if(arr[i]==='splice'){
//         let splied = arr.splice(i,1);
//         console.log('remove ele',splied);
//         console.log('remaing ele',arr);

//     }
// }

// remove duplicates Using JavaScript indexOf() Method

// let arr = ['apple','mango','apple','orange','mango','mango'];

// function removeDuplicates(arr){
//     let uniques = [];

//     for(let i = 0;i<arr.length;i++){
//         if(uniques.indexOf(arr[i])==-1){
//             uniques.push(arr[i]);
//             // console.log(uniques);
//         }
//     }
//     return uniques;
// }

// console.log(removeDuplicates(arr));

// let arr = Array.from()

// const uniqueValues = array =>{
//     let map = new Map();
//     array.forEach(value=>map.set(value,value));
//     return [...map.values()];
// }

// const array = [1,2,2,3,4,4,5];

// const uniqueArray = uniqueValues(array);

// console.log(uniqueArray);

// How to replace an item from an array in JavaScript ?

// const  arr = ['a','b','c'];
// const index = arr.indexOf('a');

// if(index !== -1){
//     arr[index]='z';
// }
// console.log(arr);

// using findIndex() method

// let arr = [{id:1,name:"john"},{id:2,name:'Jane'},{id:3,name:'Doe'}];

// let index = arr.findIndex(item=>item.id===2);
// // console.log(index);

// if(index !== -1){
//     arr[index]={id:2,name:'Janet'};
// }
// console.log(arr);

// function replaceItem(array,oldItem,newItem){
//     return array.reduce((acc,curr)=>{
//         if(curr===oldItem){
//             acc.push(newItem);
//         } else{
//             acc.push(curr);
//         }
//         return acc;
//     },[])
// }

// const originalArray = ['a','b','c','d'];
// const oldItem = 'c';
// const newItem = 'z';

// const newArray = replaceItem(originalArray,oldItem,newItem);

// console.log('org array',originalArray);

// console.log('new array',newArray);

// ########## JavaScript Program to Find Duplicate Elements in an Array

// using nested for in loop

// let check_duplicate_in_array = (input_array) => {
//   let duplicate_elements = [];

//   for (num in input_array) {
//     for (num2 in input_array) {
//       if (num === num2) {
//         continue;
//       } else {
//         if (input_array[num] === input_array[num2]) {
//           duplicate_elements.push(input_array[num]);
//         //   console.log(input_array[num]);
//         }
//       }
//     }
//   }
//   return [...new Set(duplicate_elements)]
// };

// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];

// console.log(check_duplicate_in_array(arr));

// USING SORT () METHOD

// let check_duplicate_in_array = (input_array)=>{
//     input_array = input_array.sort((a,b)=>a-b);

//     let duplicate_elements = []
//     for(index in input_array){
//       if(input_array[index] === input_array[index-1]){
//         duplicate_elements.push(input_array[index]);
//       }
//     }
//     // console.log(duplicate_elements);
//     return [...new Set(duplicate_elements)]
// }

// let arr = [1,1,2,2,3,3,4,5,6,1];
// console.log(check_duplicate_in_array(arr));

// USING FILTER METHOD

// const check_duplicate_in_array=(input_array)=>{
//     const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
//     return Array.from(new Set(duplicates));
// }
// const arr=[1,1,2,2,3,3,4,5,6,1];
// console.log(check_duplicate_in_array(arr));

// USING A SINLGE LOOP

// let check_duplicate_in_array = (input_array) => {
//   let duplicate_elements = [];
//   for (element of input_array) {
//     // console.log(input_array.lastIndexOf(element));
//     if(input_array.indexOf(element) !==input_array.lastIndexOf(element)){
//         duplicate_elements.push(element);
//     }
//   }
// //   console.log(duplicate_elements);
//   return [...new Set(duplicate_elements)];
// };

// let arr = [1,1,2,2,3,3,4,5,6,1];
// console.log(check_duplicate_in_array(arr));






// const arr = {firstName:'subhash',address:'vpo behbalpur hisar hayana125001',contact_no:"91328231584"};


// for(let index in arr){
//     console.log(arr[index]);
    
// }




// const list = ["January","March","April","June"];
// console.log(list.splice(1,0,'February'));
// console.log(list);
// console.log(list.slice(-1,2));



// let arr = [1,1,2,2,3,3,4,5,6,1];
// let unique = new Set([1,2]);
// for(let i = 0;i<arr.length;i++){
//     console.log(unique.has(arr[i]));
    
// }




// let arr = ["GFG_1","GreeksForGreeks","Geeks","Computer Science Portal"];

// function GFG_Fun(){
//     console.log(arr[Math.floor(Math.random()*arr.length)]);
    
// }

// GFG_Fun()



// let arr = [...new Array(5)];

// console.log(arr.length);
// console.log(arr);


// let arr = Array.apply(null,Array(5)).map(function(){});

// console.log(arr.length);
// console.log(arr);



// let greeks =["Geeks1","Geeks2","Geeks3","Geek4"];

// greeks.push("Geeks5","Geeks6");

// greeks.unshift("Geeks5","Geeks6");

// greeks.splice(2,1,'Geeks5','Geeks6');

// let greeks1 = ["Geeks5","Geeks6"];
// greeks = greeks.concat(greeks1);

// greeks = [...greeks,...greeks1]

// greeks[greeks.length]="Geeks5";

// console.log(greeks);



// const language = new Array("HTML","Css","JAVASCRIPT");
// console.log(language.length);
// console.log(language[0]);
// console.log(language[1]);
// console.log(language[2]);


// JavaScript Array Reference


// let myArr = Array.from("GreeksForGreeks");

// console.log(myArr);

// let newarr= Array.from("This is not my responablity");

// console.log(newarr);



// let specialValueArray = Array.of(undefined,null,NaN,Infinity);
// console.log(specialValueArra);
// let arr = Array.of(7);
// console.log(arr);



// const arr = [45,32,69,21];
// const index = 3;
// console.log(arr.at(index));

// let array = [1,2,3,4,5,6,7];

// console.log("Array",array.copyWithin(0,3,5));



//let languages  = ["HTML","CSS","JavaScript","ReactJS"];
// let g  = languages.entries();
// console.log(g);



// function ispostive(element,index,array){
//     return element>0;
// }

// function func(){
//     let arr = [11,89,23,7,98];

//     let value = arr.every(ispostive);
//     console.log(value);
    
// }

// func();



// let array = [1,2,3,4];
// console.log(array.fill(6));


// let array = [10,20,30,40,50];
// let found = array.find(function (element){
//     return element>20;
// })
// console.log(found);


// function isOdd(element,index,array){
//    return (element %2 ==1);
// }
// console.log(([4,6,8,3,12].findIndex(isOdd)));




// function canVote(age){
//     return age >=18;
// }
// function func(){
//     let filtered = [24,33,16,40].filter(canVote);
//     console.log(filtered);  
// }
// func();


// let arr = [1,2,3,,4];
// let newArr = arr.flat();
// console.log(newArr);


// const sentences =["Hello World","How are you?","JavaScript is fun"];
// const words = sentences.flatMap(sentences=>sentences.split(' '));
// console.log(words);



// let A = [1,2,3,4,5,6];
// arr = A.indexOf(6);
// console.log(arr);


// let A = ['Ram','Z','K','Greeksforgreeks'];
// let iterator = A.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());





// 



// const arr = [...new Array(5)]
// console.log(arr);

// const arr = [1,2,3,4,5];

// var newData =Array.apply(null,Array(6)).map(function () { })

// console.log(newData);


// let arr = ['html','react js','javascript','html','react js'];


// function removeDuplicates(arr){
//     let unique = arr.reduce((acc,curr)=>{
//         if(!acc.includes(curr))
//             acc.push(curr)
//         return acc;

//     },[])
//     return unique;
// }

// console.log(removeDuplicates(arr));









// Bubble sort
// function arrayShorting(arr){
   
//     for(let i = 0; i <arr.length;i++){
//         for(let j = 0;j<(arr.length-i-1);j++){

//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1] =temp;
//             }
//         }
//     }
//     return arr;


// }

// console.log(arrayShorting([5,3,1,8]));

















