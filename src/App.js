import React, { Component } from 'react';
import Confetti from 'react-confetti'

import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import './App.css';


const getStudentsApi = () => (
  fetch('http://localhost:5000/students')
  .then(response => response.json())
  .then(data => data)
)


class App extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0,
      title: 'Wild Counter',
      data: [],
      name: '',
      age: ''
    }
  }


  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }


  sawi = (newTitle) => {
    console.log('hello')
    this.setState({
      title: newTitle
    })
  }

  componentDidMount() {
    getStudentsApi().then(data => this.setState({data}))
  }

  handleInput = (inputName, event) => {
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleForm = event => {
    event.preventDefault();
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age
      })
    })
    .then(response => {
      if(response.status === 200) getStudentsApi().then(data => this.setState({data}))
    })
    this.setState({
      name: '',
      age: ''
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.title}: {this.state.counter}</h1>
        <Button action={this.increase} text='+' />
        <Button sawi={this.sawi} action={this.decrease} text='-' />
        <Counter counterValue={this.state.counter} pizza='Yes please' />

        <form onSubmit={this.handleForm}>
          <input
            value={this.state.name}
            onChange={event => this.handleInput('name', event)}
            placeholder='Name...'
          />
          <input
            value={this.state.age}
            onChange={event => this.handleInput('age', event)}
            placeholder='Age...'
            type='number'
          />
          <button>Add student</button>
        </form>
        {this.state.data.length > 0 &&
          this.state.data.map((student, i) => <p key={i}>Name: {student.name} and age: {student.age}</p>)
        }
      </div>
    )
  }
}


export default App;
