import React, { useState, useEffect, useContext } from "react";
import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import { AppContext } from "./AppContext";

const PushNotificationsContext = React.createContext();
const { Provider } = PushNotificationsContext;

const PushNotificationsProvider = (props) => {
  const { appState } = useContext(AppContext);

  const [isPushNotifActive, setIsPushNotifActive] = useState(false);
  const [isDirectMentionsActive, setIsDirectMentionsActive] = useState(false);

  useEffect(() => {
    appState == "active" && checkNotificationsPermissionsStatus();
  }, [appState]);

  async function checkNotificationsPermissionsStatus() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    status === "granted"
      ? setIsPushNotifActive(true)
      : (setIsPushNotifActive(false), setIsDirectMentionsActive(false));
  }

  async function registerForPushNotificationsAsync() {
    return (token = await Notifications.getExpoPushTokenAsync());
  }

  const _storeData = async (isDirectMentionsActive) => {
    try {
      await AsyncStorage.setItem(
        "isDirectMentionsActive",
        JSON.stringify(isDirectMentionsActive)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("isDirectMentionsActive");
      if (value !== null) {
        setIsDirectMentionsActive(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  useEffect(() => {
    _storeData(isDirectMentionsActive);
  }, [isDirectMentionsActive]);

  return (
    <Provider
      value={{
        isPushNotifActive,
        setIsPushNotifActive,
        isDirectMentionsActive,
        setIsDirectMentionsActive,
        registerForPushNotificationsAsync,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { PushNotificationsProvider, PushNotificationsContext };
