import React, { Component } from 'react';

export default class SearchBody extends Component {
  
  render() {
    return (
      <div className="col">
        <h5 className="card-title">
          {this.props.word}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {this.props.hw}
        </h6>
        <div className="card-text">
          {this.props.definition}
        </div>
      </div>
    )
  }
}