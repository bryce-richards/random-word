import React, { Component } from 'react';
import SearchDefinition from './SearchDefinition';
import { determineLabel } from '../utils/helpers';

const flColors = {
  "adjective" : "info",
  "adverb" : "danger",
  "noun" : "primary",
  "verb" : "success",
  "other" : "secondary"
};

export default class SearchBody extends Component {
  constructor(props) {
    super(props);

    this.getClass = this.getClass.bind(this);
    this.buildDefinitions = this.buildDefinitions.bind(this);
  }

  getClass(label) {
    let flClass = flColors[label];
    return flClass;
  }

  buildDefinitions() {
    const { def } = this.props;

    return def.map((def, i) => {

      const { fl, shortdef } = def;
      const label = determineLabel(fl);

      return (
        <li key={i} className={`row list-group-item list-group-item-${this.getClass(label)}`}>
          <SearchDefinition 
            fl={fl}
            shortdef={shortdef} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <h5 className="row card-title">
            {this.props.hw}
          </h5>
          <h6 className="row card-subtitle mb-2 text-muted">
            {this.props.mw}
          </h6>
        </div>
        <ul className="list-group list-group-flush">
          {this.buildDefinitions()}
        </ul>
      </div>
    )
  }
}