import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';
import TaskList from './containers/TaskList';
import initial from './data/initial';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initial : initial
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Form />
        <TaskList />
      </div>
    );
  }
}

export default App;
