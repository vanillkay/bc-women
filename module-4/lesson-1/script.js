/*
  *
  * 1. Написати функцію-суматор всіх своїх параметрів.
  *
  * Функція приймає довільну кількість параметрів.
  * Однак кожен з них обов'язково має бути числом.
  *
  * Генерувати помилку, якщо:
  *   - Якщо функція була викликана менш ніж з двома аргументами;
  *   - Хоча один із аргументів не є допустимим числом (у помилці вказати його порядковий номер).
  *
  * Умови:
  *   - використовувати тип функції arrow function;
  *   - Використовувати об'єкт arguments заборонено.
  *   - Використати forEach
  *
  *
*/

// const sumNumbers = (...args) => {
//   if (args.length < 2) {
//   return 'Error!'
//   }

//   let total = 0;
//   // let errorIndexes = ''; // V1
//   const errorIndexesArr = [];

//   args.forEach((element, index) => {
//     if (typeof element !== 'number') {
//       // errorIndexes += `${index + 1} `  V1
//       errorIndexesArr.push(index+1);
//     }
//     total += element
//   });

//   return errorIndexesArr.length !== 0 ? `Error at positions ${errorIndexesArr.join(",")}` : total;
//   // return errorIndexes.length > 0 ? `Error at positions ${errorIndexes}` : total; // V1
// }
//-------------------------


// console.log('sum -> ', sumNumbers(null,10,2, 'hello', 2, false)) //  Er
// console.log('sum -> ', sumNumbers(10,12,20)) //  42
// console.log('sum -> ', sumNumbers()) //  Erorr 


// 2. Написати функцію-логгер log, яка виводить у консоль повідомлення вказану кількість разів.
//
//  Функція має два параметри:
//       - Перший - рядковий тип, повідомлення для виведення;
//       - Другий - числовий тип, кількість виведення повідомлення.
//
//  Задати значення за ЗАМОВЧУВАННЯМ для обох параметрів:
//      - Для першого - «Empty message»;
//      - Для другого - 1;
//           

//  Умови:
//      - використовувати тип функції arrow function;


// const log = (message = 'Empty message', number = 1) => {
//   for (let i = 1; i <= number; i += 1) {
//     console.log(message);
//   }
// } 
// //-------------------------




// log();

/**
 *
 * 3. Написати функцію, яка повертає найбільше число, з переданих їй як аргументи під час виклику.
 *
 * Генерувати помилку, якщо:
 *  - Якщо функція була викликана менш ніж з двома аргументами;
 *  - Хоча один із аргументів не є допустимим числом (у помилці вказати його порядковий номер).
 *
 * Умови:
 *  - використовувати тип функції arrow function;
 *  - Обов'язково використовувати об'єкт Math.
 */

//-------------------------

// const findMaxNumber = (...args) => { // REST - ...
//   // let args = ...args
//   if (args.length < 2) {
//     return 'Error';
//   }

//   for (let i = 0; i < args.length; i += 1) {
//     if (typeof args[i] !== "number") {
//       return `Error, position ${i +1} not a number`;
//     }
//   }

//   return Math.max(...args); // SPREAD - ...

//   // const {key, ...rest} = {}
//   // const [value, ...rest] = []

//   // const ovj = {a: 1}
//   // return {b: 2, ...ovj}; /// ? SPREAD
 
// }


// console.log("Max nuumber -> ", findMaxNumber(4, null, 5, 80))

// 4.Написати функцію applyFn, яка приймає на вхід 2 параметри:
//
// Масив із вхідними даними
// функцію, яку потрібно застосувати до кожного елемента масиву вхідних даних applyFn(dataArr, callback);

// Функція applyFn повинна повертати масив елментів, на яких було запущено callback

// const applyFn = (dataArr, callback ) => { // HOF - Hight Order function
// const resultArray = [];
// dataArr.forEach(element => {  
//   resultArray.push(callback(element))
// })
// return resultArray;
// }

// const powCallback = (element) => element * 2

// console.log('First callback', applyFn([1,2,3], powCallback)) // [2,4,6]
// console.log('Second callback', applyFn([1,2,3], (element) => element + 10))// [11,12,13]
// console.log('Third callback', applyFn(["HELLO", "WORLD"], (strElement) => strElement.toLowerCase())) // ['hello', 'world']
// console.log('Fourth callback', applyFn([{a: 1}, {a: 2}, {a: 3}], (element) => ({...element, b: 2}) )) // [{a: 1, b: 2}, {a: 2, b: 2}, {a: 3, b: 3}]



// 5. Перепишіть калькулятор використовуючи колбек функції та arrow function

function getNumbers() {
  let result1;
  let result2;
  do{
    result1 = Number(prompt("Введи перше число"));
    
    result2 = Number(prompt("Введи друге число"));
  }
  while(isNaN(result1) || isNaN(result2 ));

 
  return [result1, result2];

}

const VALID_OPERATIONS = ['*', '/', '-', '+'];

function getOperation() {
let operation;
do {
  operation = prompt('Введи знак');
}
while (!VALID_OPERATIONS.includes(operation))
  
  return operation;
} 

const sum = (firstNum, secondNum) => firstNum + secondNum;
const minus = (firstNum, secondNum) => firstNum - secondNum;
const pow = (firstNum, secondNum) => firstNum * secondNum;
const del = (firstNum, secondNum) => firstNum / secondNum;

function calculate(sumCallback, minusCallback, powCallback, delCallback) {
 const [firstNum, secondNum] = getNumbers();
  const operation = getOperation();
  switch (operation) {
      case '+' :
          return sumCallback(firstNum, secondNum);
      case '-' :
          return minusCallback(firstNum, secondNum);
      case '*' :
          return powCallback(firstNum, secondNum);
      case '/' :
          return delCallback(firstNum, secondNum);
  }
}

// console.log(calculate(sum, minus, pow, del));


// const mathOperationsConfig = {
//   "+": sum,
//   "-": minus,
//   "*": pow,
//   "/": del,
// }


// console.log(calculateV2(mathOperationsConfig));


// function calculateV2(operationConfig) {
//   const [firstNum, secondNum] = getNumbers();
//    const operation = getOperation();

//   if(!operationConfig.hasOwnProperty(operation)){
//     return "This operation is not supported for now, please try again later ";
//   }

//    const mathOperation = operationConfig[operation];

//    return mathOperation(firstNum, secondNum)
  
//  }


