// https://jsonplaceholder.typicode.com

import { ToDoApi } from './to-do-api.js';

// console.log(axios)
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

// _limit: 20
//  _page: 1,

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
const rootEl = document.querySelector('#root');
const listEl = document.createElement('ul') ;
const btnLoadMore = document.createElement('button');
btnLoadMore.textContent = 'Load toDoes';
const container = document.createElement('div');
const input = document.createElement('input');
const btnCreateToDo = document.createElement('button');
btnCreateToDo.textContent = 'Create To Do';
container.append(input, btnCreateToDo);


rootEl.append(container, listEl, btnLoadMore);

const toDoApi = new ToDoApi();

btnLoadMore.addEventListener('click', onBtnLoadMoreClick);
async function onBtnLoadMoreClick () {
  btnLoadMore.disabled = true;
  

  try{

    const fetchData = await toDoApi.fetchToDoes();

    if(fetchData === undefined){
      return;
    }

    if (fetchData.length === 0) {
      btnLoadMore.style.display = 'none';
      return;
    };
    const toDoLiElements = createToDoList(fetchData);
    listEl.insertAdjacentHTML('beforeend', toDoLiElements);

  }finally{
    btnLoadMore.disabled = false;
    if (toDoApi.page === 2) {
      console.log(toDoApi.page)
      btnLoadMore.textContent = 'Load More';
    };
  }
}

async function onbtnCreateToDoClick() {
  // console.log;
  const toDoItem = input.value;
  if (toDoItem.length === 0) {
    return;
  }
  btnCreateToDo.disabled = true;
  try{

    const newTodo = await toDoApi.onToDoCreate(toDoItem);

    if(!newTodo){
      return;
    }
    
    const createNewTask = createToDoList([newTodo]);
    listEl.insertAdjacentHTML('afterbegin', createNewTask);
    input.value = '';


  }finally{
    btnCreateToDo.disabled = false;
  }
  
  


}


btnCreateToDo.addEventListener('click', onbtnCreateToDoClick);


// fetch(`${BASE_URL}?_limit=10`)
// .then(response => response.json()).then(createToDoList)
// .catch(error => console.error(error))
function createToDoList(array = []){
  return array.map(el =>
      `<li data-id = ${el.id}>
        <p>${el.title}</p>
       <input ${el.completed ? 'checked' : ''} type='checkbox'/>
       <button class = "btnDeleteToDo" > Delete To Do </button>
        </li>` ).join('');
}
//   const listEl = document.createElement('ul') ;
//   listEl.innerHTML = itemEl.join('');
// rootEl.append(listEl)


rootEl.addEventListener('click', onListClick);


async function onDeleteTodo(target){

  // console.log(target.closest('li')?.dataset.id);
  const elLi = target.closest('li');
  if (elLi === null) {
    return;
  }
  const id = target.closest('li')?.dataset.id;
  if (id === undefined) {
    return;
  }
  target.disabled = true;
  const isDeleted = await toDoApi.onToDoDelete(id);

  if(isDeleted){
    elLi.remove();
  }
  target.disabled = false;
  
}

function onListClick(event){
  const {target} = event;

  if(target.tagName === 'INPUT'){
    console.log('check work')
    onChekboxChecked(target)
  }

  if(target.classList.contains('btnDeleteToDo')) {
    console.log('delete work')
    onDeleteTodo(target);
  }

}

async function onChekboxChecked(target) {

  if(target.closest('li') === null){
    return
  }

  const elId = target.closest('li')?.dataset.id;

  if(elId === undefined){
    return;
  }

  const completed = target.checked;

  target.disabled = true;

  const isUpdated = await toDoApi.onToDoUpdate(completed, elId);

  if(!isUpdated){
    target.checked = !target.checked
  }

  target.disabled = false;

}


