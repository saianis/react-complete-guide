import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Anish', age: 29},
      {name: 'Chandra', age: 29}
    ],
    showPersons: false
  }
  switchNameHandler = () => {
    this.setState( {
      persons: [
        {name: 'Anish Chandra', age: 29},
        {name: 'Chandra Chandra', age: 29}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Anish Chandra', age: 29},
        {name: event.target.value, age: 24}
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangeHandler}>My hobbies: watching soccer</Person>
      </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
