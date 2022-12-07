// 1. Напишіть скрипт порівняння двох масивів. Виводь у консоль true якщо вони ідентичні, та false якщо ні ( довжина обох массивів однакова )
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 2], [1, 2, 3]) => false
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];

// let check = true;
// for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) {
//         check = false;
//         break;
//     } 
// }

// console.log("Is equals -> ", check);


// console.log(check);
// --------------------

// 2. Написати скрипт який буде видаляти з масиву елемент та виводити масив після видалення в консоль.
// Якщо такого елемента в масиві немає – виводь у консоль помилку

// const arr = [1,2,3,4,5,6,7];
// const elementToRemove = 7;
// const elementIndex = arr.indexOf(elementToRemove);
// // console.log(elementIndex)

//   if(elementIndex !== -1){ // elementIndex >= 0 the same
//     arr.splice(elementIndex, 1)
//     console.log(arr)
//   }else{
//     console.log('Error')
//   }

//--------------------

// 3. Напишіть скрипт який буде виводити в консоль фрагмент масиву, що містить перші 'n' елементів масиву.
// const arr = [1,2,3,4,5,6,7] // length = 7
const n = 2;

// Приклад
// n = 2 => [1,2]
// n = 4 => [1,2,3,4]

// console.log("From slice" ,arr.slice(0, n));

// const arr1 = [];

// for (let i = 0; i < n; i++) {

//     if (n > arr.length) {
//         break;
//     }
    
//     arr1.push(arr[i]);

// }


// for (let i = 0; i < arr.length; i++) {
    
//     if (i === n) {
//         break;
//     }
//     arr1.push(arr[i]);

// }

// console.log("Our custom" ,arr1);


//--------------------

// 4. Напишіть скрипт, який створює масив елементів, що є сумою відповідних елементів заданих масивів.
// const arr1 = [1, 2, 7,5];
// const arr2 = [4, 5, 6, 0]; 
// const maxArrayLength = Math.max(arr1.length, arr2.length);

// const arr3 = [];

// for (let i = 0; i < maxArrayLength; i +=1) {
   
//     arr3.push((arr1[i] || 0) + (arr2[i] || 0));
     
//    if (arr2[i] === undefined) {
//     arr3.push(arr1[i]);
//    }

//    if (arr1[i] === undefined) {
//     arr3.push(arr2[i]);
//    }
//    else {
// arr3.push(arr1[i] + arr2[i]);
//    }
// }
// console.log(arr3);

// Результат має бути таким масивом – [5,7,9,4,5]

//--------------------

// 6. Реалізувати скрипт фільтру масиву за вказаним типом даних.

// Змінна arr - масив, який міститиме будь-які дані, filterType - тип даних.
// Потрібно створити новий масив, який міститиме всі дані, які були в arr, 
// за винятком тих, тип яких був записаний у змінній filterType.
// Тобто якщо arr = ['hello', 'world', 23, '23', null], і filterType = 'string', 
// то нови масив має бути таким [23, null].

const arr = ['hello', 'world', 23, '23', null]
const filterType = 'object'
const newArr = [];

// function customNan(value){
//     return value !== value
// }

// console.log(isNaN(false))
// console.log(customNan(false))

for(const variable of arr) {
    if (typeof variable !== filterType) {
        newArr.push(variable);
    }
}
console.log(newArr);