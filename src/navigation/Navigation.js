import React, { useContext } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";

import BottomTabBar from "./BottomTabBar/BottomTabBar";
import AuthStack from "./stacks/AuthStack";
import PartyViewStack from "./stacks/PartyViewStack";

import Notifications from "../components/views/NotificationsView";
import Feed from "../components/views/FeedView";
import Profile from "../components/views/ProfileView";

const TabBarNavigator = createBottomTabNavigator(
  {
    Notifications: { screen: Notifications },
    Feed: { screen: Feed },
    Profile: { screen: Profile }
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        routeName === "Notifications"
          ? (iconName = `bell`)
          : routeName === "Feed"
          ? (iconName = `grid`)
          : (iconName = `user`);

        return (
          <Feather
            name={iconName}
            size={28}
            color={tintColor}
            style={{ marginTop: 10 }}
          />
        );
      }
    }),
    initialRouteName: "Feed",
    tabBarComponent: props => (
      <BottomTabBar
        {...props}
        activeTintColor="rgb(52, 199, 89)"
        inactiveTintColor="rgb(142, 142, 147)"
      />
    )
  }
);

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: TabBarNavigator,
    AuthStack: AuthStack,
    PartyViewStack: PartyViewStack
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
