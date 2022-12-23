// 1. Реалізувати функцію, яка отримуватиме масив елементів і виводитиме їх на сторінку у вигляді списку.

// Створити функцію, яка прийматиме на вхід масив.
// Кожен із елементів масиву вивести на сторінку у вигляді пункту списку
// Необхідно використовувати шаблонні рядки та функцію map масиву для формування контенту списку перед виведенням його на сторінку.
// Якщо всередині масиву одним із елементів буде ще один масив або об'єкт, виводити його як вкладений список.


// const listArray = [2,3,5,6,4,  [8,9,5,8], null, {a: 2, b: 5}]; 

// const listEl = document.querySelector('.list');

// const createList = (arr) => {
//    return arr.map((element) => {
//         if (Array.isArray(element)) {
//             const mappedArrayStr = mapArray(element);
//             return `<li><ul>${mappedArrayStr}</ul></li>`;
//         }
//        if (typeof element === 'object' && element !== null) {
//            const mappedObjStr = mapObject(element);
//             return `<li><ul>${mappedObjStr}</ul></li>`;
//        }
//         return `<li>${element}</li>`
//     }).join('');
// };

// const list = document.createElement('ul');
// list.innerHTML = createList(listArray);

// listEl.append(list);

// function mapArray(array) {
//     return array.map((element) => `<li>${element}</li>`).join('');
// }

// function mapObject(obj) {
//     return Object.entries(obj).map(([key, value]) => `<li>${key} = ${value}</li>`).join('');
// }

// {a: 2 } = <li>a = 2</li>
// console.log(mapObject({a: 2, b: 2}))
//--------------------------


// 2. Реалізувати функцію підсвічування клавіш.

// У файлі index.html лежить розмітка кнопок.
// Кожна кнопка містить назву клавіші на клавіатурі
// Після натискання вказаних клавіш - та кнопка, на якій написана ця літера, повинна фарбуватись у синій колір.
// При цьому якщо якась інша літера вже раніше була пофарбована в синій колір - вона стає чорною.
// Наприклад, за натисканням Enter перша кнопка забарвлюється в синій колір.
// Далі користувач натискає S, і кнопка S фарбується в синій колір, а кнопка Enter знову стає чорною.

const containerButtons = document.querySelector('.btn-wrapper');
const letter = document.querySelectorAll('.symbol');


// window.addEventListener("keydown", (event) => {
    
//     letter.forEach(el => {
//         const key = event.code === 'Enter' ? event.code : event.code[event.code.length - 1];
//         if (el.textContent === key) {
//             el.classList.add('active');
//         };
//     });

// });

// window.addEventListener("keyup", (event) => {

//     letter.forEach(el => {
//         const key = event.code === 'Enter' ? event.code : event.code[event.code.length - 1];
//         if (el.textContent === key) {
//             el.classList.remove('active');
//         };
//     });

// });

// const keyToggle = (event, method) => {
    
//     letter.forEach(el => {
//         const key = event.code === 'Enter' ? event.code : event.code.slice(-1);
//         if (el.textContent === key) {
//             el.classList[method]('active');
//         };
//     });

// }

// window.addEventListener("keydown", (event) => keyToggle(event, 'add'));

// window.addEventListener("keyup", (event) => keyToggle(event, 'remove'));


const keyToggle = (method) => ((event) => {
    letter.forEach(el => {
        const key = event.code === 'Enter' ? event.code : event.code.slice(-1);
        if (el.textContent === key) {
            el.classList[method]('active');
        };
    });
})

// const onKeyDown = keyToggle('add');

// onKeyDown({code: 'Enter'})


window.addEventListener("keydown", keyToggle('add'));

window.addEventListener("keyup", keyToggle('remove'));



// code engine
// ((event) => {
//     letter.forEach(el => {
//         const key = event.code === 'Enter' ? event.code : event.code.slice(-1);
//         if (el.textContent === key) {
//             el.classList[method]('active');
//         };
//     });
// })
// code engine

// onKeyDown({code: 'KeyS'})

// const onKeyUp = keyToggle('remove');


// onKeyUp({code: 'Enter'})