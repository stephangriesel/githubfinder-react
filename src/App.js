import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false })
    console.log(res.data);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
