// 1. Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
const apples = 47;
const grapes = 135;

// const sum = apples + grapes;
// console.log (sum);
// const minus = grapes - apples;
// console.log (minus);



//-----------------------------------

// 2. Заміни вираз перевизначення комбінованим оператором +=,  -=, *=, /=.
// let students = 100;
// let students2 = students;
// let students3 = students;
// let students4 = students;
// students = students + 50;
// students +=  50;
// students2 -= 50;
// students3 *= 50;
// students4 /= 50;
// console.log(students);
// console.log(students2);
// console.log(students3);
// console.log(students4);




//-----------------------------------


// 3.Розбери пріоритет операторів в інструкції надання значення змінної result.
// const result = -4 / 0
// console.log(result); //? 331 - 10 = 321

//-----------------------------------

// 4. Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has repair bots ${repairBots} in stock, has defence bots ${defenceBots} in stock`;
// console.log(message);


// console.log(message);

//-----------------------------------

// 5. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
let weight = '88.3';
let height = '1.75';

const bmi = weight / (height*height);
// console.log(bmi); // 28.8



//-----------------------------------

// 6. Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.
let value = 27.3;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(value)); // 27

//-----------------------------------

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined);//2

// console.log((1 && null && 2) > 0);//false

// console.log(null || (2 && 3) || 4); //2


// -----------------------------------

// 7.Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

const totalMinutes = 423;

const hours = String(Math.floor(totalMinutes / 60));
const minutes = String(totalMinutes % 60);
// if (hours.length < 2) {
//   hours = `0${hours}`
// }
// if (minutes.length < 2) {
//   minutes = `0${minutes}`
// }
console.log(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")} `);


/* ЗАВДАННЯ 8
     * Записати в змінну '123', вивести в консоль typeof цієї змінної.
     * Перетворити цю змінну на чисельний тип за допомогою parseInt(), parseFloat(), унарний плюс +
     * Після цього повторно вивести в консоль typeof цієї змінної.
    * */

//  let myVar = "123.67";
//  console.log(typeof myVar);
// //
//  let myVar2 = Number(myVar);
// console.log(myVar2, typeof myVar2);
// //
// let myVar3 = Number.parseInt(myVar);
// console.log(myVar3, typeof myVar3);

// let myVar4 = +myVar;
// console.log(myVar4, typeof myVar4);


// let myVar5 = Number.parseFloat(myVar);
// console.log(myVar5, typeof myVar5);

//-----------------------------------

/* ЗАВДАННЯ 9
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */

//  const userNumber = prompt("Enter the number");
//  console.log(Number(userNumber));

//-----------------------------------

/* ЗАВДАННЯ 10
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */

const userNumber1 = Number(prompt("Enter the first number"));
const userNumber2 = Number(prompt("Enter the second number"));

const sum =userNumber1+userNumber2;
console.log(`sum:  ${sum}`);
const minus = userNumber1 - userNumber2;
console.log(`minus:  ${minus}`);
const power =userNumber1*userNumber2;
console.log(`power:  ${power}`);
const divide =Math.round(userNumber1/userNumber2);
console.log(`divide:  ${divide}`);
const rest = userNumber1%userNumber2;
console.log(`rest:  ${rest}`);

//  console.log(0.1 + 0.2)

