import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    const changeCounterValue = () => { setCounter(prevValue => prevValue + 1)}
    const toggleIsLogged = () => { setIsLogged(prevValue => !prevValue)}

    return (
        <AppContext.Provider value={ { counter, isLogged, changeCounterValue, toggleIsLogged } }>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;