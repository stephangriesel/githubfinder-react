import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please complete field', 'light')
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )} {/* hide clear button if users not showing */}
    </div>
  )
}

export default Search
