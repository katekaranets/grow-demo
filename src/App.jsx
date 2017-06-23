import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount() {    
    fetch(`https://sciencehit.herokuapp.com/api/speakers/ru/second_tour/`)
      .then(result => result.json())
      .then(items => { this.setState({items: items})})
      .catch(err => {console.log(err)});
  }
  render() {
    return (
      <div className="contact-list-app">
        <h1>Speaker List</h1>
        <List items={this.state.items}/>
      </div>
    );
  }
};

export default App;
