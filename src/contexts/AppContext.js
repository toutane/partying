import React, { useState, useEffect } from "react";
import { AppState } from "react-native";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = (props) => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => console.log(appState), [appState]);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
  }, []);

  _handleAppStateChange = (nextAppState) => {
    setAppState(nextAppState);
  };

  return <Provider value={{ appState }}>{props.children}</Provider>;
};

export { AppProvider, AppContext };
