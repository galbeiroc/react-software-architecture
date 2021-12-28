import { CounterButton } from './components/CounterButton';
import { Counter } from './mobx/Counter';

import './App.css';

const counter = new Counter();

function App() {
  return (
    <div className="App">
      <h2>State Management - Mobx</h2>
      <CounterButton counter={counter} />
    </div>
  );
}

export default App;
