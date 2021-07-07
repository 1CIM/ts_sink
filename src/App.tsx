import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import RefUserSearch from './refs/UserSearch'

function App() {
  return (
    <>
      <div data-cy='header' className='App'>
        <h1 data-cy='header-text'>Hi there</h1>
        <Parent />
      </div>
      <GuestList />
      <UserSearch />
      <EventComponent />
      <RefUserSearch />
    </>
  );
}

export default App;
