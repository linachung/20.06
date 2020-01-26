import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // inserted constructor that initializes default state
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  // inserted method to fetch data from API and store response on this.state.apiResponse
  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(rest => rest.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err);
  }

  // react lifecycle method that will execute callAPI method after component mounts
  componentDidMount() {
    this.callAPI();
  }

  // display text retrieved from api in this.state.apiResponse
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className = 'App-title'>Welcome to React</h1>
        </header>
        <p className ='App-intro'>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;
