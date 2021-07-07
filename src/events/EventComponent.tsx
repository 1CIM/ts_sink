const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return <div data-cy='event-comp'>
    <h3 data-cy='event-header'>Event Component</h3>
    <input data-cy='event-input' onChange={onChange} />
  </div>
}

export default EventComponent