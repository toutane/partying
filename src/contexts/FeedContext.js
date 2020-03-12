import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const FeedContext = React.createContext();
const { Provider } = FeedContext;

const FeedProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId } = useContext(UserContext);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    currentUserId !== "" && feedListener();
  }, [currentUserId]);

  // useEffect(() => {
  //   !authenticated && feedListener.stop();
  // }, [authenticated]);

  // useEffect(() => {
  //   console.log(parties);
  // }, [parties]);

  async function feedListener() {
    firebase.db
      .collection("parties")
      .where("participants_id", "array-contains", currentUserId)
      .onSnapshot(() => loadFeed());
  }

  async function loadFeed() {
    const parties = await firebase.db
      .collection("parties")
      .where("participants_id", "array-contains", currentUserId)
      .get();
    return setParties(
      parties.docs.map(doc => ({
        ...doc.data()
      }))
    );
  }

  async function loadParticipants(party_id) {
    const participants = await firebase.db
      .collection("parties")
      .doc(party_id)
      .collection("participants")
      .get();
    return participants.docs.map(doc => ({
      ...doc.data()
    }));
  }
  return (
    <Provider
      value={{
        parties,
        loadParticipants
      }}
    >
      {props.children}
    </Provider>
  );
};

export { FeedProvider, FeedContext };
