// 1) Потрібно створити інтервал, який виводить у консоль кількість секунд, що минули з моменту запуску програми.
//
// "Минуло: 1 сек."
//
// "Минуло: 2 сек." ..... і так далі

//--------------------
// let count = 0;
// setInterval (() => {
//    count += 1;
//     console.log(`Минуло: ${count} секунд`)
// },1000);

// 2) Допишіть програму з першого завдання так, щоб вона зупинялася при досягненні 5 секунд
let count = 0;
// const intervalId = setInterval (function() {
//    count += 1;
//     console.log(`Минуло: ${count} секунд${getSecondsEnd(count)}`);
//     // if (count === 5) {
//     //     clearInterval(intervalId);
//     // }
// },1000);


function getSecondsEnd(seconds){
    // if(seconds === 1){
    //     return 'а'
    // }

    // if(seconds > 1 && seconds < 4){
    //     return 'и'
    // }

    // return ''


    const ends = new Map([
        [true, ''],
        [seconds > 1 && seconds < 5, 'и'],
        [seconds === 1, 'a']
    ])

    return ends.get(true)
}


let id = 0;


function interal(){
    console.log(id)
}



// setTimeout (()=> {
// clearInterval(intervalId)
// },5000);
 
//--------------------

// 3) Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з from і закінчуючи to.

function printNumbers(from, to) {
    let count = from;
    const intervalID = setInterval(() => {
        console.log(`${count}`);
        
        if (count === to) {
            clearInterval(intervalID);
        }
        count += 1;
       
    }, 1000);

}

// printNumbers(5, 10);
// printNumbers(5, 10);

//--------------------

// 4) Напишіть функію яка буде зчитувати з інпута введену дату,
// та виводити на сторінку різницю секунд хвилин годин днів віддосно сьогоднішної дати

const inputEl = document.querySelector('[type="date"]');
const divEl = document.querySelector('#root')
// inputEl.addEventListener('change', onInputChange)

function onInputChange(event) {
    
    
    const selectedDate = new Date(event.target.value);
    
    
    const diff = selectedDate - Date.now();
    if (diff < 0) {
        alert("помилка")
        return;
    }
    const {days, hours, minutes, seconds} = convertMs(diff);
    const htmlcontent = `<span>днів ${days} </span><span>годин ${hours} </span><span>хвилин ${minutes} </span><span>секунд ${seconds} </span>`;
    divEl.innerHTML= htmlcontent;
}

// YYYY-MM-DD

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }


//--------------------

// 5) Реалізувати програму, що показує циклічно різні картинки.

// Технічні вимоги:
//
// При запуску програми на екрані має відображатись перша картинка.
// Через 5 секунд замість неї має бути показано друге зображення.
// Ще через 5 секунд – третя.
// Ще за 5 секунд - четверта.
// Після того, як з'являться всі картинки - цей цикл має розпочатися наново.
// При запуску програми десь на екрані з'явиться кнопка з написом Stop.
// Після натискання на кнопку Stop цикл завершується, на екрані залишається показаною та картинка,
//      яка була там при натисканні кнопки.
// Поруч із кнопкою Stop має бути кнопка Restart показ,
//      при натисканні якої цикл продовжується з тієї картинки, яка в даний момент показана на екрані.
// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

const imagesRef = [...document.querySelectorAll('.image-to-show')];
const stopBtnRef = document.querySelector('#stop');
const restartBtnRef = document.querySelector('#restart');



stopBtnRef.addEventListener('click', onStopBtnClick);
restartBtnRef.addEventListener('click', onRestartBtnClick);

imagesRef.slice(1).forEach(el => el.classList.add('hidden'));

let activeImageIndex = 0;
let activeIntervalId = startIntervalId();

function onStopBtnClick() {
    clearInterval(activeIntervalId);
    stopBtnRef.disabled = true;
    restartBtnRef.disabled = false;
}

function onRestartBtnClick() {
    activeIntervalId = startIntervalId();
}

function startIntervalId() {
    stopBtnRef.disabled = false;
    restartBtnRef.disabled = true;
    return setInterval(() => {
        imagesRef[activeImageIndex].classList.add('hidden');

        if (activeImageIndex === imagesRef.length - 1) {
            activeImageIndex = 0;
        } else {
            activeImageIndex += 1;
        }

        imagesRef[activeImageIndex].classList.remove('hidden');
     
    }, 2000)
}

    