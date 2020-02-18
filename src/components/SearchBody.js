import React, { Component } from 'react';

export default class SearchBody extends Component {
  render() {
    return (
      <div className="col">
        <h5 className="card-title">
          {this.props.word}
        </h5>
        <div className="card-text">
          {this.props.definition}
        </div>
      </div>
    )
  }
}