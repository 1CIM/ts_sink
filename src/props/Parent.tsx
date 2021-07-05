import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='red' onClick={() => console.log('Clicked first')} />
      <ChildAsFC color='green' onClick={() => console.log('Clicked second')}>
        <p data-cy='hemburgar'>Hemburgar</p>
      </ChildAsFC>
    </>
  );
};

export default Parent;
