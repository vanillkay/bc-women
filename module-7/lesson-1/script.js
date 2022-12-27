// 1. Реалізувати перемикання вкладок (таби) на чистому Javascript.
//
// Технічні вимоги:
//
// 1) Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки.
//      При цьому решта тексту має бути прихована. У коментарях зазначено, який текст має відображатися для якоїсь вкладки.

// 2) Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

// 3) Потрібно передбачити, що текст на вкладках може змінюватися і вкладки можуть додаватися і видалятися.
//      При цьому потрібно, щоб функція, написана в джаваскрипті, через такі виправлення не переставала працювати.



const tabs = document.querySelector(".tabs");
const list = document.querySelectorAll(".tabs-content > li");
console.log(list);

let previousTab = document.querySelector('.tabs-title.active');
let prevoiusContent = document.querySelector('.tabs-content > li:not(.hidden)');

console.log(previousTab, prevoiusContent)

const tabConfig = [...list].reduce((acum, element) => {

    const tabName = element.dataset.tab;

    return {...acum, [tabName]: element}

}, {})



function onClickOnTab ({target}) {


    if (target.nodeName !== 'LI') {
        return;
    }
    
    if (previousTab === target) {
        prevoiusContent.classList.toggle('hidden');
        target.classList.toggle('active');
        return;
    }

    // const arr = [...list];

    // const tabContent = arr.find(element => element.dataset.tab === target.textContent);


    const tabContent = tabConfig[target.textContent];

    if (!tabContent) {
        alert(`This tab is not exist!`);
        return;
    }

 
    target.classList.add('active');
    tabContent.classList.remove('hidden');

    if (prevoiusContent !== null) {
        prevoiusContent.classList.add('hidden');
    }

    if (previousTab !== null) {
        previousTab.classList.remove('active');
    }

    previousTab = target;
    prevoiusContent = tabContent;

}

// tabs.addEventListener('click', onClickOnTab)

//-------------

// 2. Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//
// Технічні вимоги:
//
// 1) При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//    Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинна бути створений і додана на сторінку за допомогою Javascript.

//  2) При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола та нова кнпока "Намалювати"
//      При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл випадкового кольору.
//      При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// 3) У вас може виникнути бажання поставити обробник події на кожне коло для його зникнення.
//    Це неефективно, так не треба робити. На всю сторінку має бути лише один обробник подій, який це робитиме.


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const circleTaskEl = document.querySelector('#circle-task');
const btnEl = document.querySelector('.draw-btn');
const rootEl = document.querySelector('#root');

function onBtnClick(event) {
    btnEl.remove();
    const inputEl = document.createElement('input');
    const drawBtnEl = document.createElement('button');
    drawBtnEl.textContent = "Намалювати";
    inputEl.placeholder = 'Діаметр кола';
    inputEl.type = 'number'

    circleTaskEl.append(inputEl, drawBtnEl);

    drawBtnEl.addEventListener('click', () => createCircle(inputEl.value));
}

function createCircle(diametr) {
    console.log('circles', typeof diametr)
    

    if(Number(diametr) < 0){
         return;
    }

    console.log('Go')

    const circles = [];
 
    for (let i = 1; i <= 100; i += 1) {
        const circle = document.createElement('div');
        circle.style.backgroundColor = getRandomHexColor();
        circle.classList.add('circle');
        circle.style.width = `${diametr}px`;
        circle.style.height = `${diametr}px`;
        circle.style.borderRadius = '50%';
        circles.push(circle);
    }
    rootEl.append(...circles);
}

btnEl.addEventListener('click', onBtnClick);

rootEl.addEventListener('click', onCircleClick);

function onCircleClick({target}) {
    if (!target.classList.contains('circle')) {
        return;
    }
    target.remove();
}