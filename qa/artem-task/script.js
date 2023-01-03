// Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.
// //Object example
// {
//     title: "Interceptor",
//     genreIDs: [
//         28,
//         53,
//         12,
//     ],
//     genreNames: [
//         "Action",
//         "Thriller",
//         "Adventure"
//     ]
// }


const root = document.querySelector('#root');

const films = [{
       title: "Interceptor",
       genreIDs: [
           28,
           53,
           12,
       ],
   },
   {
       title: "Fantastic Beasts: The Secrets of Dumbledore",
       genreIDs: [
           14,
           12,
           28
       ],
   },
   {
       title: "Last Seen Alive",
       genreIDs: [
           28,
           53
       ],
   },
   {
       title: "Jurassic World Dominion",
       genreIDs: [
           878,
           28,
           12,
           53
       ],
   },
];


const genresInfo = {
    genres: [{
        id: 28,
        name: "Action"
    }, {
        id: 12,
        name: "Adventure"
    }, {
        id: 14,
        name: "Fantasy"
    }, {
        id: 878,
        name: "Science Fiction"
    }, {
        id: 53,
        name: "Thriller"
    }, {
        id: 10752,
        name: "War"
    }, {
        id: 37,
        name: "Western"
    }]
}


const genresObject = genresInfo.genres.reduce((acum, {id, name}) => ({...acum, [id]: name }), {})

console.log('maped genres', genresObject)

 const mappedfilms = films.map(film => {
    const genresNames = film.genreIDs.map(genreId => {
        // V1
        // const genreObject = genresInfo.genres.find(({ id }) => id === genreId); O(arr.length)

        // if(!genreObject){
        //     return 'Unknown genre';
        // }
        // console.log('genre object', genreObject)
        // return genreObject.name;


        // V2

        // const genreName = genresObject[genreId]; // O(1)

        return genresObject[genreId] || 'Unknown genre';
    })

    return {...film, genresNames}
 })

 console.log('mapped', mappedfilms)

 insertFilms(mappedfilms)

 function insertFilms(films){
    const listElement = document.createElement('ol');

    // films.forEach(film => {
    //     const liElement = document.createElement('li');

    //     liElement.textContent = `${film.title}: ${film.genresNames.join(', ')}`;

    //     listElement.append(liElement)
    // })

    const liElements = films.reduce((acum, film) => {
        return `${acum}<li>${film.title}: ${createGenresList(film.genresNames)}.</li>`
    }, "")

    listElement.innerHTML = liElements;
    root.append(listElement)
 }

 function createGenresList(genres){
    if(genres.length > 2){
        return `${genres.slice(0,2).join(", ")}, Others`
    }
    return `${genres.join(', ')}`

    // return `${genres.slice(0,2).join(", ")}${genres.length > 2 ? ', Others' : ''}`
 }


 ////  Expected result
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'
