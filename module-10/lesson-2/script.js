// https://jsonplaceholder.typicode.com

class ToDoApi {

  static BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  

  constructor(initialPage = 1){
    this.page = initialPage;
  }


  fetchToDoes() {
    const searchParams = new URLSearchParams ({
      _limit:50,
      _page: this.page
    })
    return fetch(`${ToDoApi.BASE_URL}?${searchParams}`)
    .then(response => response.json())
    .catch(error => console.error(error))
    .finally(() => this.page +=1);
  } 

  onToDoUpdate(completed, id){
    return fetch(`${ToDoApi.BASE_URL}/${id}`, {
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

  }
  

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

rootEl.append(listEl, btnLoadMore);

const toDoApi = new ToDoApi();

btnLoadMore.addEventListener('click', onBtnLoadMoreClick);
function onBtnLoadMoreClick () {
  btnLoadMore.disabled = true;
  toDoApi.fetchToDoes().then(data => {
    if (data.length ===0) {
      btnLoadMore.style.display = 'none';
      return;
    }
    const toDoLiElements = createToDoList(data);      
      listEl.insertAdjacentHTML('beforeend', toDoLiElements);
      

  }).finally(() =>{
    btnLoadMore.disabled = false;
    if (toDoApi.page === 2) {
      console.log(toDoApi.page)
      btnLoadMore.textContent = 'Load More';
    }
  }
  )

}






// fetch(`${BASE_URL}?_limit=10`)
// .then(response => response.json()).then(createToDoList)
// .catch(error => console.error(error))
function createToDoList(array = []){
  return array.map(el => 
        `<li data-id = ${el.id}>
        <p>${el.title}</p>
       <input ${el.completed ? 'checked' : ''} type='checkbox'/>
        </li>` ).join('');
  }
//   const listEl = document.createElement('ul') ;
//   listEl.innerHTML = itemEl.join('');
// rootEl.append(listEl)


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

 toDoApi.onToDoUpdate(completed, elId).finally(() => target.disabled = false)

console.log(elId)

}


