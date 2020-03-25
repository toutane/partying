import React, { useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "../../../contexts/ThemeContext";

import FixeHeader from "../../Headers/FixeHeader";
import { AppearanceCard } from "./AppearanceCard";

export default AppearanceView = props => {
  const { theme, themeState, setThemeState } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <AppearanceCard
        theme={theme}
        themeState={themeState}
        setThemeState={setThemeState}
      />
      <FixeHeader title="Appearance" backView="Settings" {...props} />
    </View>
  );
};
