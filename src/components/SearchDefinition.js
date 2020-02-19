import React, { Component } from 'react';

// const flColors = {
//   "adjective" : "text-white bg-info mb-3",
//   "adverb" : "text-white bg-warning mb-3",
//   "noun" : "text-white bg-primary mb-3",
//   "verb" : "text-white bg-danger mb-3",
//   "other" : "bg-light mb-3"
// };

const flColors = {
  "adjective" : "text-info",
  "adverb" : "text-danger",
  "noun" : "text-primary",
  "verb" : "text-success",
  "other" : "text-secondary"
};

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