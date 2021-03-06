import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { fetchWord, fetchDefinition, buildDefinitions } from '../utils/helpers';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        hw: "",
        mw: "",
        def: [],
        searching: false
    };

    this.handleRandomWord = this.handleRandomWord.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
  }

  handleRandomWord() {
    this.setState({
      hw: "",
      mw: "",
      def: [],
      searching: true
    });

    fetchWord()
      .then(data => {
        const { word } = data;

        if (word.split(' ').length > 1) {
          this.handleRandomWord();
        } else {
          this.handleDefinition(word);
        }
        
      })
      .catch(e => console.log("Word error: ", e));
  }

  handleDefinition(word) {
    fetchDefinition(word)
      .then(data => {

        if (
          data.length
          && data[0].hasOwnProperty("shortdef")
          && data[0].hasOwnProperty("hwi")
          && data[0].hwi.hasOwnProperty("hw")
          && data[0].hwi.hasOwnProperty("prs")
          && data[0].hwi.prs.length
        ) {
          let { hw } = data[0].hwi;
          hw = hw.split("*").join("");

          const { mw } = data[0].hwi.prs[0]; 
          const def = buildDefinitions(data);

          this.setState({ 
            hw,
            mw,
            def,
            searching: false
          });

        } else {
          this.handleRandomWord();
        }
      })
      .catch(e => console.log("Definition error: ", e));
  }

  render() {
    return (
      <div 
        className="row justify-content-center" 
        style={{marginTop: "24px"}} 
      >
        <SearchResults 
          {...this.state}
          onRandomWord={this.handleRandomWord}
        />
      </div>
    )
  }
}