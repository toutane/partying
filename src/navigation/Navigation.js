import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Feed from "../components/views/Feed";
import Login from "../components/views/Login";
import Register from "../components/views/Register";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          inactiveTintColor: "#333333",
          activeTintColor: "#1DC161"
        }}
      >
        <Tab.Screen
          name="Notifications"
          component={Feed}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => (
              <Feather name="bell" size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({ color }) => (
              <Feather name="grid" size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Auth}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: color
                }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/80847132_1150219625428179_1223222822092931072_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=QRo_CYtfBGIAX8jBYkg&oh=3fa73a07ebc74ed97a0640a90e5dc2ed&oe=5E89B572"
                  // "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/70639440_499542157443515_3701313669351604224_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=YfscEbN7wbkAX-vFG5v&oh=f95ec4ffef70650e15eb936ac99508e2&oe=5E871D55"
                }}
              />
              /* <Feather name="circle" size={25} color={color} /> */
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
