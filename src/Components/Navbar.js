import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'GitFinder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    // Type checking
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='nav bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
          Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;
