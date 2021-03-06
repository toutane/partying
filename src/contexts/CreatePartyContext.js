import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";
import { PartyContext } from "./PartyContext";
import { LocationContext } from "./LocationContext";

const moment = require("moment");

const CreatePartyContext = React.createContext();
const { Provider } = CreatePartyContext;

const CreatePartyProvider = (props) => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);
  const { deleteParty } = useContext(PartyContext);

  const { sentLocation } = useContext(LocationContext);

  const [canContinue, setCanContinue] = useState(false);
  const [partyName, setPartyName] = useState("");
  const [partyDescription, setPartyDescription] = useState("");
  const [guests_id, setGuests_id] = useState([
    // "LQGwToCjxKQJajXB5Yrr",
    // "YYAQCJnmQMY1JpTG6Gda",
  ]);
  const [severalDays, setSeveralDays] = useState(false);
  const [partyStarts, setPartyStarts] = useState({
    date: new Date(),
    time: new Date(),
  });
  const [partyEnds, setPartyEnds] = useState({
    date: new Date(
      new Date(partyStarts.date).setDate(
        new Date(partyStarts.date).getDate() + 1
      )
    ),
    time: new Date(
      new Date(partyStarts.time).setHours(partyStarts.time.getHours() + 1)
    ),
  });
  const [dateDiff, setDateDiff] = useState(
    Math.floor(
      (Date.UTC(
        partyEnds.date.getFullYear(),
        partyEnds.date.getMonth(),
        partyEnds.date.getDate()
      ) -
        Date.UTC(
          partyStarts.date.getFullYear(),
          partyStarts.date.getMonth(),
          partyStarts.date.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    )
  );
  const [location, setLocation] = useState({});
  const [interphone, setInterphone] = useState("");
  const [entry_code, setEntry_code] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    setLocation(sentLocation);
    // console.log(sentLocation);
  }, [sentLocation]);

  useEffect(() => {
    setDateDiff(
      Math.floor(
        (Date.UTC(
          partyEnds.date.getFullYear(),
          partyEnds.date.getMonth(),
          partyEnds.date.getDate()
        ) -
          Date.UTC(
            partyStarts.date.getFullYear(),
            partyStarts.date.getMonth(),
            partyStarts.date.getDate()
          )) /
          (1000 * 60 * 60 * 24)
      )
    );
  }, [partyStarts, partyEnds]);

  useEffect(() => {
    Math.sign(dateDiff) === -1 && setDateDiff((prvState) => 365 + prvState);
  }, [dateDiff]);

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
          avatar: currentUserData.avatar,
        },
        name: partyName,
        description: partyDescription,
        severalDays: severalDays,
        duration: dateDiff,
        guests_id: guests_id,
        participants_id: [],
        start: {
          date: moment(partyStarts.date).format(),
          time: moment(partyStarts.time).format(),
        },
        end: {
          date: moment(partyEnds.date).format(),
          time: severalDays
            ? moment(partyEnds.time).format()
            : moment(partyStarts.time).format(),
        },
        location: location,
        entry_code: entry_code,
        interphone: interphone,
        house: house,
      })
      .then((doc) => {
        firebase.db
          .collection("parties")
          .where("party_id", "==", uuid)
          .get()
          .then(() =>
            firebase.db.collection("parties").doc(doc.id).update({
              party_id: doc.id,
            })
          )
          .then(() => {
            firebase.db
              .collection("users")
              .doc(currentUserId)
              .update({
                parties_id: currentUserData.parties_id.concat([doc.id]),
              });
          });
      })

      .then(() => props.navigation.navigate("Account"))
      .catch((error) => error);
  }

  return (
    <Provider
      value={{
        canContinue,
        setPartyName,
        setPartyDescription,
        setGuests_id,
        guests_id,
        partyDescription,
        severalDays,
        setSeveralDays,
        dateDiff,
        partyStarts,
        setPartyStarts,
        partyEnds,
        setPartyEnds,
        entry_code,
        interphone,
        house,
        setEntry_code,
        setInterphone,
        setHouse,
        createParty,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { CreatePartyProvider, CreatePartyContext };
