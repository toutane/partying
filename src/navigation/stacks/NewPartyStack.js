import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import GuestsListView from "../../components/views/GuestsListView";

const NewPartyStack = createStackNavigator(
  {
    GuestsListView: { screen: GuestsListView },
  },
  {
    initialRouteName: "GuestsListView",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(NewPartyStack);
