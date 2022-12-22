// 1. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з текстом

// const buttonEl = document.querySelector('#hider');
// const textEl = document.querySelector('#hide');

// buttonEl.addEventListener('click', function() {

//     textEl.classList.toggle('hidden');
//     console.log(this)
//     if (textEl.classList.contains('hidden')) {
//         // buttonEl.value = 'Show text'
//         this.value = 'Show text';
//     } else {
//         // buttonEl.value = 'Hide text'
//         this.value = 'Hide text';
//     }
    
// })

// -----------------

// 2. Створіть кнопку, при натисканні на неї вона приховуватиме сама себе.

// const button = document.createElement('button');
// button.textContent = 'Click Me!!!!'
// console.log(button);

// button.addEventListener('click', () => {
//     button.remove();
//     // button.classList.add('hidden');
//     // button.classList.toggle('hidden');
// });
// const rootElem = document.querySelector('#root');
// rootElem.append(button);

// const elements = [];

// for(let i = 0 ; i< 3; i++){
//     const button = document.createElement('button');
//     button.textContent = 'Click Me!!!!' + (i + 1);
//     elements.push(button)
// }
// rootElem.append(...elements);


// -----------------

// 3. У змінній button знаходиться кнопка.
// Спочатку обробників на ній немає.
// Що буде виведено під час кліку після виконання коду?

// const button = document.querySelector('.listeners');

// const onClick = function() { alert("1"); };

// button.addEventListener("click",  onClick);

// button.removeEventListener("click",  onClick);

// button.onclick =  function() { alert(2); }

// -----------------


// 4. Напишіть функцію removeChildren, яка видаляє всіх нащадків елемента.

// function removeChildren(el){
//     [...el.children].forEach(el => el.remove())
// }
// const tableEl = document.querySelector('table')
// const listEl = document.querySelector('ol')
// removeChildren(tableEl)
// removeChildren(listEl)

// -----------------

// 5. Розробіть інтерфейс, щоб створити список.
//
// Для кожного пункту:
//
// Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт ( li ) і додайте його до UL.
// Процес припиняється, коли користувач натискає ESC.
// Усі елементи мають створюватися динамічно.
//
// P.S. prompt повертає null, якщо користувач натиснув на ESC.
// let liContent = prompt('Enter li content');

// const listElement = document.querySelector('.insert');

// const item = document.createElement('li');

// item.textContent = liContent;

// listElement.append(item);
// let liContent = 1;

// do{

//     liContent = prompt('Enter li conten');

//     if(liContent === null){
//         break;
//     }

//     const item = document.createElement('li');

//     item.textContent = liContent;

//     listElement.append(item);

// }while(liContent !== null)

// const liElements = [];

// while(true){
//     const liContent = prompt('Enter li conten');
//     if(liContent === null){
//         break;
//     }
//     const item = document.createElement('li');
//     item.textContent = liContent;
//     liElements.push(item);
// }

// listElement.append(...liElements);

// console.log('Next')
    


{/* <li>hello</li> */}