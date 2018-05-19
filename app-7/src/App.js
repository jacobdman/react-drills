import React, { Component } from 'react';
import './App.css';

import Todo from './Components/Todo.js'
import NewTask from './Components/NewTask'
import List from './Components/List.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listOfTasks: [],
    }
  }

  addTask = ( task ) => {
    this.setState({
      listOfTasks: [...this.state.listOfTasks, task],
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
        <h1>To Do List:</h1>
        <NewTask add={ this.addTask }/>
        <List tasks={ this.state.listOfTasks }/>
      </div>
    );
  }
}

export default App;
