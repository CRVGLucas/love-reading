import {api} from './api'

const Categories = {

    getCategories: function(): Promise<any>{
        return fetch(api + 'categories').then( response => response.json() )
    }

}

export default Categories;

