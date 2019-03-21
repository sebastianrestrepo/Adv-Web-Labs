import { observable } from 'mobx';

import api from '../utils/api';

type depsArray = { name: string, department_id: number }[];

class Store {

@observable departments: depsArray|null = null;

    constructor(){
        // this.departments = observable.box(null);
    }

    getDepartments(){
        var callback = (result: {name: string, department_id: number}[]) => {
            console.log('desde App', result);
            // this.departments.set(result);
            this.departments = result;
        }
        api.getDepartments(callback);
    }
}

const store = new Store();

export default store;