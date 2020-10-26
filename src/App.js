import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToDo from './Todos';
import './App.css'
import Layout from './Layout';
import Addtodo from './Addtodo';
import About from './About'
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos:
      [

      ]
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => this.setState({
        todos: todos
      }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id
      )]
    })
  }

  addToDo = (title) => {
    const newToDo = {
      id: uuid(),
      title,
      isDone: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Layout />
            <Route exact path='/' render={props => (
              <Fragment>
                <Addtodo addToDo={this.addToDo} />
                <ToDo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </Fragment>
            )} />
            <Route
              path='/about' component={About}
            />
          </div>
        </div>
      </Router>

    );
  }
}


export default App;
