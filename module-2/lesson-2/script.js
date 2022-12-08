// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).
// // const avg = function (arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
        
// //     let total = 0;
// //     for (const number of arr) {
// //         total += number;
// //     }
// //     // console.log('res', 0 / 0)
// //     return total / arr.length;
//     
// // }

// // console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
// // console.log(avg([22, 34, 62, 99])); // 54.25
// // console.log(avg([])); // 0
// // console.log(avg([1000, 2056, 3444, 1237])); // 1934.25

//------------------------

// 2. Напишіть функцію power для обчислення степені числа

// function power(number, pow) {
//     return number ** pow;
// }

// function power(number, pow) {
//     let result = 1;
//     for (let i = 1; i <= pow; i += 1) {
//         result *= number;
//     }
//     return result;
// }

// console.log(power(2, 3)); // 8
// console.log(power(4, 2)); // 16
// console.log(power(3, 4)); // 81
// console.log(power(10, 3)); // 1000

//------------------------

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.

// const squareDigits = function (number) {
//   const stringNumber = String(number);
//   const arr = stringNumber.split('');

//   let result = '';


//   for (const el of arr) {
//     result += Number(el) ** 2;
//   }

//   return Number(result);
// }

// const squareDigits2 = function (number){
//     return String(number)
//             .split("")
//             .map(symbol => Number(symbol) ** 2)
//             .join("")
// }

    // console.log(squareDigits(91)); // 811
    // console.log(squareDigits(0)); // 0
    // console.log(squareDigits(867)); // 643649
    // console.log(squareDigits2(91)); // 811
    // console.log(squareDigits2(0)); // 0
    // console.log(squareDigits2(867)); // 643649

//------------------------



// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.

// function isPalindrome(string){
//   // let reverse = "";
// //   for ( let i = string.length-1; i >= 0; i -= 1 ) {
// //     reverse +=string[i];
// //   }
// //   return string === reverse;
// return string === string.split("").reverse().join("");
// }

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false


//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, 
// верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний 
// (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done
// function stringTransformer (string) {
//     let stringTransformed = '';
//     for (let i = 0; i < string.length; i +=1 ) {
//         if (string[i] === string[i].toLowerCase()) {
//             stringTransformed += string[i].toUpperCase()
//         } else {
//             stringTransformed += string[i].toLowerCase()
//         }
//     }
//     return stringTransformed.split(" ").reverse().join(" ");
// }

// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT


//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. 
// Сюди можна ввести +, -, *, /. ( функцією )

// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
//
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз


// function askNumber(){
//     let number;

//     do{
//         number = Number(prompt("Enter the number"))
//         if(isNaN(number)){
//             alert('Wrong number ! Try again please')
//         }
//     }while(isNaN(number));

//     return number;
// }

// function askNumberV2(){

//     while(true){
//         const number = Number(prompt("Enter the number"))

//         if(!isNaN(number)){
//             return number;
//         }

//         alert("Wrong number")
//     }
// }

// function askNumberV3(){
// // while(true)
//    for(;;){
//         const number = Number(prompt("Enter the number"))

//         if(!isNaN(number)){
//             return number;
//         }

//         alert("Wrong number")
//     }
// }

// function askNumberV4(){

//     let number;

//     for(
//         number =  Number(prompt("Enter the number"));
//          isNaN(number);  
//          number = Number(prompt("Enter the number"))
//     ){}

//     return number;
// }

// console.log(askNumberV4())

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

 function calculate() {
   const numbers = getNumbers();
    const firstNum = numbers[0];
    const secondNum = numbers[1];
    const operation = getOperation();
    switch (operation) {
        case '+' :
            return firstNum + secondNum;
        case '-' :
                return firstNum - secondNum;
        case '*' :
                return firstNum * secondNum;
        case '/' :
                    return firstNum / secondNum;
    }
 }
 
//  console.log(calculate());


// console.log(getOperation());
//------------------------
