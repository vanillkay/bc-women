// 1) Потрібно створити інтервал, який виводить у консоль кількість секунд, що минули з моменту запуску програми.
//
// "Минуло: 1 сек."
//
// "Минуло: 2 сек." ..... і так далі

//--------------------

// 2) Допишіть програму з першого завдання так, щоб вона зупинялася при досягненні 5 секунд

//--------------------

// 3) Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з from і закінчуючи to.


//--------------------

// 4) Напишіть функію яка буде зчитувати з інпута введену дату,
// та виводити на сторінку різницю секунд хвилин годин днів віддосно сьогоднішної дати



// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//
//     return { days, hours, minutes, seconds };
//   }


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

