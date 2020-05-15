import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { AppContext } from "./AppContext";
import firebase from "../firebase/Firebase";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = (props) => {
  const { authenticated } = useContext(AuthContext);
  const { appState } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState({});
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUserParties, setCurrentUserParties] = useState({});

  // Array avec toutes les variables concernats de près ou de loin les requests du user
  const [currentUserRequests, setCurrentUserRequests] = useState([]);
  // useEffect(() => console.log(currentUserData), [currentUserData]);

  useEffect(() => {
    authenticated
      ? (listenUserData(firebase.auth.currentUser.uid),
        setCurrentUserId(firebase.auth.currentUser.uid))
      : setCurrentUserId("");
  }, [authenticated]);

  useEffect(() => {
    currentUserId !== "" ? userPartiesListener() : null;
  }, [currentUserId]);

  function listenUserData(uid) {
    firebase.db
      .collection("users")
      .doc(uid)
      .onSnapshot(() => loadUserData(uid));
  }

  async function loadUserData(uid) {
    const user = await firebase.db.collection("users").doc(uid).get();
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
      parties.docs.map((doc) => ({
        ...doc.data(),
      }))
    );
  }

  return (
    <Provider
      value={{
        isLoading,
        setIsLoading,
        loadUserData,
        currentUserId,
        currentUserData,
        currentUserRequests,
        setCurrentUserRequests,
        currentUserParties,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { UserProvider, UserContext };
