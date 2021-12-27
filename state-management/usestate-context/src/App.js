
import './App.css';
import { CounterButton } from './components/CounterButton';
import { CounterProvider } from './context/CounterProvider';

function App() {
  return (
    <CounterProvider className="App">
      <h2>State Managment - useState</h2>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
