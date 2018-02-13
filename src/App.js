import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  //Start your coding here!
  //Don't be afraid to add props into the provided components
  state = {
    students: [],
    filter: 'All'
  }

  componentDidMount = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(resp => resp.json())
    .then(json => this.setState({students: json}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const house = e.target.newWizardHouse.value
    const name = e.target.newWizard.value
    this.setState({
      students: [...this.state.students, {name: name, house: house}]
    })
  }

  handleFilter = (e) => {
    e.preventDefault()
    this.setState({
      filter: e.target.value
    })
  }

  filterStudents = () => {
    if (this.state.filter === 'All') {
    return this.state.students }
    else {
    return this.state.students.filter(student => student.house === this.state.filter)}
  }

  render() {

    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings handleSubmit={this.handleSubmit} handleFilter={this.handleFilter}/>
        <WizardList students={this.filterStudents()}/>
      </div>
    );
  }
}

export default App;
