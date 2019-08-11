import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please complete field', 'light')
    } else {
      githubContext.searchUsers(text); {/* Send props to search component */ }
      setText('')
    }
  };

  const onChange = e => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className="form"> {/* Call function to submit form data */}
        <input
          type="text"
          name="text"
          placeholder="search users..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}>Clear</button>
      )} {/* hide clear button if users not showing */}
    </div>
  )
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
