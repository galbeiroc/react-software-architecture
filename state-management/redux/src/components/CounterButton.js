import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNumberOfClicks } from '../redux/selector';
import { counterButtonClicked, incrementNumberClicks } from '../redux/actions';

export const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberOfClicks);
  const [incrementBy, setIncrementBy] = useState(1);
  const dispatch = useDispatch();

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
        onClick={() => dispatch(incrementNumberClicks(incrementBy))}
      >
        Counter
      </button>
    </>
  )
}