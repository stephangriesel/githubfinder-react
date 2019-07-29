import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import axios from 'axios';
import { sign } from 'crypto';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //     process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false })
  //   console.log(res.data);
  // }

  // Search Users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false })
  };

  // Clear users 
  clearUsers = () => this.setState({ users: [], loading: false });

  // Form validation
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          {/* get properties from onSubmit function in search component & refers to searchUsers function in this component */}
          {/* get properties from clearUsers function, props passed up from search component > clearUsers } */}
          {/* get number of users in array, if greater than 0 set to true, else false   */}
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
