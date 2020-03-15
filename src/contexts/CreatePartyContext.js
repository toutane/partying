import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const moment = require("moment");

const CreatePartyContext = React.createContext();
const { Provider } = CreatePartyContext;

const CreatePartyProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);

  const [canContinue, setCanContinue] = useState(false);
  const [partyName, setPartyName] = useState("");
  const [partyDescription, setPartyDescription] = useState("");
  const [partyStarts, setPartyStarts] = useState({
    date: new Date(),
    time: new Date()
  });

  useEffect(() => {
    console.log(`${partyName} - ${partyDescription}`);
  }, [partyName, partyDescription]);

  useEffect(() => {
    partyName !== "" && partyDescription !== ""
      ? setCanContinue(true)
      : setCanContinue(false);
  }, [partyName, partyDescription]);

  async function createParty(props) {
    await firebase.db
      .collection("parties")
      .add({
        party_id: "",
        organizer_id: currentUserId,
        organizer: {
          user_id: currentUserId,
          username: currentUserData.username,
          avatar: currentUserData.avatar
        },
        name: partyName,
        description: partyDescription,
        guests_id: [],
        participants_id: [],
        start: {
          date: moment(partyStarts.date).format("ll"),
          time: moment(partyStarts.date).format("LT")
        },
        end: { date: "", time: "" },
        location: ""
      })
      .then(e => {
        props.navigation.navigate("Account");
      });
  }

  return (
    <Provider
      value={{
        canContinue,
        setPartyName,
        setPartyDescription,
        partyStarts,
        setPartyStarts,
        createParty
      }}
    >
      {props.children}
    </Provider>
  );
};

export { CreatePartyProvider, CreatePartyContext };
