import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../firebase/Firebase";

const FriendsContext = React.createContext();
const { Provider } = FriendsContext;

const FriendsProvider = props => {
  async function loadFriends(user_id) {
    const friends = await firebase.db
      .collection("users")
      .doc(user_id)
      .collection("friends")
      .get();
    return friends.docs.map(doc => ({
      ...doc.data()
    }));
  }

  return (
    <Provider
      value={{
        loadFriends
      }}
    >
      {props.children}
    </Provider>
  );
};

export { FriendsProvider, FriendsContext };
