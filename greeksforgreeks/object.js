// function iterateObject(){
//     let exampleObj = {
//         book:"Sherlock Holmes",
//         author:"Arthur Conan Doyle",
//         genre:"Mystery"
//     };

//     for(let key in exampleObj){
//         if(exampleObj.hasOwnProperty(key)){
//             value = exampleObj[key];
//             console.log(key,value);

//         }
//     }
// }iterateObject()

// let exmpleObj = {
//     book:"Sherlock Holmes",
//     author:"Arthur Conan Doyle",
//     genre:"Mystery"
// };

// Object.entries(exmpleObj).map(entry=>{
//     console.log(entry);

// })

// function getObjectLength() {
//   exampleObject = {
//     id: 1,
//     name: "Arun",
//     age: 30,
//   };

//   objectLength = Object.keys(exampleObject).length;
//   console.log(objectLength);
  
// }

// getObjectLength()


// function getObjectLength(){

//     exampleObject = {
//         id:1,
//         name:'Arun',
//         age:30,
//         department:'sales'
//     }

//     let key, count = 0;

//     for(key in exampleObject){
//         if(exampleObject.hasOwnProperty(key)){
//             count++;
//         }
//     }
//     objectLength = count;
//     console.log(objectLength);
    
// }



// const details = {
//     name:"Alex",
//     age:30,
//     country:"Canada"
// }

// console.log('orginal object',details);
// const {age,...rest}= Object.assign({},details);
// console.log(rest);



// How to remove a property from JavaScript object


// function createObject(keys,values){
//     const object = {}; 
//     for(let i = 0; i<keys.length;i++){
//         object[keys[i]]=values[i];
//     }
//     return object;
// }
// const keys = [0,1,2];
// const values = ["GeeksforGeeks","Hello JavaScript","Hello React"];
// const object = createObject(keys,values);
// console.log(object);


// Using the Map Object 

// const keys = [0,1,2];
// const values = ["GeeksForGeeks","Hello JavaScript","Hello React"];

// const keyvaluePairs = keys.map((key,index)=>[key,values[index]]);
// console.log(keyvaluePairs);



// How to add key-value pair to javascript Object 

// const obj = {Organisation:'GFG'};
// obj.filed = "CS";
// console.log(obj);


// const myObject = {oldKey:"Values"};
// let renameObject = Object.assign({},{newKey:myObject.oldKey});

// console.log(renameObject);


// How to Convert JS Ojbect to JSON String in JQuery/JavaScript?





