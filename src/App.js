import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import UserItem from './Components/Users/UserItem';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
