import React, { useState, useEffect, useContext } from "react";
import firebase from "./Firebase";
import { View } from "react-native";

import { AuthContext } from "../contexts/AuthContext";
import AllContextsProvider from "../contexts/AllContexts";
import Navigation from "../navigation/Navigation";
import AuthStack from "../navigation/stacks/AuthStack";

export default function FirebaseInitialized(props) {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      loading
        ? console.log("\x1b[33m", "Firebase", "\x1b[0m", "initialization...")
        : console.log("\x1b[32m", "Firebase", "\x1b[0m", "initialized"),
    [loading]
  );

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
      firebase.auth.onAuthStateChanged(user => {
        user
          ? (setLoading(false), setAuthenticated(true))
          : (setLoading(false), setAuthenticated(false));
      });
    });
  }, []);

  return firebaseInitialized !== false ? (
    authenticated ? (
      <AllContextsProvider>
        <Navigation />
      </AllContextsProvider>
    ) : (
      <AuthStack />
    )
  ) : (
    <View />
  );
}
