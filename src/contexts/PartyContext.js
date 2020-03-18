import React, { useContext } from "react";
import firebase from "../firebase/Firebase";
import { UserContext } from "./UserContext";

const PartyContext = React.createContext();
const { Provider } = PartyContext;

const PartyProvider = props => {
  const { currentUserId, currentUserData } = useContext(UserContext);

  async function deleteParty(party_id) {
    await firebase.db
      .collection("parties")
      .doc(party_id)
      .delete()
      .then(() =>
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .update({
            parties_id: currentUserData.parties_id.filter(id => id !== party_id)
          })
      )
      .catch(error => console.log(error));
  }

  return (
    <Provider
      value={{
        deleteParty
      }}
    >
      {props.children}
    </Provider>
  );
};

export { PartyProvider, PartyContext };
