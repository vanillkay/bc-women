// Створити таблицю, при натисканні на комірки якої вони змінюватимуть колір.
//
// Технічні вимоги:
//
//  1) Створити інпут для введення розміру поля ( x на x ).
//  2) При події onChange малювати таблицю з білими клітинками за розміром з інпуту. 
//  3) Зробіть так, щоб таблиця малювались лише після 1 секунди по завершенню введення
//  4) При натисканні на білу клітинку вона повинна змінювати колір на чорний.
//          При натисканні на чорну клітинку вона повинна змінювати колір назад на білий.
//  5) Сама таблиця повинна бути не вставлена у вихідний HTML-код, а згенерована і додана в DOM сторінки за допомогою Javascript.
//  6) При натисканні на будь-яке місце документа поза таблицею, всі кольори клітин повинні змінитися на протилежні (підказка: необхідно поставити Event Listener на <body>).
//  7) Щоб змінити кольори всіх клітин одночасно, не потрібно обходити їх у циклі. Якщо помічати натиснуті клітини певним класом, то перефарбувати їх всі одночасно можна однією дією - змінивши клас на самій таблиці.

const rootContainer = document.querySelector('#root');

const inputTheNumber = document.createElement('input');
inputTheNumber.placeholder = 'Enter the number';
inputTheNumber.type = 'number';
inputTheNumber.max = 50;
rootContainer.append(inputTheNumber);

inputTheNumber.addEventListener('input', _.debounce(createTable, 1000));

document.body.addEventListener('click', changeColor);

let previousTable = null;

function createTable(event) {
    // console.log(event.target.value);
    const tableSize = Number(event.target.value);
    if (tableSize <= 0 || tableSize > 50) {
        alert('You entered wrong number!');
        return;
    }
    // console.log('yes');
    const tableEl = document.createElement('table');
    for (let i = 1; i <= tableSize; i += 1) {
        const tableRowEl = document.createElement('tr');

        const cells = Array.from({length: tableSize}, () => {
            const tableColEl = document.createElement('td');
            tableColEl.classList.add('cell');
            return tableColEl;
        })
        tableRowEl.append(...cells)
        // for (let j = 1; j <= tableSize; j += 1) {
        //     const tableColEl = document.createElement('td');
        //     tableColEl.classList.add('cell');
        //     tableRowEl.append(tableColEl);
        // }
        tableEl.append(tableRowEl);
    }

    // if(previousTable === null){
    //     document.body.addEventListener('click', changeColor);
    // }

    if (previousTable !== null) {
        previousTable.remove();
    } 
    
    rootContainer.append(tableEl);
    previousTable = tableEl;

}



function changeColor(event) {
    
    
    if (event.target.tagName === "TD") {
        event.target.classList.toggle('black')
    }

    if (event.target.tagName === "BODY" && previousTable !== null) {
       previousTable.classList.toggle('reverse')
    }
    console.log(event.target)
}
