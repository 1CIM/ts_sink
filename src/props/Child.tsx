interface ChildProps {
  color: string;
}

export const Child = ({color}: ChildProps) => {
  return <div data-cy='color' >{color}</div>
}