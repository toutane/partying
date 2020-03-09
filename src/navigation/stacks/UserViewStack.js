import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import UserView from "../../components/views/UserView";

const UserViewStack = createStackNavigator(
  {
    UserView: { screen: UserView }
  },
  {
    initialRouteName: "UserView",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(UserViewStack);
