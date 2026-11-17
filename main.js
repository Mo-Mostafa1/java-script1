// ________________________________________________________
//   task


// 1-
// let num=Number("123")
// console.log(num + 7)

// 2-
//  let fun=function checkFalsy(value){
//     if (!value){
//         return "invild";
//     }
//     return value;
//  }
// console.log(fun())

// 3-
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 4-
// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers);


// 5-
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArray = [...arr1, ...arr2];

// console.log(mergedArray);


// 6-
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// 7-
// let words = ["a", "ab", "abc"];

// let len = words.map(function(word) {
//     return word.length;
// });

// console.log(len);


// 8-
// function checkNumber(num) {
//     if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
//          else return "Not divisible by both";
// }

// console.log(checkNumber(15));


// 9-
// const equll = (num) => {
//     return num * num;
// };

// console.log(equll(5));


// 10-
// function getPerson(person) {
//     const { name, age } = person;

//     return `${name} is ${age} years old`;
// }

// const person = { name: 'MHMD', age: 22 };

// console.log(getPerson(person));


// 11-
// function sum(...numbers) {
//     let total = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }

//     return total;
// }

// console.log(sum(1,2,3,4,5));



// 12-

// function getMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// getMessage().then((result) => {
//     console.log(result);
// });



// 13-

// function findLargest(numbers) {
//     let equll = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > equll) {
//             equll = numbers[i];
//         }
//     }

//     return equll;
// }

// console.log(findLargest([1,3,7,2,4]));



// 14- xxxxx



// 15-

// function splitWords(str) {
//     return str.split(" ");
// }

// console.log(splitWords("The quick brown fox"));


// ______________________________


