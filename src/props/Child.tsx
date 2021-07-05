interface ChildProps {
  color: string;
  onClick: () => void;
}

// This one  works but second one is proffered

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div data-cy='color_1'>
      {color}
      <button data-cy='first_btn' onClick={onClick}>Click me</button>
    </div>
  );
};

// ================================================

// FC = Function Component
// Here we tell TS its a React component,
// So we can assign properties to it like 'propTypes' and 'contextTypes'
// And 'Child' will receive props of type 'ChildProps' as before
// It automatically expects to be able to receive children as a props while the one above you need to pass it in the interface.

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div data-cy='color_2'>
      {color}
      {children}
      <button data-cy='second_btn' onClick={onClick}>Click me</button>
    </div>
  );
};
