import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      arr: [
        'hi',
        'test',
        'dope'
      ]
    }
  }

  render() {
    let arrDisplay = this.state.arr.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
        <h2>
          { arrDisplay }
        </h2>
      </div>
    );
  }
}

export default App;
