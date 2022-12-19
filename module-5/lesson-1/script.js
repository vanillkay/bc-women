// 1. Використайте в методі says ключове слово this
// const call = {
//     caller: "mom",
//     says: function() {
//         console.log(`Hey, ${this.caller} just called.`);
//     }
// };

// call.says();


//-----------------


// 2. Пофіксіть виклик метода says


// const writeHello = function(){console.log(`Hello ${this.caller}`)}

// const call = {
//     caller: "mom",
//     says: writeHello
// }

// call.says()


//-----------------


// 3. Э функція, викличте її в правильному контексті

function showFullName() {
    alert( this.firstName + " " + this.lastName );
}

const person = {
    firstName:"Mango",
    lastName:"Poly",
}


//showFullName.call(person); // ?
// const result = showFullName.bind(person); 
// result();

// showFullName.bind(person)()

//-----------------

// 4. Виправте функцію, що втрачає "this"

// function askPassword(ok, fail) {
//     const password = prompt("Password?", '');
//     // console.log('Inside', this)
//     if (password === "1") {
//         ok();
//     }else {
//         fail();
//     }
// }


// const user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };


// askPassword(() => user.loginOk(), () => user.loginFail());
// askPassword(function(){ user.loginOk(); }, function(){ user.loginFail(); })
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));


//-----------------

// 5. Що потрібно передати у виклик функції askPassword у коді нижче, щоб вона могла викликати
// функцію user.login(true) як ok та функцію user.login(false) як fail?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "1") {
//         ok() // user.login(true)
//     } else {
//         fail() // user.login(false)
//     };
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };


// askPassword( () => user.login(true), () => user.login(false) ); // ?
// askPassword(user.login.bind(user, true), user.login.bind(user, false) ); 

//-----------------

// 6. Є функція sum, яка підсумовує всі елементи масиву:

// function sum(arr) {
//     return arr.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// }

// console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)

// Створіть аналогічну функцію sumArgs(), яка підсумовуватиме всі свої аргументи:
// Для вирішення застосуйте метод reduce до arguments, використовуючи spread, call, apply або "позичення методу".


//-----------------
function sumArgs() {
    // console.dir(arguments);
    // const array = [...arguments];
    // console.dir(array);
    // return array.reduce((acc, elaement) => acc + element,0)

    // console.log(Array.prototype.reduce(() => {}, 0))
    // return Array.prototype.reduce.call(arguments, (acc, element) => acc + element, 0)
    // return [].reduce.call(arguments, (acc, element) => acc + element, 0)
    // return [].reduce.apply(arguments, [(acc, element) => acc + element, 0])

    // arguments.reduce = Array.prototype.reduce

    Object.setPrototypeOf(arguments, Array.prototype)

    console.log(arguments)
    return arguments.reduce((acc, element) => acc + element, 0)

}

// const a = [1]


// const b = [2]


// console.log('First obj -> ', a)
// console.log('Second obj -> ', b)


console.log( sumArgs(1, 2, 3) ); 