import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const FeedContext = React.createContext();
const { Provider } = FeedContext;

const FeedProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    currentUserId !== "" && feedListener();
  }, [currentUserId]);

  useEffect(() => {
    console.log(parties);
  }, [parties]);

  async function feedListener() {
    firebase.db
      .collection("parties")
      .where("participants", "array-contains", currentUserId)
      .onSnapshot(() => loadFeed());
  }

  async function loadFeed() {
    const parties = await firebase.db
      .collection("parties")
      .where("participants", "array-contains", currentUserId)
      .get();
    return setParties(
      parties.docs.map(doc => ({
        ...doc.data(),
        ...{ id: doc.id }
      }))
    );
  }

  return (
    <Provider
      value={{
        parties
      }}
    >
      {props.children}
    </Provider>
  );
};

export { FeedProvider, FeedContext };
