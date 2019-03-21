import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';


import api from '../../utils/api';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        departments: null,
    }

    var callback = (result) => {
        console.log('desde App', result);
        this.setState({ departments: result });
    }
    api.getDepartments(callback);
  
  }

  render() {
    return (
      <div className="App">
        <NavBar departments={this.state.departments} />

        <Store onAdd={() => {
          this.setState((prevState) => {
            prevState.departments.push({
              name: 'Nuevo',
              department_id: 4,
            })
            return {
              departments: prevState.departments
            }
          })
        }} departments={this.state.departments} />

      </div>
    );
  }
}

export default App;
