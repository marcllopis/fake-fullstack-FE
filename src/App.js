import React, { Component } from 'react';

import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import './App.css';


class App extends Component {

  state = {
    counter: 0,
    title: 'Wild Counter'
  }

  increase = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  sawi = newTitle => {
    this.setState({
      title: newTitle
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}: {this.state.counter}</h1>
        <Button action={this.increase} text='+' />
        <Button sawi={this.sawi} action={this.decrease} text='-' />
        <Counter counterValue={this.state.counter} pizza='Yes please'/>
      </div>
    )
  }
}


export default App;
