"use strict";
// Обчислення суми чисел
// Напиши програму, яка запитує у користувача два числа і виводить їх суму.
// function countNum(num1, num2) {
//   const count = num1 + num2;
//   return count;
// }
// console.log(countNum(15, 60));
// ////////////////////////////////////////////////
// // Перевірка парності числа
// // Напиши програму, яка перевіряє, чи є введене число парним або непарним.
// function checkNumber(number) {
//   let count = 0;
//   for (let i = 0; i <= number; i++) {
//     if (number % 2 === 0) {
//       count += i;
//     }
//   }
//   if (count > 0) {
//     return `The number is good`;
//   } else {
//     return `The number isn't good`;
//   }
// }
// console.log(checkNumber(4));
// console.log(checkNumber(5));
// ///////////////////////////////////////////////
// // Переведення температури з Цельсія в Фаренгейт
// // Напиши функцію, яка приймає температуру в градусах Цельсія і повертає її у Фаренгейтах.
// function translateTemperature(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }
// console.log(translateTemperature(18));
////////////////////////////////////////////////
// Перевернути рядок
// Напиши функцію, яка приймає рядок і повертає його у зворотному порядку.

// javascript
// Копировать код
// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("hello")); // "olleh"
// Простий калькулятор
// Створи простий калькулятор, який виконує одну з базових операцій (+, -, *, /) залежно від введення користувача.

// javascript
// Копировать код
// const num1 = Number(prompt("Enter the first number:"));
// const num2 = Number(prompt("Enter the second number:"));
// const operation = prompt("Enter operation (+, -, *, /):");

// let result;
// if (operation === "+") {
//    result = num1 + num2;
//  } else if (operation === "-") {
//   result = num1 - num2;
//  } else if (operation === "*") {
//    result = num1 * num2;
//  } else if (operation === "/") {
//    result = num1 / num2;
//  } else {
//   result = "Invalid operation";
// }
// alert(`The result is: ${result}`);
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// const refs = {
//   buttonSwap: document.querySelector("#swapButton"),
//   leftSwapInput: document.querySelector("#leftSwapInput"),
//   rightSwapInput: document.querySelector("#rightSwapInput"),
// };
// refs.buttonSwap.addEventListener("click" onButtonSwapClick);

// function onButtonSwapClick(event) {
//   const rightSwapClickValue = refs.rightSwapClick.value;
//   refs.rightSwapInput.value = leftSwapClickValue;
//   refs.leftSwapInput.value = rightSwapClickValue;
// }

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// const refs = {
//   taskTitle: document.querySelector(".taskTitle"),
//   passwordButton: document.querySelector("#passwordButton"),
// };
// refs.passwordButton.addEventListener("click" onPasswordButtonClick);

// function(onPasswordButtonClick) {

//   if (refs.passwordButton.textContent === "Розкрити") {
//     refs.passwordButton.textContent = "Приховати"
//     refs.taskTitle.style.displey = "block"

//   }
//   refs.taskTitle.style.display = "none";
//   refs.passwordButton.textContent = "Розкрити";
//   console.log(refs);
// }

// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
// const statList = document.querySelector(".statList");
// statList.addEventListener("click", onStatListButtonClick);
// let sum = 0;
// const stats = {};

// function onStatListButtonClick(event) {
//   const targetButton = event.target;
//   if (targetButton.tagName !== "BUTTON") {
//     return;
//   }
//   const key = targetButton.textContent;
//   if (stats.hasOwnProperty(key)) {
//     stats[key] = stats[key].value += 1;
//   } else {
//     stats[key] = 1;
//   }
//   sum += Number(targetButton.dataset.number);
//   console.log(sum);
// }
// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price: 100;
//       break;
//     case "Chile":
//       price: 250;
//       break;
//     case "Australia":
//       price: 170;
//       break;
//     case "Jamaica":
//       price: 120;
//     default:
//       "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return (message = `Shipping to ${country} wii cost ${price} credits`);
// }
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// const value = prompt("Яка офіційна назва JavaScript ?");
// if (value === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript");
// }
// const hours = 24;
// const minutes = 14;
// let timestring;
// if (minutes > 0) {
//   console.log(`${hours}H : ${minutes}M`);
// } else {
//   console.log(`${hours}H`);
// }

// const userInput = Number(prompt("Введіть число!"));
// if (!userInput) {
//   alert("Це нуль!");
// } else if (userInput > 0) {
//   alert("Це позитивне число!");
// } else alert("Це негативне число!");
// Кнопка increment повинна кожну секунду збільшувати значення на 1
// Кнопка decrement має кожну секунду зменшувати значення на 1
// const incrementButton = document.querySelector('[data-action="increment"]');
// const decrementButton = document.querySelector('[data-action="decrement"]');
// const span = document.querySelector(".counter-value");
// incrementButton.addEventListener("click", onincrementButtonClick);
// decrementButton.addEventListener("click", ondecrementButtonClick);
// let value = 0;
// let intervalId = null;
// function onincrementButtonClick(event) {
//   intervalId = setInterval(() => {
//     value += 1;
//     span.textContent(value);
//   }, 1000);
// }
// function ondecrementButtonClick(event) {
//   intervalId = setInterval(() => {
//     value -= 1;
//     span.textContent(value);
//   }, 1000);
// }
// function stopInterval() {
//   if (intervalId) {
//     clearInterval(intervalId);
//     intervalId = null;
//   }
// }
