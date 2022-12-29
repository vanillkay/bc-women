import lsMethods from './storage.js'


const slider = document.querySelector('#slider');
const THEME_KEY = 'currentTheme';
const DARK_THEME = 'theme-dark';
const LIGHT_THEME = 'theme-light';


function onSliderChange () {
const newTheme =  slider.checked ?  DARK_THEME : LIGHT_THEME;
document.body.className = newTheme;

lsMethods.save(THEME_KEY, newTheme);

// if (slider.checked) {
//     document.body.className = 'theme-dark';
// }
// else {
//     document.body.className = 'theme-light'
// }
}


function updateTheme () {
  const savedTheme = lsMethods.load(THEME_KEY);

  if (savedTheme === DARK_THEME) {
    document.body.className = savedTheme;
    slider.checked = true;
  }

}


updateTheme();


// (function () {
//     const savedTheme = lsMethods.load(THEME_KEY);

//     if (savedTheme === DARK_THEME) {
//         document.body.className = savedTheme;
//         slider.checked = true;
//         console.log('Check')
//     }
// })()

// ((param) => {
//     console.log(param);
//     const savedTheme = lsMethods.load(THEME_KEY);

//     if (savedTheme === DARK_THEME) {
//         document.body.className = savedTheme;
//         slider.checked = true;
//         // console.log('Check')
//     }

// })('hello')

// IIFE 


slider.addEventListener('change', onSliderChange)
// light - 'theme-light'
// dark - 'theme-dark'

// Створити скрипт для перемикання теми. Якщо чекбокс у стані чекед – ставити клас на body
// theme-dark ( темна тема ), а якщо чекбокс перевели у "вимкненний" стан - ставити клас theme-light

// Реалузувати збереження обраної теми до локального сховища ( localStorage ).
// При завантаженні сторінки зчитуйте збережену тему ( якщо вона є ) та примініть цю темо до сторінки
