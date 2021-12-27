import { useState } from 'react';

export const CounterButton = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  return (
    <>
      <p>You have clicked the button {counter} times</p>
      <label>
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
      </label>
      <button type='button' onClick={() => setCounter(prev => prev + increment)}>Counter</button>
    </>
  )
}
