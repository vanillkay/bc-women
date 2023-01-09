// const testString = ['asdf', 'fdas' ,'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];

//V1
// function findMatches(array) {
//     const finalArr = [];
//     array.forEach(el => {
//         const lettersCount = {};
//      for (const letter of el) {
//          lettersCount[letter] = (lettersCount[letter] || 0) + 1;
            //ключ                      значення
//         }
//         // console.log(lettersCount);
//         const isTwiceLetters = Object.values(lettersCount).some(el => el === 2);
//         if (isTwiceLetters) {
//             finalArr.push(el);
//         }
//         // console.log(isTwiceLetters);
//     })
//     return finalArr;
// }
// console.log(findMatches(testString));
//V2
// function findMatches(array) {
//     return array.filter(el => {
//         const lettersCount = {};
//         for (const letter of el) {
//             lettersCount[letter] = (lettersCount[letter] || 0) + 1;
//         }
//         // console.log(lettersCount);
//         return Object.values(lettersCount).some(el => el === 2);
//     });
// }
// console.log(findMatches(testString));


// V3
// function findMatches(array) {
//     return array.filter(el => {
//         const lettersCount = new Map();
//         for (const letter of el) {
//             lettersCount.set(letter, (lettersCount.get(letter) || 0) + 1)
//         }
//         return [...lettersCount.values()].some(el => el === 2);
//     });
// }
// console.log(findMatches(testString));


// dupl([1,2,3]); returns [1,2,3,1,2,3]


// function dupl(arr) {
//     if(Array.isArray(this)){
//         return [...this, ...this];
//     }

//     if(Array.isArray(arr)){
//         return [...arr, ...arr];
//     }

//     return [];
// }


// function dupl(arr) {

//     const arrToDupl = Array.isArray(this) ? this : (Array.isArray(arr) ? arr : []);

//     return [...arrToDupl, ...arrToDupl]
// }

// function dupl(arr) {

//     const cases = new Map([
//         [true, []], // default case 
//         [Array.isArray(arr), arr], // param case
//         [Array.isArray(this), this],// proto case
//     ])

//     const arrToDupl = cases.get(true);

//     return [...arrToDupl, ...arrToDupl]
// }

// console.log('From method' ,dupl([1,2,3]))


// Array.prototype.dupl = dupl;

// const beforeDupl = [1,2,3]
// const duplicated = beforeDupl.dupl();

// console.log('From proto', duplicated)

const task1 = "Task number one.\nНапиши скрипт, який розраховує індекс маси тіла людини.\nДля цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри\nlet weight = 88.3\nlet height = 1.75";
console.log(task1);
let weight = 88.3;
let height = 1.75;
const bmi = weight/Math.pow(height,2);
console.log(`індекс маси тіла дрівнює ${bmi.toFixed(1)}`); 

const task2 = "Task number two\nНапиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.\nПеревірте, що буде в консолі при значеннях 27.3 і 27.9.";
console.log(task2);
function rounding(x){
    console.log(`number is ${x}`);
    console.log(`Math.floor() = ${Math.floor(x)}`);
    console.log(`Math.ceil() = ${Math.ceil(x)}`);
    console.log(`Math.round() = ${Math.round(x)}`);
}
let numeric = 27.3;
rounding(numeric);
numeric = 27.9;
rounding(numeric);

const task3="Task number three\nНапиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM."
console.log(task3);
function minsToHHMM(x){
    let hoursStr = parseInt(x/60);
    let minutesStr;
    if (hoursStr < 10){
        hoursStr = `0${hoursStr}`
    } 

    
    if (x%60 < 10){
        minutesStr = `0${x%60}`
    } else {
        minutesStr = `${x%60}`
    }
    let timeStr = `${x} minutes = ${hoursStr}:${minutesStr}`;
    console.log(timeStr);
}
let totalMinutes = 70;
minsToHHMM(totalMinutes);
totalMinutes = 450;
minsToHHMM(totalMinutes);
totalMinutes = 1441;
minsToHHMM(totalMinutes);

const task4 = "Task number four\nВивести на екран модальне вікно prompt з повідомленням \"Enter the number\".\nРезультат виконання модального вікна записати в змінну, значення якої вивести в консоль."
console.log(task4);
let enteredNumber = prompt('Enter a number');
let newNumber = Number(enteredNumber);
console.log(newNumber);

const task5 = "Task number five\nЗа допомогою модального вікна prompt отримати від користувача два числа.\nВивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного."
console.log(task5);
let a = prompt('Enter first number:');
let b = prompt ('Enter second number:');
let firstNumber = Number(a);
let secondNumber = Number(b);
console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);