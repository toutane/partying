import React, { useState, useEffect, useContext } from "react";
import { CreatePartyContext } from "./CreatePartyContext";
import firebase from "../firebase/Firebase";

const GuestsContext = React.createContext();
const { Provider } = GuestsContext;

const GuestsProvider = (props) => {
  const { setGuests_id } = useContext(CreatePartyContext);
  const [guests_data, setGuests_data] = useState([]);

  async function loadGuest_data(guest) {
    // const data = await firebase.db
    //   .collection("users")
    //   .where("user_id", "==", guest_id)
    //   .get();
    // return setGuests_data((prvState) =>
    //   prvState.concat(
    //     data.docs.map((doc) => ({
    //       user_id: doc.data().user_id,
    //       avatar: doc.data().avatar,
    //     }))
    //   )
    // );
    setGuests_data((prvState) =>
      prvState.concat({
        user_id: guest.user_id,
        avatar: guest.avatar,
      })
    );
  }

  const handleTouchSelected = (user) => {
    setGuests_id((prvState) => prvState.concat(user.user_id));
    loadGuest_data(user);
  };

  const handleTouchUnselected = (user) => {
    setGuests_id((prvState) => prvState.filter((id) => id !== user.user_id));
    setGuests_data((prvState) =>
      prvState.filter((obj) => obj.user_id !== user.user_id)
    );
  };

  return (
    <Provider
      value={{
        guests_data,
        setGuests_data,
        loadGuest_data,
        handleTouchSelected,
        handleTouchUnselected,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { GuestsProvider, GuestsContext };
