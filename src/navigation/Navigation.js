import React, { useContext } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

import BottomTabBar from "./BottomTabBar/BottomTabBar";
import AuthStack from "./stacks/AuthStack";
import PartyViewStack from "./stacks/PartyViewStack";
import NewPartyStack from "./stacks/NewPartyStack";
import UserViewStack from "./stacks/UserViewStack";
import AccountStack from "./stacks/AccountStack";
import SettingsStack from "./stacks/SettingsStack";

import Feed from "../components/views/FeedView";
import Account from "../components/views/AccountView";
import NewPartyView from "../components/views/NewPartyView";
import PlusButton from "./PlusButton/PlusButton";

const TabBarNavigator = createBottomTabNavigator(
  {
    Feed: { screen: Feed },
    NewParty: { screen: NewPartyView },
    Account: { screen: Account },
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        routeName === "Feed"
          ? (iconName = `grid`)
          : routeName === "Account"
          ? (iconName = `user`)
          : (iconName = `plus`);

        return (
          <View>
            {iconName !== "plus" ? (
              <Feather
                name={iconName}
                size={28}
                color={tintColor}
                style={{ marginTop: 15 }}
              />
            ) : (
              <PlusButton
                icon={iconName}
                color={tintColor}
                navigation={navigation}
              />
            )}
          </View>
        );
      },
    }),
    initialRouteName: "Account",
    tabBarComponent: (props) => (
      <BottomTabBar
        {...props}
        activeTintColor="rgb(52, 199, 89)"
        inactiveTintColor="rgb(142, 142, 147)"
      />
    ),
  }
);

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: TabBarNavigator,
    AuthStack: AuthStack,
    PartyViewStack: PartyViewStack,
    NewPartyStack: NewPartyStack,
    UserViewStack: UserViewStack,
    AccountStack: AccountStack,
    SettingsStack: SettingsStack,
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(AppNavigator);
