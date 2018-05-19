import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
        newTask: "",
    }
  }

  inputChange (value) {
    this.setState({newTask: value})
  }

  add = () => {
    this.props.add( this.state.newTask );
    this.setState({ newTask: '' });
  }
  
render() {
    return (
      <div>
        <input value={ this.state.newTask } 
              placeholder="Add a new task" 
              onChange={ (e) => this.inputChange( e.target.value ) }/>
        <button onClick={ this.add }>Add</button>
      </div>
    )
  }

}

export default NewTask