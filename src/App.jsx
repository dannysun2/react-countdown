import React, { Component } from 'react';
import './App.css'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
      <Form inline>
          <FormControl
            className="deadline-input"
            placeholder='new date'
            onChange={e => this.setState({ newDeadline: e.target.value })}
            />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}
