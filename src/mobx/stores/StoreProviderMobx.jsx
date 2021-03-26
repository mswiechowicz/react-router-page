import React, {Component, createContext} from 'react';
import RootStore from "./RootStore";

export const StoreContextMobx = createContext();

const StoreProviderMobx = ({children}) => (
    <StoreContext.Provider value={new RootStore()}>
        {children}
    </StoreContext.Provider>
)


export default StoreProviderMobx;