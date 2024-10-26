"use strict";
//const name = "Jacob Mercer";
//const age = 26;

//console.log(name);
//console.log(age);

//let user = "Maria";
//user = "Natasha";
//console.log(user);

//Number
//const salary = 3710.84;

//String `` ""
//const description = "JavaScript is awesome!";

//Boolean true/false
//const isModalOpen = true;
//const isLoggedIn = false;

//не має значення null or undefined  (— null використовується для явної вказівки порожнього значення (точно відомо, що значення немає).
//— undefined вказує на невизначеність значення змінної.)
//let value = null;
//console.log(value); // null

//let value;
//console.log(value); // undefined

//typeof
// const quantity = 17;
// console.log(typeof quantity); // виведе "number"
// //const message = "JavaScript is awesome!";
// console.log(typeof message); // виведе "string"
// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // виведе "boolean"
// //let username;
// console.log(typeof username); // виведе "undefined"
// let status = null;
// console.log(typeof status); // виведе "object"

//add
//let age = 25;
//age = age + 1;
//console.log(age); // 26
//let age = 25;
//age += 1;
//console.log(age); // 26

//const age = 24;
//const message = "Poly is " + age + " years old!"; //`Poly is 24 years old`

//.length
//const username = "Poly";
//const message = `Username ${username} is ${username.length} characters long`;
//console.log(message);

//string[index]   string[lastIndex]    string.length - 1
// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[0]); // 'R'
// console.log(product[lastElementIndex]); // 'd'
// console.log(product[product.length - 1]); // 'd'

// Довжина рядка
//const courseTopicLength = courseTopic.length; // 21
// Перший символ рядка
//const firstElement = courseTopic[0]; // "J"
// Останній символ рядка
//const lastElement = courseTopic[courseTopicLength - 1]; // "s"
//console.log(courseTopicLength); // Виведе 21
//console.log(firstElement); // Виведе "J"
//console.log(lastElement); // Виведе "s"

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
//   Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює border - box.
// function getElementsWidth(content, padding, border) {
//   return parseFloat(content) + (parseFloat(padding) + parseFloat(border)) * 2;
// }
// console.log(getElementsWidth("50px", "8px", "4px")); // 74
// console.log(getElementsWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementsWidth("200px", "0px", "0px")); // 200
