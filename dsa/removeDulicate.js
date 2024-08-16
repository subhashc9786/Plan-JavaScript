let arr = ["apple", "mango",
    "orange", "mango", "mango"];

// Using Filter Method

// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => {
//             console.log(arr.indexOf(item),index);
//        return arr.indexOf(item) === index
//     });
// }
// console.log(removeDuplicates(arr));


// Using JavaScript Set() Method

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));



// Using JavaScript forEach() Method??


// function removeDuplicates(arr) {
//     let unique = [];
//     arr.forEach(element => {
//         if (!unique.includes(element)) {
//             unique.push(element);
//         }
//     });
//     return unique;
// }
// console.log(removeDuplicates(arr));


// Using JavaScript reduce() Method

// function removeDuplicates(arr) {
//     let unique = arr.reduce(function (acc, curr) {
//         if (!acc.includes(curr))
//             acc.push(curr);
//         return acc;
//     }, []);
//     return unique;
// }
// console.log(removeDuplicates(arr));

// Using JavaScript indexOf() Method


// function removeDuplicates(arr) {
//     let unique = [];
//     for (i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates(arr));


// Using JavaScript Map


// function removeDuplicates(arr) {
//     let map = new Map();
//     arr.forEach(item => {
//         map.set(item, true);
//     });
//     return Array.from(map.keys());
// }

// console.log(removeDuplicates(arr));