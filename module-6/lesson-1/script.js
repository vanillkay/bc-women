
// Task 1 
// Прочитайте кількість вкладених  li у список з класом outer, у список з класом inner та загальну клількість li на строінці
// const listOuterEl = document.querySelector('.outer')
// console.log(`Outer ul element contains ${listOuterEl.children.length} li`)
// const listInnerEl = document.querySelector('.inner')
// console.log(`Inner ul element contains ${listInnerEl.children.length} li`)
// // console.log(`We have ${listInnerEl.children.length + listOuterEl.children.length}  li elements on the page`)
// const allLiEl = document.querySelectorAll('li')
// console.log(`We have ${allLiEl.length}  li elements on the page`)

//-----------
// Task 2
// Написати функцію, яка буде приймати один аргумент – рядок з нікнеймом в instagram ) і генерувати інформаційний 
// блок для відкриття акаунту. Блок потрібно ставити в елемент з класом inst-info

/* <p>Visit instagram of <span class="bold">zelenskiy_official</span></p> */
// <a href="https://www.instagram.com/zelenskiy_official/">Open page</a> 

//<p>Visit instagram of <span class="bold">zelenskiy_official</span></p>
// <a href="https://www.instagram.com/zelenskiy_official/">Open page</a> 
// const instInfoEl = document.querySelector('.inst-info');
// console.log(instInfoEl.children.length)
// const createInfo = (nickname) => {
//     // instInfoEl.innerHTML = '';
//     if(instInfoEl.children.length !== 0) {
//         instInfoEl.innerHTML = ''
//     }
//     const spanNickEl = document.createElement('span');
//     spanNickEl.textContent = nickname;
//     spanNickEl.classList.add('bold');
//     // console.log(spanNickEl);

//     const visitEl = document.createElement('p');
//     visitEl.textContent = 'Visit instagram of '
//     visitEl.insertAdjacentElement("beforeend", spanNickEl)
//     console.log(visitEl);

//     const instLinkEl = document.createElement('a');
//     instLinkEl.href = `https://www.instagram.com/${nickname}`;
//     instLinkEl.textContent = 'Open page';
//     console.log(instLinkEl);

//     instInfoEl.append(visitEl, instLinkEl);

// }


// const instInfoEl = document.querySelector('.inst-info');
// const createInfoV2 = (nickname) => {
//     // const returnInfo = `
//     //     <p>Visit instagram of <span class="bold">${nickname}</span></p>
//     //     <a target="_blank" href="https://www.instagram.com/${nickname}/">Open page</a>`
//     // instInfoEl.innerHTML = returnInfo

// instInfoE.innerHTML = `
//     <p>Visit instagram of <span class="bold">${nickname}</span></p>
//     <a target="_blank" href="https://www.instagram.com/${nickname}/">Open page</a>
//     `
// }


// console.dir(document.createElement('span'))



// createInfoV2('misha.k.ua')


// Task 3
// Створити на основі масиву список з назвами міст. Додавати інлайн стиль кольору ( жовтий ) для міст, які
// не є столицею, а для столиці ставити blue. Cписок потрібно вставити у елемент з класом .cities


// 
/* <ul >
<li style="color: blue">Odessa</li>
<li style="color: blue">Rivne</li>
<li style="color: green">Kyiv</li>
<li style="color: blue">Kharkiv</li>
</ul> */
// document.body.style.backgroundColor = 'grey';

// const cities = [
//     {name: 'Lviv', capital: false}, // <li>Lviv</li>
//     {name: 'Kharkiv', capital: false},
//     {name: 'Odessa', capital: false},
//     {name: 'Kyiv', capital: true},
//     {name: 'Rivne', capital: false},
//     {name: 'Zhytomyr', capital: false},
// ]

// const citiesList = document.createElement('ul');
// const citiesElements = cities.map(el => {
//     const cityItem = document.createElement('li');
//     cityItem.style.color = el.capital ? 'yellow' : 'blue';
//     cityItem.textContent = el.name;
//     return cityItem;
// });

// const citiesList = document.createElement('ul');
// const citiesElements = cities.map(({ name, capital }) => {
//     const cityItem = document.createElement('li');
//     cityItem.style.color = capital ? 'yellow' : 'blue';
//     cityItem.textContent = name;
//     return cityItem;
// });

// console.log(citiesElements);

// citiesList.append(...citiesElements);
// const citiesListEl = document.querySelector('.cities');
// citiesListEl.append(tiesList)


// Task 4
// Провалідувати img, які знаходяться у li, якщо немає src - за замовчуванням ставити https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg
// якщо немає alt – unknown

const elemLi = document.querySelectorAll("li");

elemLi.forEach(element => {
   const img = element.querySelector("img");
   if ( !img.hasAttribute('src')) {
    // img.setAttribute('src','https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg');;
   }
   if ( !img.hasAttribute('alt')) {
    // img.setAttribute('alt','unknown');
    img.alt = 'unknown'
   }
});

;

