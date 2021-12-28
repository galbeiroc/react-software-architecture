import { useState } from 'react';
import { CounterContext }  from './CounterContext'

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = (incrementBy) => {
    setCounter(prevState => prevState + incrementBy);
  }

  return (
    <CounterContext.Provider value={{ counter, increment }}>
      {children}
    </CounterContext.Provider>
  )
}