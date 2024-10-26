"use strict";
// const fruits = ["apples", "plums", "pears", "oranges"];
// console.log(fruits); //apples plums pears oranges//massive
// console.log(fruits[2]); //pears// index
// console.log(fruits[6]); //undefined/ not fined index
// console.log(fruits.length); //4 // four elements

// const firstElement = fruits[0];
// console.log(firstElement); //apples
// fruit[0] = "bananas"; // firstElement became bananas/change name

// const secondElement = fruits[1];
// const thirdElement = fruits[2];
// const lastElement = fruits[3];

// const lastElementIndex = fruits.length - 1;
// console.log(fruits[lastElementIndex]); //show lastElementIndex 3

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// function getLastElementMeta(array) {
//   // Отримуємо індекс останнього елемента
//   const lastIndex = array.length - 1;
//   // Отримуємо значення останнього елемента
//   const lastValue = array[lastIndex];
//   // Повертаємо новий масив з індексом та значенням останнього елемента
//   return [lastIndex, lastValue];
// }

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array.length - 1;
//   const lastValue = array[lastElement];
//   return [firstElement, lastValue];
// }

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }
// console.log(fillArray(2, 10));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
//////////////////////////////////////////////////////////////////
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// const stylesIndex = styles.indexOf("Блюз");
// if (stylesIndex !== -1) {
//   styles.splice(stylesIndex, 1, "Класика");
// }

// console.log(styles.shift());
// console.log(styles.unshift("Реп", "Реггі"));
// console.log(styles);
///////////////////////////////////////////////////////////////////
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function caclculateAverage(...numbers) {
//   let sum = 0;
//   let count = 0;
//   for (const number of numbers {
//     if (typeof number === "number") {
//       count +=1;
//       sum += number;
//       }
//   }
//   return sum / numbers.length;
//   console.log(sum);
// }

// caclculateAverage(5, 10, 15);
//////////////////////////////////////////////////////////////////
// Опис: Напиши функцію countVowels(str), яка приймає рядок str і повертає кількість голосних (a, e, i, o, u) у цьому рядку.
// Підказка:
// Використовуй цикл для перебору кожного символа рядка.
// Можеш створити масив голосних і перевіряти, чи є кожен символ рядка голосною.
// Функція має працювати як з маленькими, так і з великими літерами.
// function countVowels(str) {
//   // Оголоси змінну для зберігання кількості голосних
//   let count = 0;

//   // Логіка для підрахунку голосних
//   // ...

//   return count;
// }

// countVowels("Hello World"); // Повертає 3 (голосні: e, o, o)
// countVowels("JavaScript");  // Повертає 3 (голосні: a, a, i)
// countVowels("Sky");         // Повертає 0 (немає голосних)
///////////////////////////////////////////////////////////////////////
// Завдання: Перевірка парного числа

// Напиши функцію isEven(number), яка приймає один параметр — число number. Функція повинна повертати true, якщо число парне, і false, якщо непарне.

// function isEven(number) {
//   let i = 0;
//   for (i = 0; i <= number; i++) {
//     if (number % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(10)); // true
// function isEven(number) {
//   return number % 2 === 0; // Простий і ефективний спосіб перевірки на парність
// }
/////////////////////////////////////////////////////////////////////////
//Перевірка на голосні: Напиши функцію isVowel(letter), яка приймає одну літеру і повертає true, якщо це голосна (a, e, i, o, u), інакше – false.
// function isVowel(letter) {
//   const vowels = ["a", "e", "i", "o", "u", "y"];
//   return vowels.includes(letter.toLowerCase());
// }
// console.log(isVowel("y")); // true
// console.log(isVowel("a")); // true
// console.log(isVowel("b")); // false
//////////////////////////////////////////////////////////////////////////
// Множення чисел у масиві: Напиши функцію multiplyArray(numbers), яка приймає масив чисел і повертає добуток усіх чисел у цьому масиві.

// function multiplyArray(numbers) {
//   // Твій код тут√
// }

// console.log(multiplyArray([1, 2, 3, 4])); // 24
// Сортування імен за алфавітом: Напиши функцію sortNames(names), яка приймає масив імен і повертає масив, відсортований за алфавітом.

// javascript
// Копировать код
// function sortNames(names) {
//   // Твій код тут
// }

// console.log(sortNames(['Anna', 'Zara', 'Mike', 'Ben'])); // ['Anna', 'Ben', 'Mike', 'Zara']
// Функція, яка додає 1 до кожного елементу: Напиши функцію incrementArray(numbers), яка приймає масив чисел і додає 1 до кожного елементу.

// javascript
// Копировать код
// function incrementArray(numbers) {
//   // Твій код тут
// }

// console.log(incrementArray([1, 2, 3])); // [2, 3, 4]

// Порахуй кількість символів у рядку
// Напиши функцію countCharacters(string), яка приймає рядок і повертає кількість символів у ньому.

// Перевірка на парність
// Напиши функцію isEven(number), яка повертає true, якщо число парне, і false, якщо непарне.

// Порівняй два числа
// Напиши функцію compareNumbers(a, b), яка повертає:

// "a більше за b", якщо a більше;
// "a менше за b", якщо a менше;
// "a дорівнює b", якщо вони рівні.
// Поверни перший елемент масиву
// Напиши функцію getFirstElement(array), яка приймає масив і повертає перший елемент. Якщо масив порожній, функція повинна повернути "Масив порожній".

//                0    1       2      3        4
//const array = [1, "Hello", null, true, [1, 2, 3]];
// //                1    2       3      4        5
// console.log(typeof array);
// console.log(Array.isArray(array));
// // Array.isArray(array) - повертає true/false в залежності від того чи ми працюємо з масивом чи ні
// console.log(array[3]);
// const first = array[0];
// console.log(first);
// const last = array[array.length - 1];
// console.log(array.length);
// console.log(last);

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j += 1) {
//       console.log(item[j]);
//     }
//     continue;
//   }
//   console.log(array[i]);
// }
// const array = [1, "Hello", null, true, [1, 2, 3]];

// for (let item of array) {
//   // console.log(item);
//   if (typeof item === "string") {
//     item = false;
//   }
// }
// console.log("for of", array);

// for(let i = 0; i< array.length; i+=1){
//     if(typeof array[i] === 'string'){
//         array[i] =false;
//     }
// }
// console.log('for',array);

// const array = [1, "Hello", null, true, [1, 2, 3]];

// let i = 0;
// while (i < array.length) {
//   if (typeof array[i] === "string") {
//     array[i] = false;
//   }
//   i += 1;
// }

// console.log(array);

// let value = 1;
// let test = value;
// value = "hello";

// console.log("value", value);
// console.log("test", test);

// const array = [1, 2, 3, 4, 5];
// const copy = array;
// array.push(6, 7);
// copy.push(8, 9);
// console.log(array === copy);
// console.log(array);
// console.log(copy);

// console.log(1 === 1);
// console.log("hello" === "hello");
// console.log([1, 2, 3] === [1, 2, 3]);

//let number = 1;
//number += 15;
//console.log(number);

// let array = [1, 2, 3];
// //array = "string";

// array.push(4);
// array.pop();
// array.length = 10;
// console.log(array);

//
// const str = "Hello world I`m learning JS";
// const arr = str.split("-");
// console.log(arr);

// //const result = arr.reverse().join(" ");

// const result = str.split(" ").reverse().join(" ");
// console.log(str);
// console.log(arr);
// console.log(result);

// const arr = ["hello", "wolrd"];
// const idx = arr.indexOf("wolrd");

// if (arr.indexOf("wolrd") === -1) {
//   console.log("NO");
// } else {
//   console.log("yes");
// }
// console.log(idx);
// console.log(arr.includes("wolrd"));

// if (arr.includes("wolrd")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
//      3           4
//const arr = ["hello", "wolrd"];
// push pop
// arr.push(1, "a", [1, 2]);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// shift unshift

//      0   1      2
// arr.unshift(1, "a", [1, 2]);
// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr);

// // slice
// const result = arr.slice(1, 3);
// console.log("result", result);
// console.log("arr", arr);

// const arr = ["hello", "world", "js"];
// // // splice

// arr.splice(1, 1, "from", "react", "node");
// console.log(arr);
// const idx = arr.indexOf("world");
// const result = arr.splice(idx, 1, "from");
// console.log(arr);
// console.log("result", result);

// concat

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr2.concat(arr, arr1);
// console.log(arr);
// console.log(result);

// -----------------------------------//

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae')
// console.log(genres);
// console.log(genres[genres.length - 1]);
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'Рок-н-рол');
// console.log(genres.splice(0, 1, 'Country', 'Reggae'));
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "8 11";
// const arr = values.split(" ");
// const first = +arr[0];
// const last = +arr[arr.length - 1];
// const result = first * last;
// console.log(arr);
// console.log(result);

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} - ${fruits[i]}`);
// }
//       i- индекс  n-порядковий номер
// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377';
// names = names.split(',');
// phones = phones.split(',');
// for (let i = 0; i < names.length, i < phones.length; i += 1){
//     console.log(`${names[i]} - ${phones[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

//const string = "Welcome to the future";

//arr.pop();
//arr.shift();

//const result = arr.join(" ");
//console.log(result);

//const result = string.split(" ").slice(1, -1).join(" ");

//console.log(result);

//const arr = string.split(" ");
//const test = arr.push("1234");
//console.log(test);
//console.log(arr);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
// langs.sort((a,b) => a.localeCompare(b));
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// console.log(langs);

// нажаль наш варіант був не вірний 😥😥😥

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i,1)[0];
//         langs.unshift(result)
//     }
// }
// console.log(langs);

// Вірні варіанти
// 1 метод бульбашка
// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
// for (let i = 0; i < langs.length; i++) {
//     for (let j = 0; j < langs.length; j++) {
//         if (langs[j] > langs[j + 1]) {
//             const item = langs[j];
//             langs[j] = langs[j + 1];
//             langs[j + 1] = item;
//         }
//     }
// }
// console.log(langs);

// Сучасний варіант
// langs.sort((a,b) => a.localeCompare(b))
// console.log(langs);

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [94, 2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // undefined
// for (const value of numbers) {
//     if (value < min) {
//         min = value;
//     }
// }
// console.log(min); // 1

// const arr = [1, 2, 3] + [4, 5];
// console.log(arr);
// let x = 7;
// let y = null;
// let a = 9;

// console.log(a || x && y);
