import React, { Component } from 'react';

export default class SearchButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onSearch } = this.props;
    onSearch();
  }

  render() {
    return (
      <div className="col"> 
      { this.props.searching ?
        ( <button 
            type="button" 
            className="btn btn-primary btn-lg btn-block" 
            disabled> {/* <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
            Searching...
          </button>
        ) :
        (
          <button 
            type="button" 
            className="btn btn-primary btn-lg btn-block" 
            onClick={this.handleClick}>
            New Word
          </button>
        )
      }
        
         
      </div>
    )
  }
}