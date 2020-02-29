import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../../components/views/LoginView";
import Register from "../../components/views/RegisterView";

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AuthStack);
