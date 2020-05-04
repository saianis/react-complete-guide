import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[persons.js] getDerivedStateFromProps');
  //   return state;
  // }

shouldComponentUpdate(nextProps, nextState) {
  console.log('[persons.js] shouldComponentUpdate');
  return true;
}

getSnapShotBeforeUpdate(prevProps, prevState) {
  console.log('[persons.js] getSnapShotBeforeUpdate');
}

componentDidUpdate() {
  console.log('[persons.js] componentDidUpdate');
}

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={event => this.props.changed(event, person.id)}
    />
} );
  }
}


export default Persons;