// 1. Напишіть функцію isEmpty, яка робить  перевірку об'єкта на порожнечу.

// const data = { a: 1, };
// const data2 = {  };

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

//-------------------------

// // 2. Напишіть функцію isEqual, яка  порівнює два об'єкти.


// -------------------------

// 3. Напишіть функцію without, яка повертає новий об'єкт без зазначених значень.


// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 }
//--------------------------

// 4. Напишіть функцію intersection, яка поверхово знаходить перетин ( однакові значення ) об'єктів і повертає об'єкт перетинів.

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }

//--------------------------

// 5. Напишіть функцію getTheTitles, яка поверне масив title з масиву об'єктів books
// ( якщо title не буде в об'єкті - повернутирядок Book {index} without title )


// const books = [
//     {
//         title: 'Book',
//         author: 'Joe'
//     },
//     {
//         title: 'Book2',
//         author: 'Ann'
//     },
//     {
//         author: 'Peter'
//     }
// ]

// getTheTitles(books) // ['Book','Book2']

//------------

// 6. Напишіть функцію findTheOldest, яка поверне ім'я найстаршої людини

// Finds the oldest person
// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]
// Answer -> Ray

// Finds the oldest person if someone is still living
// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 2018,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]
// Answer -> Ray

// Finds the oldest person if the OLDEST is still living
// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1066,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]
// Answer -> Carly

// 4. Реалізувати функцію createNewUser для створення об'єкта "користувач".

// 1) Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// 2) При виклику функція повинна запитати  ім'я та прізвище.
// 3) Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
// 4) Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі
// (наприклад, Ivan Kravchenko → ikravchenko).
// 5) Створити користувача за допомогою функції createNewUser(). Викликати функцію користувача getLogin(). Вивести у консоль результат виконання функції.
