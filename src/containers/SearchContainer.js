import React, { Component } from 'react';
import SearchResults from './SearchResults';
import fetchWord from '../helpers/fetchWord';
import fetchDefinition from '../helpers/fetchDefinition';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        word: "",
        shortdef: [],
        searching: false
    };

    this.handleRandomWord = this.handleRandomWord.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
  }

  handleRandomWord() {
    this.setState({
      word: "",
      hw: "",
      shortdef: [],
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

        if (data.length && data[0].hasOwnProperty("shortdef")) {
          console.log('data: ', data);
          const { shortdef } = data[0];
          const { id } = data[0].meta;
          let { hw } = data[0].hwi;
          hw = hw.split("*").join("-");

          this.setState({ 
            word: id,
            hw, 
            shortdef, 
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
        className="row justify-content-md-center" 
        style={{marginTop: "24px"}} 
      >
        <SearchResults 
          onRandomWord={this.handleRandomWord} 
          word={this.state.word}
          hw={this.state.hw}
          shortdef={this.state.shortdef}
          searching={this.state.searching}
        />
      </div>
    )
  }
}