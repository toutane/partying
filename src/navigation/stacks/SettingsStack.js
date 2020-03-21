import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SettingsView from "../../components/views/SettingsView";
import AppearanceView from "../../components/Settings/Appearance/AppearanceView";

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsView },
    Appearance: { screen: AppearanceView }
  },
  {
    initialRouteName: "Settings",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(SettingsStack);
