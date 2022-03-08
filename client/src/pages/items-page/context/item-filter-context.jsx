import React, { createContext } from 'react';
import { useSearchParams } from 'react-router-dom';

export const itemFilterContext = createContext();

const itemFilterContextProvider = ({ children }) => {
    return (
        <itemFilterContext.Provider value={contextValue}>
            {children}
        </itemFilterContext.Provider>
    );
};

export default itemFilterContextProvider;
