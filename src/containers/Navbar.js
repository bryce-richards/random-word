import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Random Word</a>
      </nav>
    )
  }
}
