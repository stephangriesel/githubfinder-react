import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
