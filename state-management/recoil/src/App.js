import { RecoilRoot } from 'recoil';

import { CounterButton } from './components/CounterButton';
import { DisplayCount } from './components/DisplayCount';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <h1>State Management -  Recoil</h1>
      <DisplayCount />
      <CounterButton />
    </RecoilRoot>
  );
}

export default App;
