import React, { Fragment } from 'react';
import Search from '../Users/Search';
import Users from '../Users/Users';

const Home = () => (
    <Fragment>
        {/* get properties from onSubmit function in search component & refers to searchUsers function in this component */}
        {/* get properties from clearUsers function, props passed up from search component > clearUsers } */}
        {/* get number of users in array, if greater than 0 set to true, else false   */}
        <Search />
        <Users />
    </Fragment>
)
export default Home
