import React, { useEffect, useContext } from "react";
import { Notifications } from "expo";

import { AuthContext } from "../contexts/AuthContext";

export default PushNotificationsListener = (props) => {
  const { authenticated } = useContext(AuthContext);
  useEffect(() => {
    Notifications.addListener(handleRecievePushNotification);
  }, []);

  handleRecievePushNotification = (notifications) => {
    notifications.data.redirect
      ? props.navigation.navigate(notifications.data.routeName)
      : null;
  };
  return null;
};
