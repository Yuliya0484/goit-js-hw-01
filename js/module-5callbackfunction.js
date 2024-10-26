"use strict";
// function greet(name) {
//   return `Welcome ${name}!`;
// }
// console.log(greet("Mango"));
// console.log(greet);
// //////////////////////////////////////////
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;

// console.log(result); // "Your pizza is being prepared, please wait."
// console.log(pointer); // [Function: makePizza]
// console.log(pointer()); // "Your pizza is being prepared, please wait."
//////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
//////////////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
////////////////////////////////////////
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
//filterArray([1, 2, 3, 4, 5], 3);
///////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// console.table(books);

// const MIN_BOOK_RATING = 8;
// 23;
// const names = (array) => {
//   return (
//     array
//       //.map((item) => item.author)
//       .toSorted((a, b) => a.author - b.author)
//       .filter((item) => item.rating >= MIN_BOOK_RATING)
//   );
// };
// console.table(array(books));
