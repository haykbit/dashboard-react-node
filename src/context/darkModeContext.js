import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer.js';

const INITIAL_STATE = {
  darkMOde: localStorage.getItem("dark") ? localStorage.getItem("DarkMode") : false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
console.log(state.darkMode)
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};


export default DarkModeContextProvider;