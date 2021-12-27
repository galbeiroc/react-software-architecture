import { useContext, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

export const CounterButton = () => {
  const { counter, increment } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {counter} times</p>
      <label>
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button type='button' onClick={() => increment(incrementBy)}>Counter</button>
    </>
  )
}
