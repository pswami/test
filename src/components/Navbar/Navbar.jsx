import React from 'react';
import './styles.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-faded">
        <a className="navbar-brand" href="#">Fantasy Sports</a>
      </nav>
    );
  }
}