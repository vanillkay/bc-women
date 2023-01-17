'use strict';



export class ToDoApi {

    static BASE_URL = 'https://jsonplaceholder.typicode.com/todos';


    constructor(initialPage = 1) {
        this.page = initialPage;
        axios.defaults.baseURL = ToDoApi.BASE_URL;
    }


    async fetchToDoes() {
        // const searchParams = new URLSearchParams({
        //     _limit: 50,
        //     _page: this.page
        // });

        try {
            const { data } = await axios.get('/', {
                _limit: 50,
                _page: this.page
            });

            this.page += 1;

            return data;
        }
        catch (error) {
            console.error(error);
        } 


        // return fetch(`${ToDoApi.BASE_URL}?${searchParams}`)
        //     .then(response => response.json())
        //     .catch(error => console.error(error))
        //     .finally(() => this.page += 1);
    }

    async onToDoUpdate(completed, id) {
        try {
            await axios.get(id, {
                completed
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
        
        // return fetch(`${ToDoApi.BASE_URL}/${id}`, {
        //         method: 'PATCH',
        //         body: JSON.stringify({
        //             completed,
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

    };

    async onToDoCreate(titleToDo) {

        try {
            const {data} = await axios.post('/', {
                title: titleToDo,
                completed: false,
                userId: 1,
            });
            return data;
        }
        catch (error) {
            console.log(error);
        }
        

        // return fetch(ToDoApi.BASE_URL, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: titleToDo,
        //         completed: false,
        //         userId: 1,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // }).then(response => response.json())
    }

    async onToDoDelete(id) {
        try{
            await axios.get(id);
            return true;
        }catch{
            return false;
        }
    }
}