import React, { Component } from 'react';
import './App.css';

import Todo from './Components/Todo.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listOfTasks: [],
      newTask: "",
    }
  }

  inputChange (value) {
    this.setState({newTask: value})
  }

  addTask = () => {
    this.setState({
      listOfTasks: [...this.state.listOfTasks, this.state.newTask],
      newTask: ""
    })
  }

  render() {
    let taskList = this.state.listOfTasks.map( (e,i) => {
      return (
        <Todo key={i} task={e} />
      )
    })
    return (
      <div className="App">
        <input value={this.state.input} placeholder={'Add a new task'} onChange={ e => this.inputChange( e.target.value )}/>
        <button onClick={ this.addTask }>Add</button>
        <br/>
        { taskList }
      </div>
    );
  }
}

export default App;
