import React, { Component } from 'react';
import './App.css';

import Image from './Components/Image.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"http://i0.kym-cdn.com/entries/icons/original/000/021/311/free.jpg"} />
      </div>
    );
  }
}



export default App;
