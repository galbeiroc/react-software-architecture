import { useRecoilValue } from 'recoil';
import { counterState } from '../recoil/counterState';

export const DisplayCount = () => {
  const numberCicks = useRecoilValue(counterState)
  return (
    <>
      <h3>Number of Clicks: {numberCicks}</h3>
    </>
  )
}
