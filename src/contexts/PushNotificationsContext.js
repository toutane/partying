import React, { useState, useEffect } from "react";
import { AppState, AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";

const PushNotificationsContext = React.createContext();
const { Provider } = PushNotificationsContext;

const PushNotificationsProvider = props => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [isPushNotifActive, setIsPushNotifActive] = useState(false);
  const [isDirectMentionsActive, setIsDirectMentionsActive] = useState(false);

  useEffect(() => {
    checkNotificationsPermissionsStatus();
  }, [appState]);

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
  }, []);

  _handleAppStateChange = nextAppState => {
    // if (appState.match(/inactive|background/) && nextAppState === "active") {
    //   console.log("App has come to the foreground!");
    // }
    setAppState(nextAppState);
  };

  async function checkNotificationsPermissionsStatus() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    status === "granted"
      ? setIsPushNotifActive(true)
      : (setIsPushNotifActive(false), setIsDirectMentionsActive(false));
  }
  const _storeData = async isDirectMentionsActive => {
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
        setIsDirectMentionsActive
      }}
    >
      {props.children}
    </Provider>
  );
};

export { PushNotificationsProvider, PushNotificationsContext };
