import React, { Component } from "react";
import Todo from './Todo'
import "./App.css";

class App extends Component {

  constructor() {
    super()

    this.state = {
      userInput: '',
      items: []
    }
  }

  input = (event) => {

    this.setState({
      userInput: event.target.value
    })
  }

  add = () => {

    this.setState({
      items: [...this.state.items, this.state.userInput]
    })

    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input type="text" onChange={ this.input }/>
        <button onClick={ this.add }>Add</button>
        <Todo />
      </div>
    );
  }
}

export default App;
