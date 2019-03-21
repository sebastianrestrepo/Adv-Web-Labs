import React, { Component } from 'react';

class Filters extends Component{

    

    render(){

        if(!this.props.departments) return <p>Cargando...</p>;

        return <div>
            <h3>Filters</h3>
            {this.props.departments.map(( dep ) => {
                return <a key={dep.department_id} 
                    href={`/department/${dep.name}`}>
                    {dep.name}
                </a>;
            })}

            <button onClick={this.props.onAdd}>
                Ver más
            </button>
        </div>
    }
}

export default Filters;