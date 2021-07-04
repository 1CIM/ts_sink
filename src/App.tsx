import React from 'react';
import Parent from './props/Parent';

function App() {
  return (
    <div data-cy="header" className="App">
      <h1 data-cy="header-text" >Hi there</h1>
      <Parent />
    </div>
  );
}

export default App;
