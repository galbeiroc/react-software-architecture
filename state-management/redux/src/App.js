import { Provider } from 'react-redux';

import { CounterButton } from './components/CounterButton';

import { store } from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <h1>State Management - Redux</h1>
      <CounterButton />
    </Provider>
  );
}

export default App;
