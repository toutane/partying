import React, { useContext } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";

import BottomTabBar from "./BottomTabBar/BottomTabBar";
import AuthStack from "./stacks/AuthStack";
import PartyViewStack from "./stacks/PartyViewStack";
import UserViewStack from "./stacks/UserViewStack";
import AccountStack from "./stacks/AccountStack";
import SettingsStack from "./stacks/SettingsStack";

import Notifications from "../components/views/NotificationsView";
import Feed from "../components/views/FeedView";
import Account from "../components/views/AccountView";
import NewPartyView from "../components/views/NewPartyView";

const TabBarNavigator = createBottomTabNavigator(
  {
    Notifications: { screen: Notifications },
    Feed: { screen: Feed },
    Account: { screen: Account },
    NewParty: { screen: NewPartyView }
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        routeName === "Notifications"
          ? (iconName = `bell`)
          : routeName === "Feed"
          ? (iconName = `grid`)
          : routeName === "Account"
          ? (iconName = `user`)
          : (iconName = `plus-circle`);

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
    initialRouteName: "Account",
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
    PartyViewStack: PartyViewStack,
    UserViewStack: UserViewStack,
    AccountStack: AccountStack,
    SettingsStack: SettingsStack
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
