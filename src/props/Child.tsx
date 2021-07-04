interface ChildProps {
  color: string;
}

// This one  works but second one is proffered

// export const Child = ({color}: ChildProps) => {
//   return <div data-cy='color' >{color}</div>
// }

// ================================================

// FC = Function Component
// Here we tell TS its a React component,
// So we can assign properties to it like 'propTypes' and 'contextTypes'
// And 'Child' will receive props of type 'ChildProps' as before 

export const Child: React.FC<ChildProps> = ({color}) => {
  return <div data-cy='color' >{color}</div>
}
