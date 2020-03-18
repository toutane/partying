import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";
import { PartyContext } from "./PartyContext";

const moment = require("moment");

const CreatePartyContext = React.createContext();
const { Provider } = CreatePartyContext;

const CreatePartyProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);
  const { deleteParty } = useContext(PartyContext);

  const [canContinue, setCanContinue] = useState(false);
  const [partyName, setPartyName] = useState("");
  const [partyDescription, setPartyDescription] = useState("");
  const [partyStarts, setPartyStarts] = useState({
    date: moment().format(),
    time: moment().format()
  });

  useEffect(() => {
    console.log(`${partyName} - ${partyDescription}`);
  }, [partyName, partyDescription]);

  useEffect(() => {
    partyName !== "" && partyDescription !== ""
      ? setCanContinue(true)
      : setCanContinue(false);
  }, [partyName, partyDescription]);

  async function createParty(uuid, props) {
    await firebase.db
      .collection("parties")
      .add({
        party_id: uuid,
        create_At: moment().format(),
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
          date: partyStarts.date,
          time: partyStarts.time
        },
        end: { date: partyStarts.date, time: partyStarts.time },
        location: "20525 Mariani Avenue"
      })
      .then(doc => {
        firebase.db
          .collection("parties")
          .where("party_id", "==", uuid)
          .get()
          .then(() =>
            firebase.db
              .collection("parties")
              .doc(doc.id)
              .update({
                party_id: doc.id
              })
          )
          .then(() => {
            firebase.db
              .collection("users")
              .doc(currentUserId)
              .update({
                parties_id: currentUserData.parties_id.concat([doc.id])
              });
          });
      })

      .then(() => props.navigation.navigate("Account"))
      .catch(error => error);
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
