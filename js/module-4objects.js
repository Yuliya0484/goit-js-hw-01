"use strict";
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

//const keys = ["descr", "rating", "price"];
//const values = ["Spacious apartment in the city center", 4, 2153];
//for (const key in apartment) {
//console.log(key);
//console.log(apartment[key]);
//}
/////////////////////////////////////////////////////////////////////////////////////////
// const book = {
//   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   rating: 8.38,
// // };

// // for (const key in book) {
// //   console.log(key); // Ключ
// //   console.log(book[key]); // Значення властивості з таким ключем
// // }
// ///////////////////////////////////////////////////////////////////////////////////////
// // const book = {
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   rating: 8.38,
// // };
// // const keys = Object.keys(book);

// // for (const key of keys) {
// //   console.log(key); // Ключ
// //   console.log(book[key]); // Значення властивості
// // }
// //////////////////////////////////////////////////////////////////////////////////////
// //object.keys()+for...of
// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };

// // const values = ["Spacious apartment in the city center", 4, 2153];
// // const keys = Object.keys(apartment);

// // for (const key of keys) {
// //   console.log(key);
// //   console.log(apartment[key]);
// // }
// ///////////////////////////////////////////////////////////////////////////////////////
// function countTotalSalary(salaries) {
//   // Ініціалізуємо змінну для загальної суми зарплат
//   let totalSalary = 0;

//   // Отримуємо масив значень (зарплат) з об'єкта salaries
//   const salaryValues = Object.values(salaries);

//   // Проходимо по кожному значенню в масиві та додаємо його до totalSalary
//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }

//   // Повертаємо загальну суму зарплат
//   return totalSalary;
// }

// // Перевірка роботи функції
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400
// ///////////////////////////////////////////////////////////////////////////////////////
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   // Додаємо значення властивості hex в масив hexColors
//   hexColors.push(color.hex);

//   // Додаємо значення властивості rgb в масив rgbColors
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// ///////////////////////////////////////////////////////////////////////////////////
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// getProductPrice("Radar");

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const propValues = []; // Масив для зберігання значень властивостей

//   for (const product of products) {
//     // Якщо властивість існує в об'єкті, додаємо її значення в масив
//     if (product[propName] !== undefined) {
//       propValues.push(product[propName]);
//     }
//   }

//   return propValues;
// }
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []
///////////////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100
////////////////////////////////////////////////////////////////////////////
// const password = "true";
// const myKey = password;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);
////////////////////////////////////////////////////////////////////////////
// const objA = {
//   x: 1,
//   y: 2,
// };

// const objB = {
//   y: 3,
// };

// const result = {
//   x: 5,
//   ...objA,
//   y: 10,
//   ...objB,
//   z: 15,
// };
// console.log(result);
