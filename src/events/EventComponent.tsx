const EventComponent: React.FC = () => {
  // ChangeEvent are only applicable to things that can change such as text inputs, radio/ check boxes 
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  // command click on (DragEvent or ChangeEvent) to see all react event handlers
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return <div data-cy='event-comp'>
    <h3 data-cy='event-header'>Event Component</h3>
    <input data-cy='event-input' onChange={onChange} />
    <div data-cy='event-drag' draggable onDragStart={onDragStart} >Drag Me!</div>
  </div>
}

export default EventComponent