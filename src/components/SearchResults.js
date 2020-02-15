import React, { Component } from 'react';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.buildDefinition = this.buildDefinition.bind(this);
  }

  handleClick() {
    const { onRandomWord } = this.props;
    onRandomWord();
  }

  buildDefinition() {
    const { shortdef } = this.props;
    if (shortdef.length) {
      return shortdef.map((def, i) => {
        return (
          <p key={i}>{i+1}) {def}</p>
        );
      });
    }
  }

  render() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__actions mdl-card--border">
          <a 
          className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.handleClick}
          >
            Click Me
          </a>
        </div>
        <div className="mdl-card__title">
          <h6 className="mdl-card__title-text">{this.props.word}</h6>
        </div>
        <div className="mdl-card__supporting-text">
          {this.buildDefinition()}
          <div className={`mdl-spinner mdl-js-spinner ${this.props.searching ? 'is-active' : ''}`} />
        </div>       
      </div>
    )
  }
}