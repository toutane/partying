// import React, { useState, useEffect, useContext } from "react";
// import firebase from "../firebase/Firebase";

// import { AuthContext } from "./AuthContext";
// import { UserContext } from "./UserContext";

// const FeedContext = React.createContext();
// const { Provider } = FeedContext;

// const FeedProvider = props => {
//   const { authenticated } = useContext(AuthContext);
//   const { currentUserId } = useContext(UserContext);
//   const [notes, setNotes] = useState([]);
//   const [loaded, setLoaded] = useState(false);

//   const [currentNote, setCurrentNote] = useState({ title: "" });

//   useEffect(() => {
//     authenticated && feedListener();
//   }, [authenticated]);

//   async function feedListener() {
//     firebase.db
//       .collection("users")
//       .doc(currentUserId)
//       .collection("exams")
//       .onSnapshot(() => loadNotes());
//   }

//   async function loadNotes() {
//     const notes = await firebase.db
//       .collection("users")
//       .doc(currentUserId)
//       .collection("exams")
//       .get();
//     return (
//       setNotes(
//         notes.docs.map(doc => ({
//           ...doc.data(),
//           ...{ id: doc.id }
//         }))
//       ),
//       setLoaded(true)
//     );
//   }

//   async function loadCurrentNote(noteId) {
//     const note = await firebase.db
//       .collection("users")
//       .doc(currentUserId)
//       .collection("exams")
//       .doc(noteId)
//       .get();
//     return setCurrentNote(note.data());
//   }

//   return (
//     <Provider
//       value={{
//         notes,
//         currentNote,
//         setNotes,
//         loadNotes,
//         loadCurrentNote,
//         loaded
//       }}
//     >
//       {props.children}
//     </Provider>
//   );
// };

// export { FeedProvider, FeedContext };
