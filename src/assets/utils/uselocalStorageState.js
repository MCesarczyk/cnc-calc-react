import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }

        return JSON.parse(localStorage.getItem(keyName));
    };
    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return [state, setState];
};