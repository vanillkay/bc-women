// https://jsonplaceholder.typicode.com

// _limit: 20

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
const rootEl = document.querySelector('#root');

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(`${BASE_URL}?_limit=10`)
.then(response => response.json()).then(createToDoList)
.catch(error => console.error(error))
function createToDoList(array = []){
  const itemEl =  array.map(el => 
        `<li data-id = ${el.id}>
        <p>${el.title}</p>
       <input ${el.completed ? 'checked' : ''} type='checkbox'/>
        </li>` )
  const listEl = document.createElement('ul') ;
  listEl.innerHTML = itemEl.join('');
rootEl.append(listEl)
}

rootEl.addEventListener('click', onChekboxChecked);

function onChekboxChecked(event){
const {target} = event;
if(target.tagName !== 'INPUT'){
    return
}
if(target.closest('li') === null){
    return
}

 const elId = target.closest('li')?.dataset.id;

 if(elId === undefined){
  return;
 }

 const completed = target.checked;

 target.disabled = true;

onToDoUpdate(completed, elId).finally(() => target.disabled = false)

console.log(elId)

}

function onToDoUpdate(completed, id){
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
           completed,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

};

