import { RecoilRoot } from 'recoil';

import { CounterButton } from './components/CounterButton';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <h1>State Management -  Recoil</h1>
      <CounterButton />
    </RecoilRoot>
  );
}

export default App;
