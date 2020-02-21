import React, { Component } from 'react';
import SearchButton from '../components/SearchButton';
import SearchBody from '../components/SearchBody';
import Spinner from '../components/Spinner';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const { onRandomWord } = this.props;
    onRandomWord();
  }

  render() {
    return (
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 card border-dark">
       <div className="row card-header">
          <SearchButton 
            searching={this.props.searching} 
            onSearch={this.handleSearch}/>
        </div>
        <div>
          {
            this.props.searching ? 
            (
              <div className="row card-body">
                <Spinner />
              </div>
            ) : 
            ( 
              <SearchBody 
                hw={this.props.hw}
                mw={this.props.mw}
                def={this.props.def}
              />
            )
          }
        </div>
      </div> 
    )
  }
}