import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='red' onClick={() => console.log('Clicked first')} />
      <ChildAsFC color='green' onClick={() => console.log('Clicked second')} />
    </>
  );
};

export default Parent;
