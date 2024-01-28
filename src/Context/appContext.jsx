import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "../Reducer/appReducer";

export const AppContext = createContext();

function AppContextWrapper({ children }) {
  let localState = localStorage.getItem("Appstate");
  let initialStateValue = localState ? JSON.parse(localState) : initialState;
  const [state, dispatch] = useReducer(reducer, initialStateValue);
  const contextValue = { state, dispatch };
  useEffect(() => {
    localStorage.setItem("Appstate", JSON.stringify(state));
  });
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppContextWrapper;
