import React from 'react';
import hop from './hop.png';
import './App.css';

import Breweries from './components/Breweries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hop} className="App-logo" alt="logo" />
        <Breweries />
      </header>
    </div>
  );
}

export default App;
