import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 23 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined >();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setName('')
    setUser(foundUser)
  };

  return (
    <div data-cy='search-user-container'>
      <h3 data-cy='search-user-header'>User Search</h3>
      <input data-cy='search-input' value={name} onChange={(event) => setName(event.target.value)} />
      <button data-cy='search-btn' onClick={onClick}>Find User</button>
      <div data-cy='found-user'>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
