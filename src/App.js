import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  handleSubmit = username => {
    console.log('submitting!', username);
  };

  render() {
    return (
      <div>
        My amazing app
        <Login onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
