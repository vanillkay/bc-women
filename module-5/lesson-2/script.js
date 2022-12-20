// 1. Реалізувати клас Employee, в якому будуть наступні властивості - ім'я (name) , вік (age), зарплата (salary).
// Зробіть так, щоб ці властивості заповнювалися при створенні об'єкта.
 //                    та сеттери для нього
// Зробіть клас Programmer, який буде успадкований від класу Employee, у якому буде властивість langs (список мов)
// Для класса Programmer перезапишіть геттер для властивості salary. Хай він повертає властивість salary, помножене на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.
class Employee {
    #salary;
    constructor({name, age, salary}) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }
    get salary(){
        console.log('In parent method return ', this.#salary)
        return this.#salary;
    }
    set salary(newSalary) {
        this.#salary = newSalary; 
    }
}

const worker = new Employee({
    name: `Artem`,
    age: 23,
    salary: 1500,
}) 

// console.log(worker);

// worker.salary = 2000
// console.log(worker.salary)

class Programmer extends Employee {
    // constructor({langs, name, age, salary }) {
    //     super({name, age, salary});
    constructor({langs, ...restObj}) { // restObj = { name, age, salary}
        super(restObj);
        this.langs = langs;
    }

    get salary() {
        // console.log('in child receive ', super.salary)
        return super.salary * 3;
    }
}

const programmer1 = new Programmer({
    name: 'Max',
    age: 30,
    salary: 1500,
    langs: ['js', 'java'],
})

// console.log(programmer1);
// console.log(programmer1.salary);

//-------------------------


// 2. Створіть класс товару Product, у якому будуть такі властивості:
//     - коротка назва; // shortName
//     - повна назва; // fullName
//     - опис // description
//     - ціна; // price
// (має також бути приватний унікальний артикул для товару); // id
//
// А також методи:
//     - розрахунок ціни (приватний, аргумент - кількість товарів, якщо більше 20 - тоді знижка на всю суму - 15 відсотків);
//     - отримання інформації про доставку (метод - приватний, аргументи - адреса, ціна за все замовлення. Ціна за доставку обраховується так –  1% від ціни,
//       якщо ціна більше 2000 - доставка безкоштовно); // {address: 'адреса', price: 0}
//     - друк чеку (приватний, цей метод отримує об'єкт замовлення і виводить в консоль)
//     - замовлення товару ( публічний, розраховую ціну товару,доставки та генерує об'єкт замовлення
//       { адреса, товар, кількість, ціна за доставку, ціна за замовлення}) // aдреса, кількість
//
// class Product {
// #id= Math.random();

//     constructor({shortName, fullName, description, price}) {
//         this.shortName = shortName;
//         this.fullName = fullName;
//         this.description = description;
//         this.price = price;
//     }
// #getPrice (quantity) {
// const priceOFOrder = quantity * this.price;
//     // if (quantity > 20) {
//     //     return priceOFOrder * 0.85;
//     // }
//     // return priceOFOrder;
//     return quantity > 20 ? priceOFOrder * 0.85 : priceOFOrder;
// }

// #getDeliveryInfo (address, priceOFOrder) {
//     return {
//         address,
//         deliveryPrice: priceOFOrder > 2000 ? 0 : priceOFOrder * 0.01,
//     };
// }

// #printCheck (order) {
//     console.log(`Your order -> `, order)
// }


// #getProductInfo(){
//     return {
//         shortName: this.shortName,
//         fullName: this.fullName,
//         description: this.description,
//     }
// }

// orderOfProduct (address, quantity) {
//     const orderPrice = this.#getPrice(quantity);
//     const {address: deliveryAddress, deliveryPrice} = this.#getDeliveryInfo(address, orderPrice);
    
//     // const productInfo = this.#getProductInfo
//     const orderObj = {
//         price: orderPrice,
//         deliveryPrice,
//         address: deliveryAddress,
//         product: this.#getProductInfo(),
//         quantity,
//         totalPrice: orderPrice + deliveryPrice,
//     }
//     this.#printCheck(orderObj);
//     return orderObj;
// }

// }

// const phone = new Product({shortName: "iphone", fullName: "iphone 12s", description: "super new model 64gB", price: 50});
// const order = phone.orderOfProduct("Rivne", 21);
// console.log(order);


//-------------------------

// 3. Створіть клас Vehicle, у якому буде 4 властивості:
// - currentSpeed ( приватна )
// - maxSpeed ( статична )
// - year,
// - country
// - weight
// - метод info() { порожній }


// Створіть додаткові класи
// 1) Car (усі поля від Vehicle + type, name, model, wheels) + методами
// -info (описує поведінку авто),
// -travelTime( обраховує кількість часу яка потрібна для подолання відстані за швидкості currentSpeed,
//        відстань приходить параметром в сам метод )

// 2) AirPlane (усі поля від Vehicle + type, name, engine, private oldEngines) + методи)
// -info (описує поведінку літака),
// -updateEngine ( заміняє поточний двигун літака на той двигун, який прийшов параметром у метод, та додає старий двигун
//                 у приватне поле oldEngines )
// -showAllEngines ( виводить список усіх старих двигунів літака та поточного )


// 3) Ship (усі поля від Vehicle + type, name, engine, color, passengers: {name, age, ticket} [] ( приватне ) ) + методи)
// -info (описує поведінку корабля),
// -addPassenger ( якщо пасажира ще немає на борту – додати його у список passengers, якщо є вивести помилку )


class Vehicle {
    #currentSpeed;
    static maxSpeed = 400;

    constructor ({ year, country, weight, currentSpeed}) {
        this.year = year;
        this.country = country;
        this.weight = weight;
        this.#currentSpeed = currentSpeed;
    }

    info() {
    }

    get currentSpeed () {
        return this.#currentSpeed;
    }

    set currentSpeed (newSpeed) {
        this.#currentSpeed = newSpeed;
    }
}

class Car extends Vehicle {

    constructor ({type, name, model, wheels, ...rest}) {
        super(rest);
        this.type = type;
        this.name= name;
        this.model = model;
        this.wheels = wheels;
    }

    info() {
        console.log( "car ride");
    }
    
    travelTime (km) {
        // console.log(super.currentSpeed);
        return  km / super.currentSpeed;
    }

    
}

// const car = new Car ( {
//     type: "Грузова",
//     name: "Audi",
//     model: "Q7",
//     wheels: "4",
//     year: 2020,
//     country: "USA",
//     weight: 4,
//     currentSpeed: 125,
// })



// console.log(car);


class AirPlane extends Vehicle {
    #oldEngines = [];

    constructor({ type, name, engine, ...rest }) {
        super(rest);
        if (super.currentSpeed > Vehicle.maxSpeed) {
            alert(`This plane should has current speed not more than ${Vehicle.maxSpeed}!`)
            super.currentSpeed = Vehicle.maxSpeed;
        }
        this.type = type;
        this.name = name;
        this.engine = engine;
    }

    info() {
        console.log('Plane flies :)');
    }

    updateEngine(newEngine) {
        this.#oldEngines.push(this.engine);
        this.engine = newEngine;
    }

    showAllEngines() {
        console.log(`Old engines: ${this.#oldEngines.join(', ')}, Current engine: ${this.engine}`);
    }
}

// const Cessna = new AirPlane({
//     year: 2018,
//     country: 'USA',
//     weight: 400,
//     currentSpeed: 500,
//     type: "Jet",
//     name: 'GS-350',
//     engine: 'Rbg-400',
// })

// Cessna.updateEngine("hjy-550");
// Cessna.updateEngine("Fds-5800");
// Cessna.updateEngine("Lni-777");

// Cessna.showAllEngines();
// console.log(Cessna.info())
//-------------------------
// 3) Ship (усі поля від Vehicle + type, name, engine, color, passengers: {name, age, ticket} [] ( приватне ) ) + методи)
// -info (описує поведінку корабля),
// -addPassenger ( якщо пасажира ще немає на борту – додати його у список passengers, якщо є вивести помилку )


class Ship extends Vehicle {
    #passengers = [];
    constructor ({type, name, engine, color, ...rest}) {
        super(rest);
        this.type = type;
        this.name = name;
        this.engine = engine;
        this.color = color;
    }

    info () {
        console.log("Ship can sale")
    }

    addPassenger(newPassenger) {
       const exisitingPassenger = this.#passengers.find(({ticket}) => ticket === newPassenger.ticket);
        if (exisitingPassenger) {
           return alert(`This passenger already exists`);
        }
        this.#passengers.push(newPassenger);
    }
}

const dolfin = new Ship({
    type: "Човен",
    name: "Agata",
    engine: "Rbg-400",
    color: "black",
    year: 2020,
    country: "Italy",
    weight: 1,
    currentSpeed: 80,

})

// dolfin.addPassenger({name: "Sasha", age: 30, ticket: 45});
// dolfin.addPassenger({name: "Oleg", age: 20, ticket: 40});
// dolfin.addPassenger({name: "Olya", age: 32, ticket: 11});
// dolfin.addPassenger({name: "Alex", age: 32, ticket: 40});

// console.log(dolfin);