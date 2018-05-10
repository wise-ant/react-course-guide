import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person'

class App extends Component {

  state={
    persons: [
      {id: 'abcd1', name: "Tony", age: 36},
      {id: 'fvkn2', name: "Misha", age: 40},
      {id: 'dldl3', name: "Li", age: 10},
    ],
    showPersons: false
  }

  // onClickHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {id: 'abcd1', name: "Tony", age: 36},
  //       {id: 'efg2', name: newName, age: 40},
  //       {id: 'hij3', name: "Liandro", age: 10},
  //     ]
  //   })
  // }

  toggleNamesHandler = (event) => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    //let persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({persons})
  }

  changeNameHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex((per) => {
      return per.id === id
    })

    let person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    let persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons})

  }

  render() {
    const style={
      backgroundColor:'green',
      color: 'white',
      cursor: 'pointer',
      margin: '20px',
      borderRadius: "5px",
      padding: '10px',
      ":hover": {
        backgroundColor: "lightgreen",
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = this.state.persons.map((person, index) => {
        console.log(person)
        return (
          <Person
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.changeNameHandler(event, person.id)}
          />
        )
      })
      style.backgroundColor = "red"
      style[":hover"] = {
        backgroundColor: "salmon",
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2 ) classes.push('red')
    if (this.state.persons.length <= 1 ) classes.push('bold')


    return (
      <StyleRoot >
        <div className="App">
          <h1>Hello</h1>
          <p className = { classes.join(' ') } > We have persons here </p>
          <button
            style={style}
            onClick = {this.toggleNamesHandler.bind(this, "Mikhail")}
          >Toggle Names</button>
          {persons}
        </div>
      </StyleRoot >
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!!!'))
  }
}

export default Radium(App);//high order component allowing to add sudo selectors to JS styles
