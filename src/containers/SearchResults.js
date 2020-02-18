import React, { Component } from 'react';
import SearchButton from '../components/SearchButton';
import SearchBody from '../components/SearchBody';
import Spinner from '../components/Spinner';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.buildDefinition = this.buildDefinition.bind(this);
  }

  handleSearch() {
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
       <div className="row card-header">
          <SearchButton 
            searching={this.props.searching} 
            onSearch={this.handleSearch}/>
        </div>
        <div className="row card-body">
          {
            this.props.searching ? 
            (
              <Spinner />
            ) : 
            ( 
              <SearchBody 
                word={this.props.word}
                hw={this.props.hw}
                definition={this.buildDefinition()}/>
            )
          }
        </div>
      </div> 
    )
  }
}