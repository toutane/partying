import React, { useState, useEffect, useContext } from "react";
import { CreatePartyContext } from "./CreatePartyContext";
import firebase from "../firebase/Firebase";

const GuestsContext = React.createContext();
const { Provider } = GuestsContext;

const GuestsProvider = (props) => {
  const { guests_id } = useContext(CreatePartyContext);
  const [guests_data, setGuests_data] = useState([]);

  // // useEffect(() => console.log(guests_id), [guests_id]);

  async function loadGuest_data(guest_id) {
    // console.log("fetching guests id & avatar...");
    const data = await firebase.db
      .collection("users")
      .where("user_id", "==", guest_id)
      .get();
    return setGuests_data((prvState) =>
      prvState.concat(
        data.docs.map((doc) => ({
          user_id: doc.data().user_id,
          avatar: doc.data().avatar,
        }))
      )
    );
  }

  return (
    <Provider value={{ guests_data, setGuests_data, loadGuest_data }}>
      {props.children}
    </Provider>
  );
};

export { GuestsProvider, GuestsContext };
