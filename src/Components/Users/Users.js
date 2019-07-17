import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'wycats',
                avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
                url: "https://api.github.com/users/wycats"
            },
            {
                id: '3',
                login: 'ezmobius',
                avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
                url: "https://api.github.com/users/ezmobius"
            },

        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
