import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestList';

function App() {
  return (
    <>
      <div data-cy='header' className='App'>
        <h1 data-cy='header-text'>Hi there</h1>
        <Parent />
      </div>
      <GuestList />
    </>
  );
}

export default App;
