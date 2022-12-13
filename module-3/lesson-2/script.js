// 1. Даний масив. Запишіть перший елемент цього масиву в змінну elem1, другий - в змінну elem2, третій - в змінну elem3,
// а всі інші елементи масиву - змінну arr

const newArr = [1,2,3,4,5,6,7];
const [elem1, elem2, elem3, ...args] = newArr

// console.log(elem1);
// console.log(elem2);
// console.log(elem3);
// console.log('Rest element', args)

//--------------------------


// 2. Даний об'єкт obj. Запишіть відповідні значення змінні name, surname за допомогою деструктуризації.
// Зробіть так, щоб, якщо якесь значення не задано - воно набирало наступного значення за замовчуванням:
// {name: 'Анонім', surname: 'Анонімович', age: '? років'

// const obj = {
//     name: 'John',
//     surname: 'Smith',
//     age: 20,
// }

// const { name = 'Анонім', surname = 'Анонімович', age = '? років'} = obj;



// console.log(name, surname, age);

//--------------------------

// 3. Перепишіть приклад використовуючи деструктуризацію

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 10,
//         english: 11,
//         science: 9
//     }
// };
// //
// //
// function displaySummary(student) {
//     const { name, age, scores: { maths = 0, english = 0, science = 0 } } = student;

//     console.log(`Hello, ${name}`);
//     console.log(`Age is ${age}`);
//     console.log(`Your Maths score is ${maths}`);
//     console.log(`Your English score is ${english}`);
//     console.log(`Your Science score is ${science}`);
// }

// displaySummary(student);
// Hello, John Doe
// Your Maths score is 10
// Your English score is 11
// Your Science score is 9

//--------------------------



// 4. Проведіть операції з деструктуризації масиву
// 1) Перемістіть значення масиву rgb в окремі змінні red, green, blue та виведіть їх у консоль ( R: red, G: green, B: blue )
// 2) Додайте дефолтне значення 255 для red та blue
// 3) Пропустіть перші два елементи та призначте лише третій елемент змінній blue

// const rgb = [125, 250, 140];

// // const [red = 255, green = 255, blue = 255] = rgb;
// // console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// const [ , , blue] = rgb;

// console.log(`Blue ${blue}`)


//--------------------------

// 5. Поміняйте значення двох змінних між собою за допомогою масивів та деструктуризації

let a = 10;
let b = 5;
// const array = [a, b];
//10  5
// [ b,a ] = array
[ b,a ] = [a, b ]; // 10, 5


// let temp = a;

// a = b;
// b = temp;


// function change(...args) {
 
  
// }
// change(a, b);
// console.log(a)// 5
// console.log(b)// 10


//--------------------------

// 6.Напишіть функцію, яка створює змінні з ім'ям пірата ,
// а також – його статусом серед інших піратів та виводь їх в консоль. Якщо статусу немає – він за замовчуванням "матрос"

const pirates = "Джон; Джек капітан; Енко кухар; Вася юнга; Інгрід";
const findPirate = function (piratesString) {
    const piratesArr = piratesString.split('; ');
    console.log(piratesArr);
 for ( const pirate of piratesArr) {
 const [pirateName, pirateStatus = 'матрос'] = pirate.split(' ');
//  console.log(pirateSeparete);

 console.log(`pirate name = ${pirateName}, pirate status = ${pirateStatus}`);
 }
}

// findPirate(pirates);
// Приклад виводу у консоль:
// Джон - матрос
// Джек - капітан
// Енко - кухар
// Вася - юнга
// Інгрід - матрос

//--------------------------

// 7. Напишіть функцію, яка створює об'єкт.
// Як аргументи вона приймає в себе ім'я, прізвище, і перелік
// рядків формату "ім'яВластивості: значення". Їх може бути багато.
//
// Приклад роботи:
const user = createObject("Іван", "Іванів", "wife: Анна", "car: Toyota", "age: 20");
 console.log(user);
/*
{
    name: "Іван",
    lastName: "Іванів",
    wife: "Анна",
    car: "Toyota",
}
*/
// Використовуйте оператор rest та дестрктуризацію масиву

function createObject(name, lastName, ...args) {
    const user = {
        name,
        lastName,
    }

    // console.log('args', args)

    for (const element of args) {
        const [key, value] = element.split(": ");// [...]
        console.log("key -> ", key, "\nValue -> ", value)
        user[key] = value;
    }
    return user;


    // const params = {};

    // for (const element of args) {
    //     const [key, value] = element.split(": ");// [...]
    //     console.log("key -> ", key, "\nValue -> ", value)
    //     params[key] = value;
    // }

    // // console.log(params)

    
    // return {
    //     name,
    //     lastName,
    //     ...params,
    // };
}


//--------------------------

// 8. У вас є 2 масиви - об'єднайте їх вміст (через функцію) в один totalCars максимально елегантним способом

// - другий елемент array2
// - елементи array1 без першого елемента
// - Перший елемент array1
// - елементи array2 без другого елемента

// ['другий елемент array2', 'елементи array1 без першого елемента', 'Перший елемент array1', 'елементи array2 без другого елемента']
// ["Bugatti", "Ford", "Alfa Romeo", "Audi", "BMW", "Cadillac", "Lexus", "Chevrolet", "Ferrari"]

// const johnCars = ["Cadillac", "Ford", "Alfa Romeo", "Audi", "BMW"];
// const maryCars = ["Lexus", "Bugatti", "Chevrolet", "Ferrari"];

// function createTotalCars(firstArray, secondArray) {
//     const [firstElSecondArr, secondElSecondArr, ...lastElSecondArr] = secondArray;
//     const [firstElFirstArr, ...firstArrElements] = firstArray;
//     return [secondElSecondArr, ...firstArrElements, firstElFirstArr, firstElSecondArr, ...lastElSecondArr];
// }

// console.log(createTotalCars(johnCars, maryCars))

//--------------------------


//  9. Наишіть функцію, яка приймає безліч аргументі, далі створити два масиви [перший аргумент, останній аргумент]
// та другий масив [другий аргумент, передостанній аргумент] та третій масив [третій агрумент, перед-передостанній аргумент] -> об'єднати їх в один масив та повренути
// [1,2,3,4,5,6,7,8]
// 1,2,3       8,7,6

// [8,7,6,5,4,3,2,1]
// 8,7,6

// function makePairs(...args) {
//  const [ el1, el2, el3] = args;
//  const [last1, last2, last3] = [...args].reverse();

// // const last1 = args[args.length - 1]
// // const last2 = args[args.length - 2]
// // const last3 = args[args.length - 3]


//  const firstPair = [el1, last1];
//  const secondPair = [el2, last2];
//  const thirdPair = [el3, last3];
//  return [...firstPair, ...secondPair, ...thirdPair];
// }

// console.log(makePairs(1,2,3,4,5,6,7,8)) // [1,8,2,7,3,6]