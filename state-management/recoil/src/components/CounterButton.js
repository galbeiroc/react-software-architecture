import { useRecoilState } from 'recoil';

import { counterState } from '../recoil/counterState';
import { incrementByState } from '../recoil/incrementbyState';

export const CounterButton = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
      <button type='button' onClick={() => setCounter(prev => prev + incrementBy)}>Counter</button>
    </>
  )
}