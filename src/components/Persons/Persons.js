import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[persons.js] getDerivedStateFromProps');
  //   return state;
  // }


  // Below hooks are changed in latest react versions

  // componentWillReceiveProps(props) {
  //   console.log('[persons.js] componentWillReceiveProps', props); 
  // }

  //   componentWillupdate() {
  // }

shouldComponentUpdate(nextProps, nextState) {
  console.log('[persons.js] shouldComponentUpdate');
  if(nextProps.persons !== this.props.persons) {
    return true;
  } else return false;
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('[persons.js] getSnapShotBeforeUpdate');
  return { message: 'snapshot!'};
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('[persons.js] componentDidUpdate');
  console.log(snapshot);
  
}

componentWillUnmount() {
  console.log('[persons.js] componentWillUnmount');
  
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