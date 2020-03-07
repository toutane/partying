import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PartyView from "../../components/views/PartyView";

const PartyViewStack = createStackNavigator(
  {
    PartyView: { screen: PartyView }
  },
  {
    initialRouteName: "PartyView",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(PartyViewStack);
