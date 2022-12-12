// 1. Напишіть функцію isEmpty, яка робить  перевірку об'єкта на порожнечу.

// const data = { a: 1, };
// const data2 = {};

// function isEmpty(data) {
//     // const keysArr = Object.keys(data);
//     // // if (dataArr.length === 0) {
//     // //     return true;
//     // // }
//     // return keysArr.length === 0;
//     return Object.keys(data).length === 0;
// }



// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true
// console.log(isEmpty({a: 1, b: 4, c: 5}))

//-------------------------

// // 2. Напишіть функцію isEqual, яка  порівнює два об'єкти.


// const data = {a: 1, b: 2 }
// const data2 = { a: 1, b: 2};
// const data3 = { a: 1, b: 2, c: 4};
// const data4 = { a: 1, b: 4};

// function isEqual (firstObj, secondObj) {
//     const fisrtObjKeys = Object.keys(firstObj);
//     const secondObjKeys = Object.keys(secondObj);
//     if (fisrtObjKeys.length !== secondObjKeys.length) {
//         return false;
//     }

//     for (const key of fisrtObjKeys) {
//         // if (secondObj.hasOwnProperty(key)) {
//         //     if (firstObj[key] !== secondObj[key]) {
//         //         return false;
//         //     }
            
//         // } else {
//         //     return false;
//         // }
//         if (secondObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]) {
//           continue;            
//         } 

//         return false;
//     }

//     return true;
// }

// console.log(isEqual(data, data2)) //true
// console.log(isEqual(data, data3))// false
// console.log(isEqual(data, data4))// false


// -------------------------

// 3. Напишіть функцію without, яка повертає новий об'єкт без зазначених значень.

// function without (obj, ...withoutKeys) {
//   const withoutNumbers = {};

//   for( const key in obj) {
//     if(!withoutKeys.includes(key)) {
//         withoutNumbers[key] = obj[key];
//     }
//   }
//   return withoutNumbers;
// }
// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data)); // { a: 1 }
//--------------------------

// 4. Напишіть функцію intersection, яка поверхово знаходить перетин ( однакові значення ) об'єктів і повертає об'єкт перетинів.

// function intersection(firstObj, secondObj) {
//   const uniqueObj = {};
//   for (const key in firstObj) {
//     if (secondObj.hasOwnProperty(key) && secondObj[key] === firstObj[key]) {
//       uniqueObj[key] = secondObj[key];
//     }
//   }
//   return uniqueObj;
// }

// const data = { a: 1, b: 1, e: 5, c: 1 };
// const data2 = { c: 1, b: 2, e: 3 };
// console.log(intersection(data, data2)); // { b: 2 }

//--------------------------

// 5. Напишіть функцію getTheTitles, яка поверне масив title з масиву об'єктів books
// ( якщо title не буде в об'єкті - повернути рядок Book {index} without title )


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
//         // title: 'Book3',
//         author: 'Peter'
//     }
// ]
"Book {index} without title"


// const obj = {a: 1, b: 3};

// // obj.a
// // obj.b

// const getTheTitles = function (books) {
//     const titleArr = [];

//     for ( let i=0; i< books.length; i+=1) {
//         if (!books[i].hasOwnProperty("title") ){
//             return `Book ${i+1} without title`
//         }
        
//         titleArr.push(books[i].title)
//     }
//     return titleArr;
// }
// console.log(getTheTitles(books)) // ['Book','Book2']

//------------

// 6. Напишіть функцію findTheOldest, яка поверне ім'я найстаршої людини

// Finds the oldest person
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1946,
    },
]
const CURRENT_YEAR = 2022;

const findTheOldest = function (people) {
    let oldestName = null;
    let oldestAge = 0;
    for (const person of people) {
        const age = person.hasOwnProperty("yearOfDeath") 
        ? person.yearOfDeath - person.yearOfBirth
        : CURRENT_YEAR - person.yearOfBirth;
        // console.log('age', age)
        if (age > oldestAge) {
            oldestName = person.name;
            oldestAge = age;
        }
    }
    // for (const { yearOfDeath, yearOfBirth, name, test } of people) {
    //     const age = yearOfDeath !== undefined
    //     ? yearOfDeath - yearOfBirth
    //     : CURRENT_YEAR - yearOfBirth;
    //     // console.log('age', age)
    //     if (age > oldestAge) {
    //         oldestName = name;
    //         oldestAge = age;
    //     }
    // }
    // for (const { yearOfDeath = CURRENT_YEAR, yearOfBirth, name, test = 'default value' } of people) {
    //     const age = yearOfDeath - yearOfBirth
    //     console.log('age -> ', test)
    //     if (age > oldestAge) {
    //         oldestName = name;
    //         oldestAge = age;
    //     }
    // }
    return oldestName;
}
// console.log(findTheOldest(people))// Answer -> Ray

// Finds the oldest person if someone is still living
const people2 = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
// console.log(findTheOldest(people2)) // Answer -> Ray

// Finds the oldest person if the OLDEST is still living
const people3 = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
// console.log(findTheOldest(people3)) // Answer -> Carly

const people4 = [
    {
        name: "Carly",
        yearOfBirth: 2001,
    },
    {
        name: "Ray",
        yearOfBirth: 2002,
    },
    {
        name: "Jane",
        yearOfBirth: 1998,
    },
]
// console.log(findTheOldest(people4)) // Answer -> Carly


// ----------

// 7. Реалізувати функцію createNewUser для створення об'єкта "користувач".

// 1) Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// 2) При виклику функція повинна запитати  ім'я та прізвище.
// 3) Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
// 4) Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі
// (наприклад, Ivan Kravchenko → ikravchenko).
// 5) Створити користувача за допомогою функції createNewUser(). Викликати функцію користувача getLogin(). Вивести у консоль результат виконання функції.

function askForData(title) {
    return prompt(title);
}

function createNewUser() {
   
    const name = askForData('Enter your name');
    const surname = askForData('Enter your surname');

    return {
        name,
        surname,
        getLogin() { 
            return (this.name[0] + this.surname).toLowerCase();
        },
    }; 

}


// const user = createNewUser();

// console.log('User -> ', user)
// console.log('User login -> ', user.getLogin())



