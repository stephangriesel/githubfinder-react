import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import About from './Components/Pages/About';
import Alert from './Components/Layout/Alert';
import axios from 'axios';

import './App.css';
import GithubState from './context/github/GithubState';


const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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

  // Get  user 


  // Get users repository
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };


  // Form validation
  const validateForm = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000)
  };


  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  {/* get properties from onSubmit function in search component & refers to searchUsers function in this component */}
                  {/* get properties from clearUsers function, props passed up from search component > clearUsers } */}
                  {/* get number of users in array, if greater than 0 set to true, else false   */}
                  <Search

                    setAlert={validateForm}
                  />
                  <Users />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User {...props}
                  getUserRepos={getUserRepos}
                  repos={repos}
                />
              )} />
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>
  );
}



export default App;

