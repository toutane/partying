import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import DefaultHeader from "../Headers/DefaultHeader";
import { SettingsScroll } from "../Settings/SettingsScroll";

export default SettingsView = props => {
  const { theme } = useContext(ThemeContext);
  const { currentUserData } = useContext(UserContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(100));

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <SettingsScroll
        {...props}
        theme={theme}
        currentUserData={currentUserData}
      />
      <DefaultHeader {...props} scrollY={scrollY} title="Settings" />
    </View>
  );
};
