import { useRecoilValue } from 'recoil';
import { counterState } from '../recoil/counterState';

export const DisplayCount = () => {
  const clicksData = useRecoilValue(counterState)
  return (
    <>
      <h3>Number of Clicks: {clicksData.length}</h3>
    </>
  )
}
