import { useRecoilState, useRecoilValue } from 'recoil';

import { numberOfClicksSelector } from '../recoil/numberOdClicksSelector';
import { incrementByState } from '../recoil/incrementbyState';
import { counterState } from '../recoil/counterState';

export const CounterButton = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  const [clicksData, setClicksData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  return (
    <>
    <p>You have clicked the button {numberOfClicks} times</p>
      <label>
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button
        type='button'
        onClick={() => setClicksData([...clicksData, { timestamp: Date.now(), amount: incrementBy }])}
      >
          Counter
      </button>
    </>
  )
}