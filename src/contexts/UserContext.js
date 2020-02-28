import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../firebase/Firebase";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const [currentUserData, setCurrentUserData] = useState({});
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    authenticated
      ? (listenUserData(firebase.auth.currentUser.uid),
        setCurrentUserId(firebase.auth.currentUser.uid))
      : setCurrentUserId("");
  }, [authenticated]);

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
  return (
    <Provider
      value={{
        currentUserId,
        currentUserData
      }}
    >
      {props.children}
    </Provider>
  );
};

export { UserProvider, UserContext };
