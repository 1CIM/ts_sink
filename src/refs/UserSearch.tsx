import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 23 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined >();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setName('')
    setUser(foundUser)
  };

  return (
    <div data-cy='ref-search-user-container'>
      <h3 data-cy='ref-search-user-header'>Ref User Search</h3>
      <input ref={inputRef} data-cy='ref-search-input' value={name} onChange={(event) => setName(event.target.value)} />
      <button data-cy='ref-search-btn' onClick={onClick}>Find User</button>
      <div data-cy='ref-found-user'>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
