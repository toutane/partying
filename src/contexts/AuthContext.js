import React, { useState } from "react";
import firebase from "../firebase/firebase";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = props => {
  const [authenticated, setAuthenticated] = useState(false);
  async function register(username, email, password) {
    await firebase.auth.createUserWithEmailAndPassword(email, password);
    await firebase.db
      .collection("users")
      .doc(firebase.auth.currentUser.uid)
      .set({
        username: username,
        email: email
      });
    return firebase.auth.currentUser.updateProfile({
      displayName: username
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
        logout
      }}
    >
      {props.children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
