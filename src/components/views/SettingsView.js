import React, { useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import FixeHeader from "../Headers/FixeHeader";
import { SettingsScroll } from "../Settings/SettingsScroll";

export default SettingsView = props => {
  const { theme, themeState } = useContext(ThemeContext);
  const { currentUserData } = useContext(UserContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <SettingsScroll
        {...props}
        theme={theme}
        themeState={themeState}
        currentUserData={currentUserData}
      />
      <FixeHeader title="Settings" backView="Profile" {...props} />
    </View>
  );
};
