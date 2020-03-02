import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMW36J_ENYvJKUI6Dt3sRAVITkPqJx_VI",
  authDomain: "partying-9083a.firebaseapp.com",
  databaseURL: "https://partying-9083a.firebaseio.com",
  projectId: "partying-9083a",
  storageBucket: "partying-9083a.appspot.com",
  messagingSenderId: "603164020847",
  appId: "1:603164020847:web:0dcbdc3bb4f2d212eefd9a",
  measurementId: "G-XCE68R536W"
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
