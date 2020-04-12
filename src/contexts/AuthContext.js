import React, { useState, useContext } from "react";
import firebase from "../firebase/Firebase";

import { PushNotificationsContext } from "../contexts/PushNotificationsContext";

const moment = require("moment");

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = (props) => {
  const { registerForPushNotificationsAsync } = useContext(
    PushNotificationsContext
  );

  const [authenticated, setAuthenticated] = useState(false);

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
          "https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png",
        friends_id: [],
        parties_id: [],
        bio: "It's cool to be here !",
        register_date: moment().format(),
        expoPushToken: token,
      });
    return firebase.auth.currentUser.updateProfile({
      displayName: username,
    });
  }
  function login(email, password) {
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
