import { useContext, useState } from 'react';
import { InitialDataContext } from '../context/InitialDataContext';

export const useDataSSR = (resourseName, loadFunc) => {
  const contextData = useContext(InitialDataContext);
  const [data, setData] = useState(contextData._data[resourseName]);

  if(contextData._isServerSide) {
    contextData._requests.push(
      loadFunc().then(result => {
        contextData._data[resourseName] = result;
      })
    )
  } else if (!data) {
    loadFunc().then(result => {
      setData(result);
      contextData._data[resourseName] = result;
    })
  }

  return data;
}
