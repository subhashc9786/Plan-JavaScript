// REVERSE A STING IN JAVASCRIPT

// function reverseString(str){
//     const reverseString = str.split("").reduce((acc,char)=>char+acc,"");
//     return reverseString;
// }

// console.log(reverseString("GeeksforGeeks"));

// USING SPREAD OPERATOR

// function revereseString(str){
//     const strRev = [...str].reverse().join("");
//     return strRev;
// }

// console.log(revereseString("JavaScript"));

// function reverseString(str){
//     let strRev = "";
//     for(let i = str.length-1;i>=0;i--){
//         strRev += str[i];
//     }
//     return strRev;
// }

// console.log(reverseString("DCBA"));

// REMOVE A CHARACTER FROM STRING IN JAVASCRIPT

// function removeCharcter(){
//     let orginalString = "GeeksForGeeks";
//     newString  = orginalString.replace("G","");
//     return newString;
// }

// console.log(removeCharcter());

// function removeCharacter(){
//     let originalstring = "GeeksForGeeks";
//     let newString = originalstring.split("G").join("");

//     return newString;
// }

// console.log(removeCharacter());

// DELETE FIRST CHARACTER OF A STING IN JAVASCRIPT

// function Function(){
// let str = "GeeksForGeeks";
// let resuls = str.slice(1);
// console.log(resuls);
// return resuls;
// }
// Function()

// JavaScript Program to Check if a String Contains only Alphabetic Characters

// let str1 = "GeeksforGeeks";
// let str2 = "Geeks123";

// let regex = /^[a-zA-Z]+$/;

// console.log(regex.test(str1));
// console.log(regex.test(str2));

// let str1 = "GeeksforGeeks";
// let str2 = "Geeks123";

// function isAlphabetic(str) {
//     return [...str].every(char => isNaN(char));
// }

// console.log(isAlphabetic(str1));
// console.log(isAlphabetic(str2));

// let str = 'one ,two,three,four,five';
// const newArr = Array.from(str.split(","));
// console.log(newArr);

// let text = 'The rain in SPAIN stays mainly in the plain';
// let resuult = text.match('ain');

// console.log(resuult);.

// 👉 how to get the last character of a string in javascript?

// let str = 'GeeksforGeeks';

// let res = str.charAt(str.length-1);
// console.log(res);

// let res = str.at(-1);
// console.log(res);

// let str = "GeeksforGeeks";
// let res = str.match(/.$/g);
// console.log(res);

// 👉👉 String Strip in JavaScript

// const string = "    GeeksforGeeks      ";
// console.log("Before string:'"+string+"'");
// console.log("Before String:'"+ string.trim()+"'");

// const str = "  Hello,    Geeks!    ";

// const newstr = str.split(' ').filter(Boolean).join('');
// console.log(newstr);
// console.log(Boolean);

// 👉👉 how to replace multiple spaces with single space in JavaScript ?

// How to count string occurrence in string using javaScript ? Pending

// 👉How to Convert Byte Array to String in JavaScript ?

// let byteArray = new Uint8Array([
//     74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
// ]);

// // Creating textDecoder instance
// let decoder = new TextDecoder("utf-8");

// // Using decode method to get string output
// let str = decoder.decode(byteArray);

// // Display the output
// console.log(str);

// let byteArray = Buffer.from([
//     74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
// ]);
// let str = byteArray.toString();

// console.log(str);

// javascript program to count the occurrences of each character

// let str = "GeeksforGeeks";

// let result = {};

// for (let i = 0; i < str.length; i++) {
//   let ch = str.charAt(i);
//   console.log(ch);
//   if (!result[ch]) {
//     result[ch] = 1;
//   } else {
//     result[ch] += 1;
//   }
// }

// console.log("The occurrence of each letter in given string is:",result);


// let str = "GeeksforGeeks";

// let strArray = str.split("");

// // console.log(strArray)
// let result = strArray.reduce((chars, ch) => {
//     if (!chars[ch]) {
//         chars[ch] = 1;
//     } else {
//         chars[ch] += 1;
//     }
//     // console.log(ch);
//     return chars;
// }, []);

// // console.log(result)
// console.log(
//     "The occurrence of each letter in given string is:", result)



// let str = "GeeksforGeeks";
// let result = {};

// // Iterate over each character of the string
// str.split("").forEach(char => {
//     // Increment the count of the character in the object
//     console.log(result[char]);
    
//     result[char] = (result[char] || 0) + 1;
// });

// console.log("The occurrence of each letter in the given string is:", result);


// 👉👉👉 how to get the last N characters of string in javascript


// function getLastCharcter(str,n){
//     let newString = str.substring(str.length-n);
//     return newString;
// }

// let str = "GeeksForGeeks";
// let n = 5;
// console.log(getLastCharcter(str,n));



// 👉👉👉 SORT AN ARRAY OF STRINGS IN JAVASCRIPT ?


// let string = ['Surj','Sanjeev','Rajnish','Yash','Ravi'];

// console.log('Original String');
// console.log(string);


// string.sort();
// console.log('After sorting');

// console.log(string);




// function string_sort(str){
//     let i = 0;j 
//     while(j<str.length){
//         j = i+1;
//         while(j<str.length){
//             if(str[j]<str[i]){
//                 let temp = str[i]
//                 str[i]=str[j]
//                 str[j]=temp
//             }
//             j++
//         }
//         i++
//     }
// }
// let string = ['Suraj','Sanjeev','Rajnish','Yash','Ravi']



// const currentDate = new Date();
// const currentDate_String = currentDate.toString()
// console.log(currentDate_String);


// let str = 'A'

// console.log(str.charCodeAt());


// 👉👉👉How to check whether a string contains a substring in JavaScript ?

// function containsSubstring(mainString, searchValue) {
//     let searchLength = searchValue.length;
//     let mainLength = mainString.length;
    
//     for (let i = 0; i <= mainLength - searchLength; i++) {
//         if (mainString.slice(i, i + searchLength) === searchValue) {
//             return true;
//         }
//     }
//     return false;
// }

// let str = "Hello there! Welcome to geeksforgeeks";
// let substring = "geeks";
// let result = containsSubstring(str, substring);
// console.log(result);




// 👉👉👉👉How to get a number of vowels in a string in JavaScript ?


// function vowelCount(str) {
//     const vowelRegex = /[aeiou]/gi; 
//     const strMatches = str.match(vowelRegex);

//     if (strMatches) {
//         return strMatches.length;
//     } else {
//         return 0; 
//     }
// }
// const string = "Geeksforgeeks";
// const len = vowelCount(string);
// console.log("Number of vowels:", len);




// function countVowelsReduce(str) {
//     const vowels = "aeiouAEIOU";
//     return str
//         .split("")
//         .reduce(function (count, char) {
//             return vowels.indexOf(char) !== -1
//                 ? count + 1
//                 : count;
//         }, 0);
// }
// const result = countVowelsReduce("Hello, World!");
// console.log(result);






