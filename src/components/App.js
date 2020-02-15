import React from 'react';
import SearchContainer from '../containers/SearchContainer';

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Random Word</span>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="page-content">
            <SearchContainer />
          </div>
        </main>
    </div>
  );
}

export default App;
