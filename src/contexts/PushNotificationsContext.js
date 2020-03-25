import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

const PushNotificationsContext = React.createContext();
const { Provider } = PushNotificationsContext;

const PushNotificationsProvider = props => {
  const [isPushNotifActive, setIsPushNotifActive] = useState(false);
  const [isDirectMentionsActive, setIsDirectMentionsActive] = useState(false);

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
