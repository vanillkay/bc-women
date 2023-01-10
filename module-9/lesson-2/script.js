// 1) Використовуйте Promise.resolve(value), щоб створити Promise, який успішно виконається зі значенням 3.
// const prosime = Promise.resolve(9).then(data => console.log('From promise ' + data));

// prosime.then(data => console.log('From promise ' + data));
//----------------

// 2) Використовуйте Promise.reject(error), щоб створити Promise, яки відхилятиметься зі значенням "Boo!"
// const promise = Promise.reject("Boo!").catch(value => console.error("result", value));

//----------------

// 3) Допишіть функцію нижче. Використовуйте конструктор Promise, щоб створити Promise, який:
//      виконається, якщо itShouldResolve є true
//      відхилятиметься, якщо itShouldResolve є false

// function shouldResolve(){
//     return new Promise((resolve, reject) => {
//         let itShouldResolve = Math.random() > 0.5;
//         if (itShouldResolve) {
//             resolve('success');
//         } else {
//             reject('failed')
//         };
//     }
//    )
// }
// shouldResolve().then((mas) => {
//     console.log('from then', mas)
// }).catch((fail) => {
//     console.log('from catch',fail)
// });


//----------------

// 4) Написати функцію delay. Вона повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд, так щоб ми могли додати до нього .then:

function delay(ms) {
    // console.log('Zero')
    return new Promise((resolve, reject)=>{
        // console.log('first')
        if(typeof ms !== 'number'){
            reject('Wrong time');
            return;
        }

        setTimeout(()=>{
            resolve(ms / 1000);
        },ms)
    }
    )
}

// delay('asdasd').then((seconds) => alert(`done after ${seconds} seconds`)).catch(err => console.log('Error', err));

//-----------------

// 5) Написати функцію яка буде отримувати в параметрах проміс та колбек. Запустити колбек після виконання промісу за допомогою then
// function promiseExecutor(promise, callback) {
//     console.log('second')
//     promise.then(callback);
// }

// const promiseSeconds = delay(2000);
// const callback = (data) => {
//     console.log('THIRD')
//     console.log('from callback', data);
// };

// promiseExecutor(delay(2000), callback);

//-----------------

// 6) Написати функцію яка буде отримувати в параметрах проміс та два колбеки. Запустити перший колбек після успішного виконання промісу за допомогою then
// або ж запустити другий колбек якщо при виконанні промісу виникла помилка
// function promiseExecutorV2(promise, passedCallback, failedCallback) {
//     promise.then(passedCallback).catch(failedCallback);
// }

// // const promiseFunction = shouldResolve;
// const onSuccess = (data) => {
//     console.log('from onSuccess =>', data);
// }
// const onFailed = (data) => {
//     console.error('from onFailed =>', data);
// }

// promiseExecutorV2(shouldResolve(), onSuccess, onFailed);

//-----------------

// 7) Модифікуйте функцію з 4-го завдання щоб вона отримувала в параметри також булеве значення
// ( виповниться проміс чи відхилиться ) та значення яке потрібно повернути якщо проміс виконається успішно

// function delayV2(ms, shouldResolve) {
//     const sec = ms/1000;
//     // console.log('Zero')
//     return new Promise((resolve, reject)=>{
//         // console.log('first')
//         if(typeof ms !== 'number'){
//             reject('Wrong time');
//             return;
//         }

//         setTimeout(()=>{
//             if(shouldResolve) {
//                 resolve(sec);
//             } 
//             else {
//                 reject(sec);
//             }
          
//         },ms)
//     }
//     )
// }

// delayV2(2000, false).then((seconds) => alert(`done after ${seconds} seconds`)).catch(err => console.log('Error', err));

//-----------------

// 8) Напишіть функцію яка генерує потрібну кількість промісів та записує їх у масив який потім повертає.
// Функція буде мати два аргументи - кількість промісів та першочергову затримку.
// Проміс буду виконуватись успішно за умови якщо його порядковий номер непарний, а якщо парний - проміс буде хибним
// Для кожного промісу пілся першого додавати до затримки пів секунди

// function promiseGenerator (count, delay) {
//     const arrayOfPromises = [];
//     for (let i = 1; i <= count; i +=1) {
//         const promise = delayV2(delay + 500 * (i - 1), i % 2 !== 0, i);
//        arrayOfPromises.push(promise);
//     }
//     return arrayOfPromises;
// }


// function delayV2(ms, shouldResolve, value) {
//     const sec = ms/1000;
//     // console.log('Zero')
//     return new Promise((resolve, reject)=>{
//         // console.log('first')

//         setTimeout(()=>{
//             if(shouldResolve) {
//                 resolve(value);
//             } 
//             else {
//                 reject('Error at ' + value);
//             }
          
//         },ms)
//     }
//     )
// }

// const promisesArray = promiseGenerator(20, 2000);
// promisesArray.forEach((promise) => promise.then((data) => console.log('Succes', data)).catch((err) => console.log('Error',err)));
// console.log(promisesArray);
//-----------------

// 9) Напишіть функцію яка очікує необмежену кількість промісів, чекає коли вони усі виповняться
// та виводить їх значення у консоль у форматі 'Promise 1 was resolved with value 5'

function generatePromises(...promise) {
    Promise.all(promise).then(res => {
        res.forEach((el, index) => {
            console.log(`Promise ${index + 1} was resolved with value ${el}`)
        })
    });
}

// generatePromises(delay(3000), delay(1000), delay(2000))

// function generateRandomNum() {
//     return Math.floor(Math.random() * 5 + 1);
// }
