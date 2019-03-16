import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Display } from './Display';
import { Button } from './Button';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

  }

  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
