import React, { useState, useContext, useEffect } from "react";
import firebase from "../firebase/Firebase";
import { AsyncStorage } from "react-native";

import { PushNotificationsContext } from "../contexts/PushNotificationsContext";

const moment = require("moment");

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = (props) => {
  const { registerForPushNotificationsAsync } = useContext(
    PushNotificationsContext
  );

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(
    () =>
      console.log(authenticated ? "Authenticated ✅" : "Not authenticated ❌"),
    [authenticated]
  );

  async function register(username, email, password) {
    await firebase.auth.createUserWithEmailAndPassword(email, password);
    let token = await registerForPushNotificationsAsync();
    await firebase.db
      .collection("users")
      .doc(firebase.auth.currentUser.uid)
      .set({
        user_id: firebase.auth.currentUser.uid,
        username: username,
        name: username,
        email: email,
        avatar:
          // "https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
          // "https://www.consulib.com/assets/images/empty_avatar.png",
          "https://www.polygongroup.com/UI/build/img/recruiter2.jpg",
        friends_id: [],
        parties_id: [],
        bio: "I'm using Partying !",
        register_date: moment().format(),
        expoPushToken: token,
      });

    return firebase.auth.currentUser.updateProfile({
      displayName: username,
    });
  }
  async function login(email, password) {
    return firebase.auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return firebase.auth.signOut();
  }

  return (
    <Provider
      value={{
        authenticated,
        setAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
