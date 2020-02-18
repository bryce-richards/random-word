import React from 'react';
import Navbar from '../containers/Navbar';
import SearchContainer from '../containers/SearchContainer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container-fluid">
        <SearchContainer />
      </main>
    </div>
  );
}

export default App;
