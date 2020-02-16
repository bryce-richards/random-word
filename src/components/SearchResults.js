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
      <div className="col-4 card">
      <div className="card-body">
        {
          this.props.searching ? 
          (
            <div class="spinner-border" role="status"/>
          ) : 
          ( 
            <div>
              <h5 className="card-title">
                {this.props.word}
              </h5>
              <div className="card-text">
                {this.buildDefinition()}
              </div>
            </div>
          )
        }
        </div>
        <div class="row card-footer text-muted">
          <button 
            type="button" 
            className="col btn btn-primary btn-lg btn-block" 
            onClick={this.handleClick}
          >
            Search
          </button>
        </div>
      </div> 
    )
  }
}