import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className='nav bg-primary'>
      <h1>
        <i className={props.icon} />
        {props.title}
        Navbar
        </h1>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GitFinder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  // Type checking
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
