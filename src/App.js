import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import "firebase/analytics";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Navigation';

firebase.initializeApp({
  apiKey: "AIzaSyCrIG73G5Kjhx2njmTCC5baoYSav8IBal8",
  authDomain: "fir-auth-af135.firebaseapp.com",
  databaseURL: "https://fir-auth-af135.firebaseio.com",
  projectId: "fir-auth-af135",
  storageBucket: "fir-auth-af135.appspot.com",
  messagingSenderId: "1072541078586",
  appId: "1:1072541078586:web:1898a1405ff1fff0495103",
  measurementId: "G-YSC6RPVCMT",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation user={this.state.user} />
        </div>
      </Router>
    );
  }
}

export default App;
