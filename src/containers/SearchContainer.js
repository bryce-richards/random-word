import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';
import fetchWord from '../helpers/fetchWord';
import fetchDefinition from '../helpers/fetchDefinition';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        word: "",
        shortdef: [],
        searching: false
    }

    this.handleRandomWord = this.handleRandomWord.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
  }

  handleRandomWord() {
    this.setState({
      word: "",
      shortdef: [],
      searching: true
    });

    fetchWord()
      .then(data => {
        const { word } = data;

        this.handleDefinition(word);
      })
      .catch(e => console.log("Word error: ", e));
  }

  handleDefinition(word) {
    fetchDefinition(word)
      .then(data => {

        if (data.length && data[0].hasOwnProperty("shortdef")) {
          const { shortdef } = data[0];

          this.setState({ 
            word, 
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
      <div>
        <SearchResults 
          onRandomWord={this.handleRandomWord} 
          word={this.state.word}
          shortdef={this.state.shortdef}
          searching={this.state.searching}
        />
      </div>
    )
  }
}