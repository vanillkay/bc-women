// Розробити міні-додаток по трансформуванню тексту

// За допомогою бібліотеки voca (https://vocajs.com/), а саме методами для роботи з регістром ( Case )
// створіть перетворення введеного тексут в потрібний кейс

// При кліку на кнопку ви маєте прочитати значення інпуту, перевести його в потрібний кейс
// за допомогою одного з методів бібліотеки voca (camelCase, kebebCase ...) та записати результат у span,
// який знаходиться поруч з натиснутою кнопкою ( наступний сусід )

import voca from 'voca';

const inputEl = document.querySelector('#str')
const buttonsEl = document.querySelector('.controls')

buttonsEl.addEventListener('click', onButtonClick)
function onButtonClick({ target }) {
    if (target.nodeName !== "BUTTON") {
        return;
    }
    const result = target.nextElementSibling;
    const value = inputEl.value;
    const neededCase = target.dataset.case;

    // voca[target.dataset.case] === function
    // console.log(!neededCase)
    // if(!(neededCase in voca)){
    //     alert("Error not valid case!!!")
    //     return;
    // }

    // result.textContent = voca[neededCase](value)
    // switch (target.dataset.case) {
    //     case "camel":
    //         result.textContent = voca.camelCase(value);
    //         break;
    //     case "kebab":
    //         result.textContent = voca.kebabCase(value);
    //         break;
    //     case "snake":
    //         result.textContent = voca.snakeCase(value);
    //         break;
    //     case "swap":
    //          result.textContent = voca.swapCase(value);
    //         break;
    //     case "lowercase":
    //          result.textContent = voca.lowerCase(value);
    //         break;
    //       case "uppercase":
    //          result.textContent = voca.upperCase(value);
    //         break;
    //     default: alert("Error not valid case!!!")
    // }

    const transformedText = transform(target.dataset.case, inputEl.value);


    if(transformedText === null){
        alert("Error not valid case!!!");
        return;
    }

    result.textContent = transformedText;
    
}

function transform(neededCase, value){
    switch (neededCase) {
        case "camelCase":
            return voca.camelCase(value);
        case "kebabCase":
            return voca.kebabCase(value);
        case "snakeCase":
            return  voca.snakeCase(value);
        case "swapCase":
             return voca.swapCase(value);
        case "lowerCase":
            return  voca.lowerCase(value);
          case "upperCase":
             return voca.upperCase(value);
        default: return null;
    }
}




