import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:' adsad', name: 'Anish', age: 29},
      {id: 'dsadasd', name: 'Chandra', age: 29},
      {id: 'qwqe', name: 'Gorthi', age: 28}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2 ) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1 ) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
          <div className="App">
          <h1> Hi, I am a React App</h1>
          <p className = {classes.join(' ')}>This is realy working</p>
          <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
      </StyleRoot>
    );
  }
}

// Higher order component
export default Radium(App);
