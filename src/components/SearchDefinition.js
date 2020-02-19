import React, { Component } from 'react';

export default class SearchDefinition extends Component {
  constructor(props) {
    super(props);

    this.buildDefinitions = this.buildDefinitions.bind(this);
  }

  buildDefinitions() {
    const { shortdef } = this.props;

    return shortdef.map((def, i) => {
      return (
        <div key={i}>{i+1}. {def}</div>
      );
    });
  }

  render() {
    return (
      <div>
        <div><i>{this.props.fl}</i></div>
        {this.buildDefinitions()}
      </div>
    )
  }
}