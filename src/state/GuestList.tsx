import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div data-cy='guest-list'>
      <h3 data-cy='guest-list-header'>Guest List</h3>
      <ul data-cy='list-of-guests'>
        {guests.map(guest => <li key={guest}>{guest}</li>)}
      </ul>
      <input
        data-cy='guest-list-input'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button data-cy='guest-list-btn' onClick={onClick}>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
