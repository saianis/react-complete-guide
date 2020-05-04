import React, { Component }from 'react';
import propTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
    
  }

  render() {
  console.log('[Person.js] r=rendering....');
  return (
    <Aux>
      {this.context.authenticated ? <p>Authenticated!!!</p> : <p>Please Log in!!</p>}
      <p key="2"onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p key="i2">{this.props.children}</p>
      <input 
        key="key3" 
        ref={this.inputElementRef}
        type="text" 
        onChange={this.props.changed} value={this.props.name} />
    </Aux>
  )
  }
};

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);
