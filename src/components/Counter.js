import React from 'react';
import {Button} from '@chakra-ui/react';

const Counter = ({count, setCount}) => {

  function minus(){
    setCount(count - 1)
  }
  function plus(){
    setCount(count + 1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div>
      <h1>COUNTER {count}</h1>
      <Button colorScheme='whatsapp' size='sm'onClick={minus}>MINUS</Button>
      <Button colorScheme='messenger' size='sm' onClick={plus}>PLUS</Button>
      <Button colorScheme='red' size='sm' onClick={reset}>RESET</Button>


    </div>
  );
};

export default Counter;