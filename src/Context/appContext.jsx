import React from "react";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "../Reducer/appReducer";

export const AppContext = createContext();

function AppContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppContextWrapper;
