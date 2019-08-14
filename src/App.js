import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import About from './Components/Pages/About';
import Alert from './Components/Layout/Alert';

import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => {

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

  // Form validation



  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    {/* get properties from onSubmit function in search component & refers to searchUsers function in this component */}
                    {/* get properties from clearUsers function, props passed up from search component > clearUsers } */}
                    {/* get number of users in array, if greater than 0 set to true, else false   */}
                    <Search


                    />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}



export default App;

