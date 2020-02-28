import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBghTn910JHCJ0q_DLRZHtrcamAWNBgzxY",
  authDomain: "exam-app-23b3f.firebaseapp.com",
  databaseURL: "https://exam-app-23b3f.firebaseio.com",
  projectId: "exam-app-23b3f",
  storageBucket: "exam-app-23b3f.appspot.com",
  messagingSenderId: "852852370643",
  appId: "1:852852370643:web:5ad92eb0beb700d5f27826",
  measurementId: "G-CEMWPYTT0H"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  getCurrentUserId() {
    return this.auth.currentUser && this.auth.currentUser.uid;
  }
  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}
export default new Firebase();
