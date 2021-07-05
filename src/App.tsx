import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <>
      <div data-cy='header' className='App'>
        <h1 data-cy='header-text'>Hi there</h1>
        <Parent />
      </div>
      <GuestList />
      <UserSearch />
    </>
  );
}

export default App;
