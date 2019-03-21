import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';


import api from '../../utils/api';

class App extends Component {

  constructor(props:any){
    super(props);   
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Store />

      </div>
    );
  }
}

export default App;
