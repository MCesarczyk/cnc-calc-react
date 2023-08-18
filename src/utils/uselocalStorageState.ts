import { useState, useEffect, Dispatch } from 'react';

export const useLocalStorageState = <T>(keyName: string, initialValue: T): [T, Dispatch<T>] => {
  const getInitialState = () => {
    const localStorageState = localStorage.getItem(keyName);
    if (localStorageState === null) {
      return initialValue;
    }

    return JSON.parse(localStorageState);
  };
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
};
