import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      search: "",
      array: [
        'item',
        'maybe item?',
        'definitely item',
        'you dont know item like I do',
      ],
    }
  }

  setSearch (value) {
    this.setState({ search: value })
  }

  render() {

    let display = this.state.array.filter( array => {
        return array.includes( this.state.search )
      }).map( (e,i) => {
        return <h2 key={i}>{e}</h2>
      })

    return (
      <div className="App">
        <input onChange={ e => { this.setSearch( e.target.value )}}/>
        { display }
      </div>
    );
  }
}

export default App;
