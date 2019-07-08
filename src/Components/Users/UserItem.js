import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      url: 'https://github.com/mojombo'
    };
  }

  render() {
    const { login, avatar_url, url } = this.state; // destructure & remove this.state below
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='profile_image'
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
