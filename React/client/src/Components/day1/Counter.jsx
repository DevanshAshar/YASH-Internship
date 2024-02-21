import React, { useState } from 'react';
import CounterButton from './CounterButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <CounterButton increment={incrementCounter} />
    </div>
  );
};


export default Counter;
