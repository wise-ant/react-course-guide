import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
  <div className="Person" style = { style }>
    <p onClick={props.click}>Im {props.name} and I am {props.age}!</p>
    <p>{props.children}</p>
    <input onChange={props.changed} value={props.name} />
  </div>
);}

export default Radium(person);//high order component allowing to add sudo selectors to JS styles
