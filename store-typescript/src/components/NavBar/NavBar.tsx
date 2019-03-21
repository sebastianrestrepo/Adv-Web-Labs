import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

store.getDepartments();

const NavBar = () => {
    console.log(store.departments.get());
    if(!store.departments.get()) return <p>Cargando...</p>;

    return <nav>
        <h1>{store.departments.get().length}</h1>
        {store.departments.get().map(( dep ) => {
            return <a key={dep.department_id} 
                href={`/department/${dep.name}`}>
                {dep.name}
            </a>;
        })}
    </nav>;
}


export default observer(NavBar);