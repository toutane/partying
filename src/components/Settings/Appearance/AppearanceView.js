import React, { useState, useEffect, useContext } from "react";
import { View, Animated, Button } from "react-native";
import { screenHeight } from "../../../utils/dimensions";

import { ThemeContext } from "../../../contexts/ThemeContext";

import DefaultHeader from "../../Headers/DefaultHeader";
import { AppearanceCard } from "./AppearanceCard";

export default AppearanceView = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(100));

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <AppearanceCard theme={theme} switchTheme={switchTheme} />
      <DefaultHeader
        // theme={theme}
        scrollY={scrollY}
        title="Appearance"
      />
    </View>
  );
};
