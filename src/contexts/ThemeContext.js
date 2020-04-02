import React, { useState, useEffect } from "react";
import { Appearance, useColorScheme } from "react-native-appearance";
import { AsyncStorage } from "react-native";

import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = props => {
  const [colorScheme, setColorScheme] = useState(
    useColorScheme() === "dark" ? darkTheme : lightTheme
  );
  const [theme, setTheme] = useState(
    useColorScheme() === "dark" ? darkTheme : lightTheme
  );
  const [themeState, setThemeState] = useState("automatic");

  const _storeData = async themeState => {
    try {
      await AsyncStorage.setItem("themeState", themeState);
    } catch (error) {
      console.log(error);
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("themeState");
      if (value !== null) {
        setThemeState(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  useEffect(() => {
    themeState === "automatic"
      ? setTheme(colorScheme)
      : themeState === "light"
      ? setTheme(lightTheme)
      : setTheme(darkTheme);
  }, [themeState]);

  useEffect(() => {
    _storeData(themeState);
  }, [themeState]);

  // useEffect(() => {
  //   console.log(themeState);
  // }, [themeState]);

  return (
    <Provider
      value={{
        colorScheme,
        theme,
        themeState,
        setThemeState
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
