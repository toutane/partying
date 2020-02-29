import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native-appearance";

import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = props => {
  const [theme, setTheme] = useState(
    useColorScheme() === "dark" ? darkTheme : lightTheme
  );
  function switchTheme() {
    setTheme(theme.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
