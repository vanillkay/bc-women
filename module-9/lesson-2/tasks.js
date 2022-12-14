// 1) Використовуйте Promise.resolve(value), щоб створити Promise, який успішно виконається зі значенням 3.

//----------------

// 2) Використовуйте Promise.reject(error), щоб створити Promise, яки відхилятиметься зі значенням "Boo!"


//----------------

// 3) Допишіть функцію нижче. Використовуйте конструктор Promise, щоб створити Promise, який:
//      виконається, якщо itShouldResolve є true
//      відхилятиметься, якщо itShouldResolve є false

// function shouldResolve(){
//     return Math.random() > 0.5;
// }


//----------------

// 4) Написати функцію delay. Вона повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд, так щоб ми могли додати до нього .then:


// delay(1000).then((seconds) => alert(`done after ${seconds} seconds`));

//-----------------

// 5) Написати функцію яка буде отримувати в параметрах проміс та колбек. Запустити колбек після виконання промісу за допомогою then


//-----------------

// 6) Написати функцію яка буде отримувати в параметрах проміс та два колбеки. Запустити перший колбек після успішного виконання промісу за допомогою then
// або ж запустити другий колбек якщо при виконанні промісу виникла помилка


//-----------------

// 7) Модифікуйте функцію з 4-го завдання щоб вона отримувала в параметри також булеве значення
// ( виповниться проміс чи відхилиться ) та значення яке потрібно повернути якщо проміс виконається успішно


//-----------------

// 8) Напишіть функцію яка генерує потрібну кількість промісів та записує їх у масив який потім повертає.
// Функція буде мати два аргументи - кількість промісів та першочергову затримку.
// Проміс буду виконуватись успішно за умови якщо його порядковий номер непарний, а якщо парний - проміс буде хибним
// Для кожного промісу пілся першого додавати до затримки пів секунди


// Promise.all(promises).then((result) => console.log(result)).catch((result) => console.log(result));

// promises.forEach((promise) => {
//     promise.then(console.log).catch(console.log);
// })

// console.log(promises)
//-----------------

// 9) Напишіть функцію яка очікує необмежену кількість промісів, чекає коли вони усі виповняться
// та виводить їх значення у консоль у форматі 'Promise 1 was resolved with value 5'



