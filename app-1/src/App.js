import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      textGoesHere: ""
    }
  }

  textDisplay = (value) => {
    this.setState({textGoesHere: value})
  }

  render() {
    return (
      <div className="App">
      <input onChange={(e) => this.textDisplay( e.target.value )} />
      <p>{this.state.textGoesHere}</p>
      </div>
    );
  }
}

export default App;
