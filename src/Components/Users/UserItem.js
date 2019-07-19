import React from 'react';

const UserItem = (props) => {

  const { login, avatar_url, url } = props.user; // destructure & remove this.state below
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

export default UserItem;
