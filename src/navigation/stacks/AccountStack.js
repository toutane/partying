import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FriendsListView from "../../components/views/FriendsListView";

const AccountStack = createStackNavigator(
  {
    FriendsList: { screen: FriendsListView }
  },
  {
    initialRouteName: "FriendsList",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AccountStack);
