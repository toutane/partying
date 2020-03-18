import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../firebase/Firebase";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const [currentUserData, setCurrentUserData] = useState({});
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUserParties, setCurrentUserParties] = useState([]);

  useEffect(() => {
    authenticated
      ? (listenUserData(firebase.auth.currentUser.uid),
        setCurrentUserId(firebase.auth.currentUser.uid))
      : setCurrentUserId("");
  }, [authenticated]);

  useEffect(() => {
    currentUserId !== "" && userPartiesListener();
  }, [currentUserId]);

  // useEffect(() => console.log(currentUserData)), [currentUserData];

  function listenUserData(uid) {
    firebase.db
      .collection("users")
      .doc(uid)
      .onSnapshot(() => loadUserData(uid));
  }

  async function loadUserData(uid) {
    const user = await firebase.db
      .collection("users")
      .doc(uid)
      .get();
    return setCurrentUserData(user.data());
  }

  async function userPartiesListener() {
    firebase.db
      .collection("parties")
      .where("organizer_id", "==", currentUserId)
      .onSnapshot(() => loadUserParties());
  }

  async function loadUserParties() {
    const parties = await firebase.db
      .collection("parties")
      .where("organizer_id", "==", currentUserId)
      .get();
    return setCurrentUserParties(
      parties.docs.map(doc => ({
        ...doc.data()
      }))
    );
  }

  return (
    <Provider
      value={{
        currentUserId,
        currentUserData,
        currentUserParties
      }}
    >
      {props.children}
    </Provider>
  );
};

export { UserProvider, UserContext };
